import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import connectDB from "./lib/db";
import { User } from "./models/User";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    

    Credentials({
      name: "Credentials",

      credentials: {
        username: { label: "username", type: "username" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const username = credentials.username as string | undefined;
        const password = credentials.password as string | undefined;

        if (!username || !password) {
          throw new CredentialsSignin("Please provide both username & password");
        }

        await connectDB();

        const user = await User.findOne({ username }).select("+password +role");

        if (!user) {
          throw new Error("Invalid username or password");
        }

        if (!user.password) {
          throw new Error("Invalid username or password");
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new Error("Password did not matched");
        }

        const userData = {
          username: user.username,
          email: user.email,
          role: user.role,
          id: user._id,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async session({ session, token }) {
      if (token?.sub && token?.role) {
        session.user.id = token.sub;
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ user, account }) => {
       

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});
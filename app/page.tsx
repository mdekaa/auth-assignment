import { login } from "@/actions/user";
import { auth, signIn } from "@/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();
  const user = session?.user;

  if (user) redirect('/dashboard');

  return (
    <div className="flex items-center justify-center mt-20 px-4 sm:px-6 lg:px-8">
    
      <div className=" max-w-md w-full mx-auto rounded-3xl md:rounded-2xl p-4 md:p-8 shadow-lg  bg-gradient-to-r from-slate-600 to-slate-800">
        <div className="text-center mb-6">
          <img
            src="https://www.geekster.in/Logo.svg"
            alt="Geekster"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-white dark:text-white">
            Good to see you again
          </h2>
        </div>
        <form className="my-8" action={login}>
          <div className="mb-4">
            <Label htmlFor="username" className="block text-sm font-medium text-white dark:text-gray-300">
              Username
            </Label>
            <Input
              id="username"
              placeholder="geek"
              type="string"
              name="username"
              className="text-slate-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <Label htmlFor="password" className="block text-sm font-medium text-white dark:text-gray-300">
              Password
            </Label>
            <Input
              id="password"
              placeholder="*************"
              type="password"
              name="password"
              className="text-slate-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-6"
            />
          </div>
          <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-700 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-lg transition-transform transform hover:scale-105">
            Login &rarr;
          </button>
          <p className="text-right text-white text-sm max-w-sm mt-4 dark:text-neutral-300">
            Dont have an account? <Link href="/register" className="ml-1 text-white hover:text-indigo-500">Register</Link>
          </p>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
};

export default Home;

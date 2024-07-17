import { register } from "@/actions/user";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import RegistrationForm from "@/components/RegisterForm";

const Register = async () => {
  const session = await auth();
  const user = session?.user;

  if (user) redirect('/dashboard');

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="top-0 py-3 backdrop-blur-lg border-md rounded-2xl p-10 pt-10 bg-gradient-to-r from-slate-600 to-slate-800">
        <div className="text-center mb-6">
          <img
            src="https://www.geekster.in/Logo.svg"
            alt="Geekster"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-white dark:text-white">
            Welcome to Assignment
          </h2>
          <p className="text-white text-sm max-w-sm mt-2 dark:text-white">
            Please provide all the necessary information
          </p>
        </div>
        <RegistrationForm/>
      </div>
    </div>
  );
};

export default Register;

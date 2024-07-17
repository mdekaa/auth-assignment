"use client"
import Link from "next/link";
import { Button } from "./ui/button";
import { auth, signOut } from "@/auth";
import { register } from "@/actions/user";
import { Label } from "./ui/label";
import { Input } from "./ui/input";


const RegistrationForm = async () => {

    
   


  return (
    <>
        

        
        <form className="my-8" action={register}>
            <div className="mb-4">
            <Label htmlFor="username" className="block text-sm font-medium text-white dark:text-gray-300">
                Username
            </Label>
            <Input
                id="username"
                placeholder="TylerDurden (must be more than 3 letters)"
                type="text"
                name="username"
                className="text-slate-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            </div>
            <div className="mb-4">
            <Label htmlFor="email" className="block text-sm font-medium text-white dark:text-gray-300">
                Email Address
            </Label>
            <Input
                id="email"
                placeholder="test@mail.com"
                type="email"
                name="email"
                className="text-slate-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            </div>
            <div className="mb-6">
            <Label htmlFor="password" className="block text-sm font-medium text-white dark:text-gray-300">
                Password
            </Label>
            <Input
                id="password"
                placeholder="********* (must be more then 4 letters)"
                type="password"
                name="password"
                className="text-slate-400 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-6"
            />
            </div>
            <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-lg transition-transform transform hover:scale-105">
            Sign up &rarr;
            </button>
            <p className="text-right text-white text-sm max-w-sm mt-4 dark:text-neutral-300">
            Already have an account? <Link href="/" className="ml-1 text-white hover:text-indigo-500">Login</Link>
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
    
    </>
        
  );
};

export default RegistrationForm;
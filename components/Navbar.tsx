import Link from "next/link";
import { Button } from "./ui/button";
import { auth, signOut } from "@/auth";


const Navbar = async () => {
  const session = await auth();
  const user = session?.user;


  return (
    <nav className="  mt-10 ml-10 mr-10 mb-10 flex justify-around items-center py-4 bg-gradient-to-r from-slate-600 to-slate-800 text-zinc-100 border-md rounded-xl">
      <Link href="/" className=" text-lg font-semibold">
        Assignment
      </Link>

      <ul className="flex  md:flex  space-x-4 list-none">
      {!user ? (
        <>
          <li>
            <Link href="/" className="hover:text-gray-900">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="hover:text-gray-900">
              Register
            </Link>
          </li>
        </>
      ): (
        <>
        
        <li className="mt-2">
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>
            <li className="mt-2">
              <Link href="/admin" className=" hover:text-gray-400">
                Admin
              </Link>
            </li>

            
            <form
              action={async() => {
                'use server';
                await signOut();
              }}
            >
              <Button type="submit" variant={"ghost"}>
                Logout
              </Button>
            </form>
            </>
          
      )}
 
          
            
        
      

      </ul>
    </nav>
  );
};

export default Navbar;
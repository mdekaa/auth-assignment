"use server"

import connectdb from "@/lib/db";
import { User } from "@/models/User";
import { redirect } from "next/navigation";
import {hash} from "bcryptjs";
import { signIn } from "@/auth";

const login = async(formData: FormData) => {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    

    try {
        
        await signIn('credentials', {
            redirect: false,
            callbackUrl: '/dashboard',
            username,
            password, 
        })


    } catch (error) {
        console.log("invalid credentials")
    }

    redirect('/dashboard');
}

const register = async(formData : FormData) => {
   
    const username = formData.get('username') as string;
 
    const email = formData.get('email') as string;
   
    const password = formData.get('password') as string;

    if(!username ||  !email || !password){

        throw new Error("Please fill all fields")

    }
    if(username.length < 3){
        throw new Error("username must be more than 3 letters");
    }
    if(password.length < 4){
        throw new Error("password must be more than 4 letters");
    }

    await connectdb();

    //existing user
    const existingUser = await User.findOne({email});

    if(existingUser) throw new Error('User already exists');

    const hashedPassword = await hash(password, 10);

    await User.create({username, email , password: hashedPassword});

   

    console.log('User created succesfully')
    redirect('/dashboard')
  
};

const fetchAllUsers = async () => {
    await connectdb();
    const users = await User.find({});
    return users;
  };



export {register, login, fetchAllUsers};
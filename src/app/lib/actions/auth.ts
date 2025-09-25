"use server"

import { signIn, signOut} from "next-auth/react";

export const login = async()=>{
    console.log(login)
    await signIn("github",{redirectTo:"/"})
} 
export const logOut = async()=>{
    console.log(logOut)
    await signOut({ redirect: true, callbackUrl: "/" })
} 


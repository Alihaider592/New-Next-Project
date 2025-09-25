"use client"
import { signIn } from "next-auth/react";
export const SignInButton  = ()=>{

return(  <button onClick={()=>signIn("github")} className="border p-2 border-2 border-black bg-gray-300 m-5">sign in with github</button>   

)
}
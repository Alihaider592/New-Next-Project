"use client"
import { signIn } from "next-auth/react";
export const SignInButton  = ()=>{

return(  <button
  onClick={() => signIn("github")}
  className="
    flex items-center justify-center
    bg-black ml-26 text-white
    font-semibold
    py-2 px-6
    rounded-lg
    shadow-md
    hover:bg-gray-800
    transition duration-200
    m-5
  "
>
  Sign in with GitHub
</button>


)
}
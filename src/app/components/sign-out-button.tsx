"use client"
import { logOut } from "../lib/actions/auth";
export const SignOutButton  = ()=>{

return( <div>   <button onClick={()=>logOut()} className="bg-gray-600 
         bg-purple 
        text-white 
        font-semibold 
        py-2 px-6 
        rounded-lg 
        shadow-md
        hover:bg-purple-700
        transition 
        duration-200">Sign Out</button>   
</div>
)
}

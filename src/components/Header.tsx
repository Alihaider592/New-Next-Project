import React from 'react';
import Link from 'next/link';
import Themeswitcher from './Themeswitcher';
const Header = () => {
  return (
    <div className='flex justify-between mx-10 items-center '>
      <div><Link href="/"><img className='m-3 w-15 outline-2 outline-amber-300 rounded-full bg-amber-500' src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg"  /></Link></div>
      <div>
        <ul className='flex gap-8 font-bold text-lg'>
        <Link href="/">Home</Link>
        <Link href="/posts">posts</Link>
        <Link href="/userinfo">user info</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">SignUp</Link>
        </ul>
      </div>
      <div>
      <Themeswitcher/>  
      </div>
    </div>
  );
}

export default Header;

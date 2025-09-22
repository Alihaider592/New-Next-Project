import React from 'react';
import Link from 'next/link';
const Header = () => {
  return (
    <div className='flex justify-around items-center '>
      <div><Link href="/"><img className='m-3 w-15 outline-2 outline-amber-300 rounded-full bg-amber-500' src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg"  /></Link></div>
      <div>
        <ul className='flex gap-8 font-bold text-lg'>
        <Link href="/">Home</Link>
        <Link href="/posts">posts</Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;

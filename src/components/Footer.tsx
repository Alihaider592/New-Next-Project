import React from 'react'
const Footer = () => {
  return (
    <div className='flex flex-col mb-5 '>
    <div className='flex flex-col items-center'>
        <hr className='h-0.5 w-full bg-gray-500'/>
<h1 className="text-sm mt-5">© {new Date().getFullYear()} All rights reserved</h1>
    </div>
    </div>
  )
}

export default Footer
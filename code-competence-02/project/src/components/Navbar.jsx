import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-6 bg-slate-50 shadow-md'>
      <h1 className='font-bold text-3xl'>Tri<span className='text-[#023e8a]'>P</span>alu</h1>
      <div className='flex gap-x-4 text-[#023e8a] cursor-pointer hover:text-[#02228a]'>
        <p>Home</p>
        <p>About</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import Link from 'next/link'
import { TbError404 } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center hover:'> 
        <Link href ="/"><TbError404 /></Link>
        <ul className='flex space-x-6 '>
            <li  className='text-zinc-500 hover:text-black transition-colors'><Link href ="/"> Dashboard</Link></li>
            <li  className='text-zinc-500 hover:text-black transition-colors'><Link href ="/"> Issues</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar
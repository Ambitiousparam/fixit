'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbError404 } from "react-icons/tb";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentpath = usePathname();
  const [activePath, setActivePath] = useState(currentpath);

  useEffect(() => {
    setActivePath(currentpath);
  }, [currentpath]);

  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'> 
        <Link href="/"><TbError404 /></Link>
        <ul className='flex space-x-6 '>
            <li className={`transition-colors ${activePath === '/' ? 'text-black' : 'text-zinc-500 hover:text-black'}`}>
                <Link href="/">Dashboard</Link>
            </li>
            <li className={`transition-colors ${activePath === '/issues' ? 'text-black' : 'text-zinc-500 hover:text-black'}`}>
                <Link href="/issues/list">Issues</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;

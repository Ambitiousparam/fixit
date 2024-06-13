'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbError404 } from "react-icons/tb";
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Avatar, Box, Container, DropdownMenu, DropdownMenuContent, Flex, Text } from '@radix-ui/themes';

const Navbar = () => {
  const currentpath = usePathname();
   const {status,data:session} =  useSession();
  
  const [activePath, setActivePath] = useState(currentpath);

  useEffect(() => {
    setActivePath(currentpath);
  }, [currentpath]);

  return (
    <nav className='border-b mb-5 px-5 py-3'>
      <Container>

      
    
    <Flex justify="between">
      <Flex align="center" gap="3">
        <Link href="/"><TbError404 /></Link>
        <ul className='flex space-x-6 '>
            <li className={`transition-colors ${activePath === '/' ? 'text-black' : 'text-zinc-500 hover:text-black'}`}>
                <Link href="/">Dashboard</Link>
            </li>
            <li className={`transition-colors ${activePath === '/issues' ? 'text-black' : 'text-zinc-500 hover:text-black'}`}>
                <Link href="/issues/list">Issues</Link>
            </li>
        </ul>
      </Flex>
      <Box>
          {status ==='authenticated' && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar className='cursor-pointer' radius='full'  size="2"   src ={session.user!.image!} fallback="?"/>

              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label >
                  <Text size="2">
                  {session.user?.email}
                  </Text>
                </DropdownMenu.Label>
                <DropdownMenu.Item>
              <Link href = "/api/auth/signout">Sign out</Link>

                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          
          
          )}
          {status ==='unauthenticated' &&(

            <Link href="/api/auth/signin">Login</Link>
          )}
      </Box>
    </Flex>
    </Container>

    </nav>
  );  
};

export default Navbar;

"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
  const [opend, setOpened] = useState(false)
  return (
    <header className='py-[22px] px-[10px] sm:px-[25px] xl:px-[80px] shadow-md sticky top-0 right-0 bg-white z-10'>
        <nav className='flex justify-between items-center relative'>
            <Image src='/Logo.svg' alt='Real State Home Page' width={120} height={45} className='cursor-pointer' />
            <ul className='gap-[30px] hidden lg:flex'>
              <li><Link href='/' className='p-[10px]' >Home</Link></li>
              <li><Link href='/' className='p-[10px]' >About Us</Link></li>
              <li><Link href='/' className='p-[10px]' >Our Agents</Link></li>
              <li><Link href='/properties' className='p-[10px]' >Properties</Link></li>
              <li><Link href='/' className='p-[10px]' >Gallery</Link></li>
              <li><Link href='/' className='p-[10px]' >Contact Us</Link></li>
              <li><Link href='/' className='p-[10px]' >Log In</Link></li>
            </ul>
            <div className='lg:hidden'>
              <ul className={`${opend ? 'flex' : 'hidden'} navbar__menu gap-[30px]`}>
                <li><Link href='/' className='p-[10px]' >Home</Link></li>
                <li><Link href='/' className='p-[10px]' >About Us</Link></li>
                <li><Link href='/' className='p-[10px]' >Our Agents</Link></li>
                <li><Link href='/properties' className='p-[10px]' >Properties</Link></li>
                <li><Link href='/' className='p-[10px]' >Gallery</Link></li>
                <li><Link href='/' className='p-[10px]' >Contact Us</Link></li>
                <li><Link href='/' className='p-[10px]' >Log In</Link></li>
              </ul>
              <Image 
                src={`${opend ? '/closenavmenu.svg' : '/navmenu.svg'}`} 
                width={24} height={24} alt='Nav Menu' 
                className='flex lg:hidden cursor-pointer' 
                onClick={() => setOpened(prev => prev = !prev)}
              />
            </div>
        </nav>
    </header>
  )
}

import Image from 'next/image'
import React from 'react'

export default function Footer() {

  const col1 = {
    id: 1, 
    title: 'Features',
    links: [
      'Home', 'Become a Host', 'Pricing', 'Blog', 'Contact'
    ]
  }

  const col2 = {
    id: 2, 
    title: 'Company',
    links: [
      'About Us', 'Press', 'Contact', 'Careers', 'Blog'
    ]
  }

  const col3 = {
    id: 3, 
    title: 'Team and policies',
    links: [
      'Terms of servies', 'Privacy Policy', 'Security'
    ]
  }

  return (
    <footer className='py-[50px]'>
        <div className='container flex flex-wrap justify-between'>
            <div className='flex flex-col '>
              <Image src='/Logo.svg' alt='logo' width={120} height={44} className='mb-[20px]' />
              <h3 className='text-[#1B1D1F] mb-[13px] font-semibold text-[24px] leading-[32px]'>Contact Us</h3>
              <p className='text-[#6D737A] mb-[13px] text-[16px] leading-[24px]'>Call : +123 400 123</p>
              <p className='text-[#6D737A] mb-[13px] text-[16px] leading-[24px]'>Praesent nulla massa, hendrerit <br /> vestibulum gravida in, feugiat auctor felis.</p>
              <span className='text-[#363A3D] mb-[20px]'>Email: example@mail.com</span>
              <ul className='flex gap-[14px]'>
                <li className='p-[14px] bg-[#EDEFF6] rounded-[1px] cursor-pointer'><Image src='/facebook.svg' alt='social media icons' width={20} height={20} /></li>
                <li className='p-[14px] bg-[#EDEFF6] rounded-[1px] cursor-pointer'><Image src='/dripple.svg' alt='social media icons' width={20} height={20} /></li>
                <li className='p-[14px] bg-[#EDEFF6] rounded-[1px] cursor-pointer'><Image src='/instagram.svg' alt='social media icons' width={20} height={20} /></li>
                <li className='p-[14px] bg-[#EDEFF6] rounded-[1px] cursor-pointer'><Image src='/behance.svg' alt='social media icons' width={20} height={20} /></li>
              </ul>
            </div>
            <div className='flex flex-col max-w-[300px] mt-[50px] lg:mt-0'>
              <h3 className='text-[#1B1D1F] mb-[32px] font-semibold text-[24px] leading-[32px]'>{col1.title}</h3>
              {
                col1.links.map((link) => (
                  <p className='text-[#6D737A] mb-[16px] text-[16px] leading-[24px] cursor-pointer hover:underline' key={link.index}>{link}</p>
                ))
              }
            </div>
            <div className='flex flex-col max-w-[300px] mt-[50px] lg:mt-0'>
              <h3 className='text-[#1B1D1F] mb-[32px] font-semibold text-[24px] leading-[32px]'>{col2.title}</h3>
              {
                col2.links.map((link) => (
                  <p className='text-[#6D737A] mb-[16px] text-[16px] leading-[24px] cursor-pointer hover:underline' key={link.index}>{link}</p>
                ))
              }
            </div>
            <div className='flex flex-col max-w-[300px] mt-[50px] lg:mt-0'>
              <h3 className='text-[#1B1D1F] mb-[32px] font-semibold text-[24px] leading-[32px]'>{col3.title}</h3>
              {
                col3.links.map((link) => (
                  <p className='text-[#6D737A] mb-[16px] text-[16px] leading-[24px] cursor-pointer hover:underline' key={link.index}>{link}</p>
                ))
              }
            </div>
        </div>
    </footer>
  )
}

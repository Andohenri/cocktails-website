'use client'
import React from 'react'
import gsap from 'gsap'
import { navLinks } from '@/constants'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import Link from 'next/link'

import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Navbar = () => {
   useGSAP(() => {
      const navTween = gsap.timeline({
         scrollTrigger: {
            trigger: 'nav',
            start: 'bottom top',
            scrub: true,
         }
      });
      navTween.fromTo('nav', { backgroundColor: 'transparent', backdropFilter: 'none' }, {
         backgroundColor: '#00000050',
         backdropFilter: 'blur(10px)',
         duration: 1,
         ease: 'power1.inOut'
      })
   }, [])

   return (
      <nav>
         <div>
            <Link className='flex items-center justify-center gap-2' href={'#home'}>
               <Image src={"/images/logo.png"} alt='logo' width={30} height={30} />
               <p>Velvet Pour</p>
            </Link>
            <ul>
               {navLinks.map(link => (
                  <li key={link.id}>
                     <Link href={`#${link.id}`}>{link.title}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </nav>
   )
}

export default Navbar
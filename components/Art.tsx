"use client"
import React from 'react'
import gsap from 'gsap'
import { featureLists, goodLists } from '@/constants'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

const Art = () => {
   const isMobile = useMediaQuery({ maxWidth: 767 });
   useGSAP(() => {
      const start = isMobile ? 'top 20%' : 'top top';
      const maskedTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: '#art',
            start,
            end: 'bottom center',
            scrub: 1.5,
            pin: true
         }
      });
      maskedTimeline
         .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut' })
         .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut' })
         .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' })
   })
   return (
      <section id='art'>
         <div className="container mx-auto h-full">
            <h2 className='will-fade'>The ART</h2>
            <div className="content">
               <ul className='space-y-4 will-fade'>
                  {goodLists.map((feature, idx) => (
                     <li className='flex items-center gap-2' key={idx}>
                        <Image src={"/images/check.png"} alt='check' width={20} height={20} />
                        <p>{feature}</p>
                     </li>
                  ))}
               </ul>
               <div className="cocktail-img">
                  <Image src={"/images/under-img.jpg"} alt='check' className='abs-center masked-img size-full object-contain w-auto h-auto' width={2000} height={2000} />
               </div>
               <ul className='space-y-4 will-fade'>
                  {featureLists.map((feature, idx) => (
                     <li className='flex items-center gap-2' key={idx}>
                        <Image src={"/images/check.png"} alt='check' width={20} height={20} />
                        <p>{feature}</p>
                     </li>
                  ))}
               </ul>
            </div>
            <div className='masked-container'>
               <h2 className="will-fade">Sip-Worthy Perfection</h2>
               <div id="masked-content">
                  <h3>Made with craft, Poured with passion</h3>
                  <p>This isn't just a drink. It's a carefully crfated moment made just for you.</p>
                  <Image src={"/images/cup-1.png"} className='absolute -left-64 -top-[30rem] h-auto w-auto' alt='cup-1' width={100} height={100} />
                  <Image src={"/images/cup-2.png"} className='absolute -right-64 -top-52 h-auto w-auto' alt='cup-2' width={100} height={100} />
               </div>
            </div>
         </div>
      </section>
   )
}

export default Art
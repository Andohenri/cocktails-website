"use client"
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import Image from 'next/image'
import Link from 'next/link'
import { openingHours, socials, storeInfo } from '@/constants'

const Contact = () => {
   useGSAP(() => {
      const titleSplit = SplitText.create('#contact h2', { type: 'words' })
      gsap.timeline({
         scrollTrigger: {
            trigger: '#contact',
            start: 'top center',
         },
      })
         .from(titleSplit.words, { opacity: 0, yPercent: 100, stagger: 0.02, ease: 'power1.inOut', duration: 1 })
         .from('#contact h3, #contact p', { opacity: 0, yPercent: 100, stagger: 0.02, ease: 'power1.inOut', duration: 1 })
         .from('#f-left-leaf', { y: '50', ease: 'power1.inOut', duration: 1 })
         .from('#f-right-leaf', { y: '-50', ease: 'power1.inOut', duration: 1 })
         .from('.drink-img', { opacity: 0, xPercent: 100, ease: 'power1.inOut', duration: 1 })
   })
   return (
      <footer id='contact'>
         <Image src={'/images/footer-right-leaf.png'} alt='right-left' id='f-right-leaf' width={200} height={200} />
         <Image src={'/images/footer-left-leaf.png'} alt='left-left' id='f-left-leaf' width={200} height={200} />
         <Image src={'/images/footer-drinks.png'} alt='left-left' className='drink-img' width={200} height={200} />
         <div className='content'>
            <h2>{storeInfo.heading}</h2>
            <div>
               <h3>Visit Our Bar</h3>
               <p>{storeInfo.address}</p>
            </div>
            <div>
               <h3>Contact Us</h3>
               <p>{storeInfo.contact.phone}</p>
               <p>{storeInfo.contact.email}</p>
            </div>
            <div>
               <h3>Open Every Day</h3>
               {openingHours.map(({ day, time }) => (
                  <p key={day}>{day} : {time}</p>
               ))}
            </div>
            <div>
               <h3>Socials</h3>
               <div className="flex-center gap-5">
                  {socials.map(({ icon, name, url }) => (
                     <Link key={name} href={url} target='_blank' rel='noopener noreferrer' aria-label={name}>
                        <Image src={icon} alt={name} width={20} height={20} />
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Contact
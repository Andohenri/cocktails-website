'use client'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
   useGSAP(() => {
      const heroSplit = new SplitText('.title', { type: 'chars, words' })
      const paragraphSplit = new SplitText('.subtitle', { type: 'lines' })

      heroSplit.chars.forEach(char => char.classList.add('text-gradient'));

      gsap.from(heroSplit.chars, {
         yPercent: 100,
         duration: 1.8,
         ease: 'expo.out',
         stagger: 0.06
      });

      gsap.from(paragraphSplit.lines, {
         opacity: 0,
         yPercent: 100,
         duration: 1.8,
         ease: 'expo.out',
         stagger: 0.06,
         delay: 1
      });

      gsap.timeline({
         scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
         }
      })
         .to('.right-leaf', { y: 200 }, 0)
         .to('.left-leaf', { y: -200 }, 0)

   }, [])
   return (
      <>
         <section id="hero" className='noisy'>
            <h1 className='title'>MOJITO</h1>

            <Image src={"/images/hero-left-leaf.png"} alt='left-leaf' className='left-leaf' width={120} height={120} />
            <Image src={"/images/hero-right-leaf.png"} alt='right-leaf' className='right-leaf' width={120} height={120} />
            <Image src={"/images/arrow.png"} alt='arrow' className='absolute md:right-20 md:top-1/3 bottom-12 right-1/2' width={20} height={80} />

            <div className="body">
               <div className="content">
                  <div className='space-y-5 hidden md:block'>
                     <p>Cool. Crisp. Classic.</p>
                     <p className="subtitle">
                        Sip the spirit <br /> of summer
                     </p>
                  </div>
                  <div className="view-cocktails">
                     <p className="subtitle">Every cocktails on our menu is a blend of premium ingredients, creative flair, and timeless recipes <br />-- designed to delight your senses.</p>
                     <Link href={"#cocktails"}>View Cocktails</Link>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Hero
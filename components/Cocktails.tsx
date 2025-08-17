'use client'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cocktailLists, mockTailLists } from '@/constants'
import Image from 'next/image'

const Cocktails = () => {

   useGSAP(() => {
      const parallaxTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: '#cocktails',
            start: 'top 30%',
            end: 'bottom 90%',
            scrub: true
         }
      });
      parallaxTimeline
      .from('#c-left-leaf', {x: -100, y: 100})
      .from('#c-right-leaf', {x: 100, y:  100})
   })

   return (
      <section id='cocktails' className='noisy'>
         <Image src={'/images/cocktail-left-leaf.png'} alt='l-left' id='c-left-leaf' width={130} height={130} />
         <Image src={'/images/cocktail-right-leaf.png'} alt='r-right' id='c-right-leaf' width={130} height={130} />

         <div className='list'>
            <div className="popular">
               <h2>Most popular drinks:</h2>
               <ul>
                  {cocktailLists.map(({ name, country, detail, price }) => (
                     <li key={name}>
                        <div className='me-28'>
                           <h3>{name}</h3>
                           <p>{country} | {detail}</p>
                        </div>
                        <span>- {price}</span>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="loved">
               <h2>Most loved mocktails:</h2>
               <ul>
                  {mockTailLists.map(({ name, country, detail, price }) => (
                     <li key={name}>
                        <div className='me-28'>
                           <h3>{name}</h3>
                           <p>{country} | {detail}</p>
                        </div>
                        <span>- {price}</span>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   )
}

export default Cocktails
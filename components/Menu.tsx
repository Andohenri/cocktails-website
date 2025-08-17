"use client"
import { sliderLists } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Menu = () => {
   const isMobile = useMediaQuery({ maxWidth: 767 });
   const contentRef = useRef<HTMLDivElement | null>(null);
   const [currentIndex, setCurrentIndex] = useState(0);
   const totalCocktails = sliderLists.length;

   const goToSlide = (index: number) => {
      const newIndex = (index + totalCocktails) % totalCocktails;
      setCurrentIndex(newIndex);
   }

   const getCocktailAt = (indexOffset: number) => {
      return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
   }

   const currentCocktail = getCocktailAt(0)
   const prevCocktail = getCocktailAt(-1)
   const nextCocktail = getCocktailAt(1)

   useGSAP(() => {
      gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 })
      gsap.fromTo(".cocktail img", { opacity: 0, xPercent: -100 }, { xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' })
      gsap.fromTo(".details h2", { opacity: 0, yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' })
      gsap.fromTo(".details p", { opacity: 0, yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut' })
      gsap.timeline({
         scrollTrigger: {
            trigger: '#menu',
            start: 'top top',
            end: 'bottom top',
            scrub: true
         }
      })
         .to('#m-right-leaf', { y: -200 }, 0)
         .to('#m-left-leaf', { y: 200 }, 0)
   }, [currentIndex])

   return (
      <section id='menu' aria-labelledby='menu-heading'>
         <Image src={'/images/slider-left-leaf.png'} alt='left-left' id='m-left-leaf' className='h-auto w-auto' width={100} height={100} />
         <Image src={'/images/slider-right-leaf.png'} alt='right-left' id='m-right-leaf' className='h-auto w-auto' width={100} height={100} />

         <h2 className='sr-only' id='menu-heading'>Cocktail Menu</h2>

         <nav className='cocktail-tabs'>
            {sliderLists.map((cocktail, idx) => {
               const isActive = idx === currentIndex;

               return <button key={cocktail.id} className={`${!isActive ? '!text-white !border-white' : '!text-yellow !border-yellow'}`} onClick={() => goToSlide(idx)}>
                  {cocktail.name}
               </button>
            })}
         </nav>

         <div className="content">
            <div className="arrows">
               <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                  <span>{prevCocktail.name}</span>
                  <Image src={'/images/right-arrow.png'} alt='right-arrow' aria-hidden='true' className='h-auto w-auto' width={100} height={100} />
               </button>
               <button className="text-right flex flex-col" onClick={() => goToSlide(currentIndex + 1)}>
                  <span>{nextCocktail.name}</span>
                  <Image src={'/images/left-arrow.png'} alt='left-arrow' aria-hidden='true' className='self-end h-auto w-auto' width={100} height={100} />
               </button>
            </div>
            <div className='cocktail'>
               <Image src={currentCocktail.image} alt={currentCocktail.name} width={isMobile ? 400 : 600} height={isMobile ? 400 : 600} />
            </div>
            <div className='recipe'>
               <div className='info' ref={contentRef}>
                  <p>Recipe for:</p>
                  <p id='title'>{currentCocktail.name}</p>
               </div>
               <div className='details' ref={contentRef}>
                  <h2>{currentCocktail.title}</h2>
                  <p>{currentCocktail.description}</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Menu
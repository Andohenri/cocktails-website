'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
   const videoRef = useRef<HTMLVideoElement | null>(null);
   const isMobile = useMediaQuery({ maxWidth: 767 });

   useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const handleLoadedMetadata = () => {
         const startValue = isMobile ? 'center 50%' : 'center 60%';
         const endValue = isMobile ? '120% top' : 'bottom top';

         const videoTimeline = gsap.timeline({
            scrollTrigger: {
               trigger: video,
               start: startValue,
               end: endValue,
               pin: true,
               scrub: true,
            }
         });

         videoTimeline.to(video, {
            currentTime: video.duration
         });
      };

      if (video.readyState >= 1) {
         handleLoadedMetadata();
      } else {
         video.addEventListener('loadedmetadata', handleLoadedMetadata);
      }

      return () => {
         video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
   }, [isMobile]);

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

            <Image src={"/images/hero-left-leaf.png"} alt='left-leaf' className='left-leaf' width={130} height={130} />
            <Image src={"/images/hero-right-leaf.png"} alt='right-leaf' className='right-leaf' width={130} height={130} />
            <Image src={"/images/arrow.png"} alt='arrow' className='absolute md:right-[15%] md:top-1/3 lg:top-1/2 bottom-12 right-1/2 h-auto w-auto' width={80} height={80} />

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
         <div className='video absolute inset-0'>
            <video
               src="/videos/output.mp4"
               muted
               playsInline
               preload='metadata'
               ref={videoRef}
            />
         </div>
      </>
   )
}

export default Hero
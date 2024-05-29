import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'

const Hero = () => {

    const [videoSrc, setVideoScrc] = useState(window.innerWidth < 760 ? smallHeroVideo: heroVideo)

    const handleVideoScrSet = () => {
        if(window.innerWidth < 760) {
            setVideoScrc(smallHeroVideo)
        }
        else{
            setVideoScrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleVideoScrSet);

        return () => {
            window.removeEventListener('resize',
                handleVideoScrSet
            )
        }
        //In react it is very important to clean up event listener and
        //that can be done by simply returning the same event listener
    },[])

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            duration: 2
        })
        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            duration: 2
        })
    }, [])
  return (
    <section className='w-full nav-height bg-black relative'>
        <div className="h-5/6 w-full flex-center flex-col">
            <p id='hero' className="hero-title">iPhone 15 pro</p>
            <div className="md:w-10/12 w-9/12">
                <video autoPlay muted playsInline = {true} src={videoSrc} type = 'video/mp4' key={videoSrc}
                className='pointer-events-none' />
            </div>
            <div id='cta' 
            className="flex flex-col items-center opacity-1 translate-y-20">
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>
        </div>
    </section>
  )
}

export default Hero

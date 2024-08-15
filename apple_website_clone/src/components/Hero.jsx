import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useState } from 'react';
import hero from '/assets/videos/hero.mp4';
import smallHeroVideo from '/assets/videos/smallHero.mp4';

const Hero = () => {

    const [playvideo, setVideo] = useState((window.innerWidth > 768) ? hero : smallHeroVideo);

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setVideo(hero);
        } else {
            setVideo(smallHeroVideo);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2,
            ease: 'slow(0.7, 0.7, false)',

        });

        gsap.to('#cta', {
            opacity: 1,
            translateY: -50,
            delay: 2.5,
            ease: 'slow(0.7, 0.7, false)',
        });

    }, []);

    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id='hero' className='hero-title'>iPhone 15 Pro</p>
                <div className='md:w-10/12 w-9/12'>
                    <video className='pointer-events-none' autoPlay muted playsInline={true} key={playvideo}>
                        <source src={playvideo} type='video/mp4' />
                    </video>
                </div>
            </div>
            <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href='#highlights' className='btn'>Buy</a>
                <p className='font-normal text-xl'>Form $199.month or $999</p>
            </div>
        </section>
    );
};

export default Hero;
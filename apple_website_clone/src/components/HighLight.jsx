import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const HighLight = () => {

    useGSAP(() => {
        gsap.to('#title', {
            opacity: 1,
            y: 0
        });
        gsap.to('.link', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.5
        });

    }, []);

    return (
        <section id='highlights' className='w-screen bg-zinc h-full overflow-hidden common-padding'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full md:flex items-end justify-between' >
                    <h1 id='title' className='section-heading'>Get the HighLights</h1>
                    <div className='flex flex-wrap items-end gap-5'>
                        <p className='link'>
                            Watch the film
                            <img src={watchImg} alt='watch' className='ml-2' />
                        </p>
                        <p className='link'>
                            Watch the film
                            <img src={rightImg} alt='right' className='ml-2' />
                        </p>
                    </div>
                </div>

                <VideoCarousel />
            </div>
        </section>
    );
};

export default HighLight;
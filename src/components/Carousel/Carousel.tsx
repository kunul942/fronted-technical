import { useState, useEffect, useLayoutEffect } from 'react';
import { Images as CarouselImages } from './';

import { images } from '@/constant';
import { NextPrevSlide } from './NextPrevSlide';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transition, setTransition] = useState(false);
    const [windowWidth, setWindowWidth] = useState<null | number>(null);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 2
        );
        setTransition(true);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 2
        );
        setTransition(true);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, transition]);

    useLayoutEffect(() => {
        const updateWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateWidth);
            updateWidth(); //set initial width

            return () => {
                window.removeEventListener('resize', updateWidth);
            };
        }
    }, [windowWidth]);

    return (
        <div className='relative w-full max-w-4xl mx-auto p-4'>
            <div className='overflow-hidden relative'>
                <div
                    className={`flex ${transition ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / (images.length / (windowWidth && windowWidth < 768 ? 4.5 : 2)))}%) `,
                    }}
                >
                    {images.map((image, index) => (
                        <CarouselImages
                            key={index}
                            image={image}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <div className='flex justify-center mt-4'>
                {[0, 1, 2, 3, 4].map((index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index * 2)}
                        className={`w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-700 focus:outline-none transition-colors duration-300 ${
                            currentIndex === index * 2 ? 'bg-gray-700' : ''
                        }`}
                        style={{ margin: '0.25rem' }}
                    ></button>
                ))}
            </div>

            {/* Next button and prev button */}
            <NextPrevSlide prevSlide={prevSlide} nextSlide={nextSlide} />
        </div>
    );
};

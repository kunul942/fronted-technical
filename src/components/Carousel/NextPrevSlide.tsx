import { arrowNext, arrowPrev } from '@/assets';

interface Props {
    prevSlide: () => void;
    nextSlide: () => void;
}

export const NextPrevSlide = ({ prevSlide, nextSlide }: Props) => {
    return (
        <>
            <button className='absolute top-1/2 left-4 transform -translate-y-1/2 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none'>
                <img src={arrowPrev.src} onClick={prevSlide} className='h-8' />
            </button>
            <button className='absolute top-1/2 right-4 transform -translate-y-1/2 px-4 py-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none'>
                <img src={arrowNext.src} onClick={nextSlide} className='h-8' />
            </button>
        </>
    );
};

import Image, { StaticImageData } from 'next/image';

interface Props {
    image: {
        src: StaticImageData;
        title: string;
        description: string;
    };
    index: number;
}

export const Images = ({ image, index }: Props) => {
    return (
        <div key={index} className='w-full md:w-1/3 flex-shrink-0 p-2 relative'>
            <div className='relative w-full h-80 lg:h-96'>
                <Image
                    src={image.src}
                    alt={`Slide ${index}`}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-lg shadow-lg'
                />
                <div className='absolute bottom-4 left-[50%] w-[80%] translate-x-[-50%] bg-black bg-opacity-50 text-white p-2 rounded text-center'>
                    <h2 className='text-sm font-bold'>{image.title}</h2>
                    <p className='text-xs'>{image.description}</p>
                </div>
            </div>
        </div>
    );
};

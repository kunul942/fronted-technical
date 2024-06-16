import {
    carouselImage1,
    carouselImage2,
    carouselImage3,
    carouselImage4,
    carouselImage5,
    carouselImage6,
    carouselImage7,
    carouselImage8,
    carouselImage9,
} from '@/assets';

// Constant with information of newsletter component
import { Newsletter } from '@/interface/';
export const newsletterData: Newsletter = {
    title: 'Stay in touch',
    desc: 'Subscribe to our newsletter so we can spam you with offers and discounts.',
    buttons: [
        {
            type: 'submit',
            value: 'Yes! I love a good deal',
            isSuccess: true,
        },
        {
            type: 'button',
            value: 'No. I would prefer to waste money',
            isSuccess: false,
        },
    ],
};

//constant with carousel images, title and description. images is used in Carousel component
export const images = [
    {
        src: carouselImage1,
        title: 'Winter Wonderland',
        description: 'Blanketed in a world of white',
    },
    {
        src: carouselImage2,
        title: 'Starry Landscape',
        description: 'Colorful stars illuminate the night.',
    },
    {
        src: carouselImage3,
        title: 'Forest Monolith',
        description: 'Majestic rock amidst trees',
    },
    {
        src: carouselImage4,
        title: 'Enchanted Forest',
        description: 'A dense and mystical woodland',
    },
    {
        src: carouselImage5,
        title: 'Snowy Retreat',
        description: ' Cozy house by the sea',
    },
    {
        src: carouselImage6,
        title: 'Northern Lights',
        description: 'Dancing lights in the Arctic sky',
    },
    {
        src: carouselImage7,
        title: 'Tranquil Waters',
        description: 'Reflecting the beauty of nature.',
    },
    {
        src: carouselImage8,
        title: 'Scarlet Feathered Beauty',
        description: 'A vivid red bird perched gracefully',
    },
    {
        src: carouselImage9,
        title: 'Desert Dunes',
        description: 'An ocean of sand',
    },
];

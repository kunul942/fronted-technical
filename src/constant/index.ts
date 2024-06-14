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

import { NewsletterButton } from '@/interface/';
import styles from './Newsletter.module.css';

export const Buttons: React.FC<NewsletterButton> = ({
    type,
    value,
    isSuccess,
}) => {
    return (
        <input
            className={`px-4 py-2 rounded-lg my-2 text-sm w-full lg:w-auto ${styles.newsletter__hover_effect}
            ${isSuccess && 'mr-2 bg-fuchsia-800 text-white'}`}
            type={type}
            value={value}
        />
    );
};

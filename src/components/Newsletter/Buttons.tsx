import { NewsletterButton } from '@/interface/';
import styles from './Newsletter.module.css';

export const Buttons: React.FC<NewsletterButton> = ({
    type,
    value,
    isSuccess,
}) => {
    return (
        <input
            className={`${
                isSuccess
                    ? `px-4 py-2 rounded-lg my-2 mr-2 text-sm bg-fuchsia-800 text-white w-full lg:w-auto ${styles.newsletter__hover_effect}`
                    : `px-4 py-2 rounded-lg my-2 text-sm w-full lg:w-auto ${styles.newsletter__hover_effect}`
            }`}
            type={type}
            value={value}
        />
    );
};

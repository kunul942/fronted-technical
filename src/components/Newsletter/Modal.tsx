interface Props {
    isSuccess: boolean;
    email: string;
}

import styles from './Newsletter.module.css';

export const Modal: React.FC<Props> = ({ isSuccess, email }) => {
    return (
        <div className={`${isSuccess && styles.newsletter__modal_container}`}>
            <div
                className={`text-4xl ${styles.newsletter__modal} ${isSuccess && styles['newsletter__modal--active']} bg-white rounded-xl border-l-4 border-l-fuchsia-800 p-2 w-[70%] md:w-[40%] xl:w-[30%] md:p-6`}
            >
                <div className='p-2 text-sm lg:text-base text-center'>
                    <span className='text-fuchsia-800 mr-2 font-bold'>
                        Thank you
                    </span>
                    <span className='text-gray-500'>
                        for subscribing to our newsletter!
                    </span>
                    <p className='text-fuchsia-800 my-2 font-bold'>{email}</p>
                </div>
            </div>
        </div>
    );
};

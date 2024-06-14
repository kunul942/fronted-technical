import { Newsletter as Props } from '@/interface';
import { Buttons } from '@/components';
import styles from './Newsletter.module.css';

export const Newsletter: React.FC<Props> = ({ title, desc, buttons }) => {
    const onSubmit = (e: any) => {
        // e.preventDefault();
    };

    return (
        <div
            className='flex flex-col items-center shadow-xl p-8 rounded-xl my-10 fadeIn md:my-0 border-l-4 
            border-l-fuchsia-800 md:w-[80%] mx-auto lg:w-[70%] xl:w-[60%] 2xl:w-[50%]'
        >
            <div className='w-[80%] md:w-[70%] mx-auto'>
                <h1 className='text-slate-700 text-4xl mx-auto text-center'>
                    {title}
                </h1>
                <p className='text-gray-500 text-center mx-auto text-sm my-8'>
                    {desc}
                </p>

                <form className='w-full' onSubmit={onSubmit}>
                    <div className={`mb-6 ${styles.newsletter__email} mx-auto`}>
                        <input
                            className={`border-2 rounded-lg p-2 w-full border-none outline-none shadow-md`}
                            type='email'
                            placeholder='Enter your e-mail here'
                        />
                    </div>
                    <div className='flex justify-center flex-wrap lg:flex-nowrap w-full'>
                        {buttons.map((button, i) => (
                            <Buttons key={i} {...button} />
                        ))}
                    </div>
                </form>
            </div>
        </div>
    );
};

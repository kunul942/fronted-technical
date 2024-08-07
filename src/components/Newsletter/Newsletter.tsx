import { Buttons, Modal } from '@/components';
import { useForm } from '@/hooks';
import { FormData, Newsletter as Props } from '@/interface';

import styles from './Newsletter.module.css';

const initialState: FormData = {
    email: '',
};

export const Newsletter: React.FC<Props> = ({ title, desc, buttons }) => {
    const { form, onInputChange, onSubmit, errors, isSuccess, onBlur } =
        useForm(initialState);

    return (
        <>
            <div
                className='flex flex-col items-center shadow-xl p-8 rounded-xl my-10 fadeIn md:my-0 border-l-4 
                border-l-fuchsia-800 md:w-{80%] mx-auto lg:w-[70%] xl:w-[60%] 2xl:w-[50%]'
            >
                <div className='w-[80%] md:w-[70%] mx-auto'>
                    <h1
                        data-testid={'cypress-newsletter-title'}
                        className='text-slate-700 text-4xl mx-auto text-center'
                    >
                        {title}
                    </h1>
                    <p className='text-gray-500 text-center mx-auto text-sm my-8'>
                        {desc}
                    </p>

                    <form className='w-full' onSubmit={onSubmit}>
                        <div className={`${styles.newsletter__email} mx-auto`}>
                            <input
                                className={`border-2 rounded-lg py-2 pl-4 pr-10 lg:px-4 w-full border-none outline-none shadow-md text-xs md:text-sm`}
                                type='email'
                                placeholder='Enter your e-mail here'
                                name='email'
                                onBlur={onBlur}
                                value={form.email}
                                onChange={onInputChange}
                            />
                        </div>
                        {errors.email && (
                            <p className='mt-2 text-red-800 text-xs md:text-sm'>
                                {errors.email}
                            </p>
                        )}
                        <div className='flex justify-center flex-wrap lg:flex-nowrap w-full mt-6'>
                            {buttons.map((button, i) => (
                                <Buttons key={i} {...button} />
                            ))}
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <h1>Hello World</h1>
            </div>

            {/* Modal */}
            <Modal isSuccess={isSuccess} email={form.email} />
        </>
    );
};

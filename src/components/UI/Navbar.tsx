import Image from 'next/image';
import { NavbarLink } from './NavbarLink';
import { logo } from '@/assets';

export const Navbar = () => {
    return (
        <div className='py-4 md:py-6'>
            <div className='flex items-center'>
                <Image
                    className='h-[80px] w-[90px] md:h-[100px] md:w-[110px] 2xl:h-[130px] 2xl:w-[w-[140px]'
                    width={100}
                    height={100}
                    src={logo.src}
                    alt='logo'
                />

                <div className='ml-auto'>
                    <NavbarLink text={'Newsletter'} link={'/'} />
                    <NavbarLink text={'Carousel'} link={'/carousel'} />
                </div>
            </div>
        </div>
    );
};

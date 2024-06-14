import Head from 'next/head';
import { Navbar } from '../UI';

interface Props {
    title: string;
    children: JSX.Element | JSX.Element[];
}

export const Layout = ({ title, children }: Props) => {
    return (
        <div className='w-[90%] md:w-[70%] mx-auto'>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />

            <main>{children}</main>
        </div>
    );
};

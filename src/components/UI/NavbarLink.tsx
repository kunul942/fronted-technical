import Link from 'next/link';

interface Props {
    text: string;
    link: string;
}

export const NavbarLink = ({ text, link }: Props) => {
    return (
        <Link
            className='mr-4 xl:mr-6 text-gray-600 transition-all duration-50 ease-in tracking-wider hover:text-fuchsia-700 hover:border-b-2 hover:border-b-fuchsia-700 hover:pb-2 xl:text-xl'
            href={link}
        >
            {text}
        </Link>
    );
};

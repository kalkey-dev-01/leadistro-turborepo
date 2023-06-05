import { Comfortaa, Poppins } from 'next/font/google';
import { type ReactNode, type FC } from 'react';
import React from 'react'
import Footer from '~/components/Footer';
import Navbar from '~/components/Navbar';

type Props = {
    meta: ReactNode;
    children: ReactNode;
};

export const comfortaa = Comfortaa({
    subsets: ['latin'],
    variable: '--font-comfortaa',
});
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});


const Main: FC<Props> = ({ meta, children }) => {
    return (
        <div className={`bg-leadistroBlack w-full  ${poppins.variable} ${comfortaa.variable} `}>
            {meta}
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Main
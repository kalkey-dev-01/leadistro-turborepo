import React from 'react'
import { Heading4, Heading3 } from './typography/Typography';

const Navbar: React.FC = () => {
    return (
        <nav className='max-w-full text-white mx-auto p-4 border-b-2 border-b-leadistroRed'>
            <ul className="flex flex-row justify-center items-center gap-10">
                <li className='flex-1'>
                    <Heading3 textChildren='leadistro' className='font-comfortaa hover:cursor-pointer' />
                </li>
                <li>
                    <Heading4 textChildren='Features' className='font-poppins hover:text-leadistroRed hover:cursor-pointer' />
                </li>
                <li>
                    <Heading4 textChildren='Pricing' className='font-poppins hover:text-leadistroRed hover:cursor-pointer' />
                </li>
                <li>
                    <Heading4 textChildren='Download' className='font-poppins hover:text-leadistroRed hover:cursor-pointer' />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
import React from 'react'
import { Heading4, Heading3 } from './typography/Typography';

const Navbar: React.FC = () => {
    return (
        <nav className='max-w-full mx-auto p-4 border-2 border-leadistroRed'>
            <ul>
                <li>
                    <Heading3 textChildren='leadistro' />
                </li>
                <li>
                    <Heading4 textChildren='Icon' />
                </li>
                <li>
                    <Heading4 textChildren='Icon' />
                </li>
                <li>
                    <Heading4 textChildren='Icon' />
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
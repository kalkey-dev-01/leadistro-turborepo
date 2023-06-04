import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
// import { Button as ButtonComponent } from './button'
const Button = () => {
    return (
        <div className="relative group">
            <div className='animate-tilt opacity-75 group-hover:opacity-100 transition group-hover:duration-600 absolute -inset-0.5 bg-gradient-to-r from-leadistroRed to-leadistroWhite rounded-lg blur-sm group-hover:blur-[6px]'></div>
            <button className='relative px-7 py-4 font-comfortaa divide-x divide-leadistroWhite/70 bg-leadistroBlack  rounded-lg items-center leading-none flex'>
                <span className='flex items-center font-poppins font-medium space-x-5'>
                    <Image className='rounded-lg p-1' src={require('../../../public/favicon-32x32.png')} alt="logo" />
                    <span className='pr-6 text-leadistroWhite'>Leadistro Release 2023.06</span>
                </span>
                <span className="flex items-center justify-center space-x-3">
                    <span className=' pl-6 text-leadistroRed   group-hover:text-leadistroWhite font-bold'>See Whats New</span>
                    <ArrowRight className='text-leadistroRed group-hover:text-leadistroWhite h-6 w-6' />
                </span>
            </button>
        </div>
    )
}

export default Button

// const GradientButton: React.FC<{children: React.ReactNode}> = ({children}) => {
//     return (
//         <ButtonComponent {...ButtonProps} >
//         </ButtonComponent>
//     )
// }
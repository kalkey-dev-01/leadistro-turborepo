import React from 'react'
import { Heading1, Heading3 } from './typography/Typography'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button as Btn } from './ui/button'
import Image from 'next/image'
import Button from './ui/GradientBackgroundButton'
export default function HomeScreen() {
    return (
        <div className="relative min-h-screen min-w-full flex flex-col md:flex-row  items-center justify-between">
            <div className='absolute flex flex-row items-center justify-center left-0 top-8 right-0'><Button /></div>
            <div className="container">
                <Heading1 textChildren="Minimal Marketing App for Power Users" className="font-poppins text-leadistroWhite max-w-xl mb-12" />
                <Heading3 textChildren="Brand And Market Your Product To Your Customers With The Help Of Artificial Intelligence." className="font-poppins text-leadistroWhite max-w-2xl mb-12" />
                <Btn variant={'outline'} className="border-2 border-leadistroRed text-leadistroWhite hover:bg-leadistroBlack/75 hover:text-leadistroRed font-comfortaa">Download The Apk</Btn>
            </div>
            <div className="container max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg">
                <AspectRatio ratio={3 / 4} className="md:pl-20 md:pt-5 lg:pl-10">
                    <Image src={require('../../public/NewMockup.png')} className="mx-auto object-contain" alt="New Mockup" />
                </AspectRatio>
            </div>
        </div>
    )
}
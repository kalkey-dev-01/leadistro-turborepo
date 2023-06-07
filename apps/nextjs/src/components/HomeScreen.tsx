import React from 'react'
import { Heading1, Heading3 } from './typography/Typography'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button as Btn } from './ui/button'
import Image from 'next/image'
import Button from './ui/GradientBackgroundButton'
import IMG from '../../public/OutlineMockup.png';
import WebMockup from '../../public/DistroGPTWebMockup.png'
import BackgroundAnimation from './BackgroundAnimations'
export default function HomeScreen() {
    return (
        <>
            <div className="relative min-h-screen min-w-full flex flex-col bg-gradient-to-t md:bg-gradient-to-r from-leadistroBlack via-leadistroBlack to-leadistroRed  md:flex-row  items-center justify-center md:justify-between">
                <div className='hidden absolute md:flex flex-row items-center justify-center left-0 top-8 right-0 z-20'><Button /></div>
                <div className="container flex flex-col ">
                    <Heading1 textChildren="Minimal Marketing App for Power Users" className="text-center md:text-left font-poppins text-leadistroWhite max-w-xl mb-12" />
                    <Heading3 textChildren="Brand And Market Your Product To Your Customers With The Help Of Artificial Intelligence." className="font-poppins text-center md:text-left text-leadistroWhite max-w-2xl mb-12" />
                    <Btn variant={'outline'} className="border-2 border-leadistroRed text-leadistroWhite hover:bg-leadistroBlack/75 hover:text-leadistroRed font-comfortaa md:place-self-start place-self-center">Download The Apk</Btn>
                </div>
                <div className="container">
                    <AspectRatio ratio={1 / 1} className='md:pl-[280px] py-10 md:py-0 z-10'>
                        <Image src={IMG} alt="MobileMockup" width={360} height={480} className='' />
                    </AspectRatio>
                </div>
            </div>
            <div className="overflow-x-hidden overflow-y-hidden min-h-screen min-w-full flex flex-col items-center justify-center">
                <div className='relative max-w-screen-md'>
                    <BackgroundAnimation />
                </div>
                <Heading1 textChildren='The Only Generative AI for Marketing' className='font-poppins drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center md:text-left text-leadistroBlack z-20 mt-32 md:mt-20 mix-blend-color-burn' />
                <Heading3 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroWhite' />
                <AspectRatio ratio={16 / 9} className='p-5'>
                    <Image src={WebMockup} alt="WebMockup" />
                </AspectRatio>
            </div>
        </>
    )
}
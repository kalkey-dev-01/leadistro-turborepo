import React from 'react'
import { Heading1, Heading3, Heading4 } from './typography/Typography'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button as Btn } from './ui/button'
import Image from 'next/image'
import Button from './ui/GradientBackgroundButton'
import IMG from '../../public/OutlineMockup.png';
import WebMockup from '../../public/DistroGPTWebMockup.png'
import BackgroundAnimation from './BackgroundAnimations'


export default function HomeScreen() {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const handleImageLoaded = React.useCallback(() => {
        setImageLoaded(true);
    }, [])
    const ratio = innerWidth < 640 ? (2 / 4) : (3 / 4)
    return (
        <>
            <div
                className="min-h-screen  min-w-full flex flex-col bg-gradient-to-t md:bg-gradient-to-r from-leadistroBlack via-leadistroBlack to-leadistroRed  md:flex-row  items-center justify-center md:justify-between">
                <div className="container flex flex-col items-start justify-center max-w-2xl md:py-36">
                    <Heading1 textChildren="Minimal Marketing App for Power Users" className="text-center md:text-left font-poppins drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-leadistroWhite max-w-xl mb-12" />
                    <Heading3 textChildren="Brand And Market Your Product To Your Customers With The Help Of Artificial Intelligence." className="font-poppins drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center md:text-left text-leadistroWhite max-w-2xl mb-12" />
                    <Btn variant={'outline'} className="border-2 border-leadistroRed text-leadistroWhite hover:bg-leadistroBlack/75 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] hover:text-leadistroRed font-comfortaa md:place-self-start place-self-center">Download The Apk</Btn>
                </div>
                <div className='hidden absolute md:flex flex-row items-center justify-center top-24 left-0 right-0'><Button /></div>
                <div className="container flex flex-col items-center justify-center md:py-36">
                    <AspectRatio ratio={ratio} className={`p-5 md:p-0 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 '}`}>
                        <Image src={IMG} alt="MobileMockup" onLoad={handleImageLoaded} className='pointer-events-none object-center md:object-contain object-cover w-full h-full ' />
                    </AspectRatio>
                </div>
            </div>
            <div className=" bg-leadistroBlack overflow-y-hidden overflow-x-hidden min-h-screen min-w-full flex flex-col items-center justify-start">
                <div className='relative  max-w-screen-md'>
                    <BackgroundAnimation />
                </div>
                <div className='pt-20 flex flex-col items-center justify-start gap-8'>
                    <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed mix-blend-difference' />
                    <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroBlack text-center md:text-left mix-blend-color-burn' />
                </div>
                <AspectRatio ratio={4 / 3} className={`transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 '}`}>
                    <Image src={WebMockup} alt="WebMockup" className="pointer-events-none object-center md:object-contain object-cover w-full h-full" />
                </AspectRatio>
            </div>
        </>
    )
}



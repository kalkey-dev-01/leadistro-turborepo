import React from 'react'
import { Heading1, Heading2, Heading4, Paragraph } from './typography/Typography'
import { AspectRatio } from '@radix-ui/react-aspect-ratio'
import { Button as Btn } from './ui/button'
import Image from 'next/image'
import Button from './ui/GradientBackgroundButton'
import IMG from '../../public/OutlineMockup.png';
// import WebMockup from '../../public/DistroGPTWebMockup.png'
import BackgroundAnimation from './BackgroundAnimations'
import { SizeContext } from '~/utils/size-observer'
import { AnimatePresence, motion as m } from 'framer-motion'
import { Separator } from './ui/seperator'
import { ArrowRightCircleIcon } from 'lucide-react'
import { Input } from './ui/input'
// import { RGradientCard } from './RadialGradientCards'

export default function HomeScreen() {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const handleImageLoaded = React.useCallback(() => {
        setImageLoaded(true);
    }, [])
    const { innerWidth } = React.useContext(SizeContext);
    const ratio = innerWidth < 640 ? (1 / 2) : (1 / 1);
    return (
        <>
            <div
                className="min-h-screen min-w-full flex flex-col bg-gradient-to-b md:bg-gradient-to-r from-leadistroBlack via-leadistroBlack to-leadistroRed  md:flex-row  items-center justify-center md:justify-between">
                <div className="mt-20 container flex flex-col space-y-5 h-auto items-center justify-center max-w-2xl">
                    <AnimatePresence>
                        <m.div
                            transition={{ ease: "linear", duration: 0.75, x: { duration: 0.751 }, opacity: { duration: 0.751 }, staggerChildren: 0.5 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                        >
                            <Heading1 textChildren="Minimal Marketing App for Power Users" className="text-center md:text-left font-poppins drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-leadistroWhite max-w-xl mix-blend-difference" />
                            <Paragraph textChildren="Brand And Market Your Product To Your Customers With The Help Of Artificial Intelligence." className="font-poppins drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center md:text-left mix-blend-difference text-leadistroWhite max-w-2xl" />
                        </m.div>
                    </AnimatePresence>
                    <AnimatePresence>
                        <m.div
                            className='md:place-self-start place-self-center md:py-0 py-10'
                            whileHover={{ scale: 1.075 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Btn variant={'outline'} className="border-2 border-leadistroRed text-leadistroWhite hover:bg-leadistroBlack/75 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] hover:text-leadistroRed font-comfortaa ">
                                Download The Apk
                            </Btn>
                        </m.div>
                    </AnimatePresence>
                </div>
                <div
                    className='hidden absolute md:flex flex-row items-center justify-center z-40 top-[13.5%] right-0 left-0'
                >
                    <AnimatePresence>
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Button />
                        </m.div>
                    </AnimatePresence>
                </div>
                <div className="container flex h-auto flex-col items-center justify-center md:py-36">
                    <AspectRatio ratio={ratio} className={` transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-[0.96]' : 'opacity-0 '}`}>
                        <Image src={IMG} alt="MobileMockup" onLoad={handleImageLoaded} className='pointer-events-none object-center md:object-contain object-cover w-full h-full ' />
                    </AspectRatio>
                </div>
            </div>
            <div className=" bg-leadistroBlack overflow-y-hidden overflow-x-hidden min-h-screen min-w-full flex flex-col items-center justify-start">
                <div className='relative max-w-screen-md'>
                    <BackgroundAnimation />
                </div>
                <div className='pt-20 flex flex-col items-center justify-start gap-8'>
                    <Heading1 textChildren='Minimal Marketing Tool with Generative AI' className='font-poppins text-center md:text-left text-leadistroRed mix-blend-difference' />
                    <Heading4 textChildren='Sign In To Access All Beta Features' className='font-poppins text-leadistroBlack text-center md:text-left mix-blend-color-burn' />
                </div>
                {/* Initiate bento grids design here use tailwind css container queries  */}
                <div className="grid min-h-screen max-w-screen-lg md:max-w-screen-xl font-poppins w-full grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 py-5 px-4 md:py-10 md:px-16">
                    <div className="bg-leadistroBlack/80 border-2 border-leadistroWhite/70 flex flex-col items-start justify-center w-auto h-auto backdrop-blur-sm md:col-span-2 rounded-3xl @container ">
                        <h1 className='mx-5 font-poppins max-w-lg mb-4 text-leadistroWhite text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold md:font-extrabold text-center md:text-left'>
                            Create Your Own
                            Custom Campaign
                        </h1>
                        <Separator className='w-full bg-leadistroWhite' />
                        <div className='mx-5 mt-8 flex items-start justify-between w-full h-auto  font-poppins text-leadistroWhite text-center md:text-left text-xs md:text-sm lg:text-base xl:text-lg'>
                            <p>Integrate Generative Ai With The Help Of Artificial Intelligence.</p>
                            <ArrowRightCircleIcon className='text-leadistroRed md:w-7 md:h-7 w-5 h-5 mr-10 cursor-pointer' />
                        </div>
                    </div>
                    <div className="flex relative flex-col items-center justify-between h-full w-auto bg-gradient-to-b from-leadistroBlack/80 via-leadistroBrown/60 to-leadistroBlack/60 md:row-span-5 rounded-3xl @container">
                        <div className='w-full h-[25%] bg-leadistroBlack rounded-t-3xl'>
                            <h3 className='text-leadistroWhite p-6 text-center md:text-left text-xs md:text-sm lg:text-base xl:text-lg font-poppins font-bold'>How Does It Work You Wanna know?</h3>
                        </div>
                        <div className='w-[80%] absolute left-4 bottom-44 right-0 h-[40%] bg-leadistroBrown rounded-2xl'></div>
                        <Input placeholder='How do you work?' className='pointer-events-none w-full h-10 bg-leadistroBrown border-t-[1px] border-t-leadistroRed border-b-leadistroBlack border-x-leadistroBlack text-leadistroWhite rounded-3xl'></Input>
                    </div>
                    <div className="bg-leadistroBlack/80 border-2 row-span-4 flex flex-col items-center justify-center border-leadistroWhite/60 backdrop-blur-sm rounded-3xl @container ">

                    </div>
                    <div className="bg-gradient-to-b border-2 row-span-4  border-leadistroWhite/50 from-leadistroBlack/70 to-leadistroBrown/70 backdrop-blur-sm  rounded-3xl @container ">
                    </div>
                </div>
            </div >
        </>
    )
}

// <AspectRatio ratio={4 / 3} className={`transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 '}`}>
//                     <Image src={WebMockup} alt="WebMockup" className="pointer-events-none p-5 object-center md:object-contain object-cover w-full h-full" />
//                 </AspectRatio>


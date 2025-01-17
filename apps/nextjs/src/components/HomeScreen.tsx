import React from 'react'
import { Heading1, Paragraph } from './typography/Typography'
import { AspectRatio } from '~/components/ui/aspect-ratio'
import { Button as Btn } from './ui/button'
import Image from 'next/image'
import Button from './ui/GradientBackgroundButton'
import IMG from '../../public/OutlineMockup.png';
import { SizeContext } from '~/utils/size-observer'
import { AnimatePresence, motion as m } from 'framer-motion'

export default function HomeScreen() {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    const handleImageLoaded = React.useCallback(() => {
        setImageLoaded(true);
    }, [])
    const { innerWidth } = React.useContext(SizeContext);
    const ratio = innerWidth < 640 ? (1 / 2) : (1 / 1);
    return (
        <>
            {/* HomeScreen */}
            <div className="min-h-screen px-6 py-10 w-full min-w-full flex flex-col bg-gradient-to-b md:bg-gradient-to-r from-leadistroBlack via-leadistroBlack to-leadistroBrown  md:flex-row  items-center justify-center md:justify-between">
                {/* Typography */}
                <div className="mt-20 container flex flex-col space-y-5 h-auto items-center justify-center max-w-2xl">
                    <AnimatePresence>
                        <m.div
                            transition={{ ease: "linear", duration: 0.75, x: { duration: 0.751 }, opacity: { duration: 0.751 }, staggerChildren: 0.5 }}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -100, opacity: 0 }}
                        >
                            <Heading1
                                textChildren="Minimal Marketing App for Power Users"
                                className="text-center md:text-left font-poppins drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-leadistroWhite max-w-xl mix-blend-difference"
                            />
                            <Paragraph
                                textChildren="Brand And Market Your Product To Your Customers With The Help Of Artificial Intelligence."
                                className="font-poppins drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center md:text-left mix-blend-difference text-leadistroWhite max-w-2xl"
                            />
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
                {/* Tilting card animation */}
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
                {/* Mobile mockup */}
                <div className="container flex h-auto flex-col items-center justify-center md:py-36">
                    <AspectRatio ratio={ratio} className={`transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-[0.96]' : 'opacity-0 '}`}>
                        <Image src={IMG} alt="MobileMockup" onLoad={handleImageLoaded} className='pointer-events-none object-center md:object-contain object-cover w-full h-full ' />
                    </AspectRatio>
                </div>
            </div>
        </>
    )
}

// <AspectRatio ratio={4 / 3} className={`transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 '}`}>
//                     <Image src={WebMockup} alt="WebMockup" className="pointer-events-none p-5 object-center md:object-contain object-cover w-full h-full" />
//                 </AspectRatio>


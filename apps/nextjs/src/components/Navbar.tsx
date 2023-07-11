import React from 'react'
import { Heading4, Heading3 } from './typography/Typography';
import { MenuSquareIcon } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import Image from 'next/image';
import img from '../../public/logoBlack.png'
import { comfortaa, poppins } from '~/templates/Main';
import { Separator } from './ui/seperator';
import { ScrollContext } from '~/utils/scroll-observer';
import { useRouter, usePathname } from 'next/navigation';
import { signIn, signOut } from 'next-auth/react';
import { api } from '~/utils/api';
import { LayoutGroup, motion } from 'framer-motion';
import clsx from 'clsx';
import Link from 'next/link';
// import { Comfortaa, Poppins } from 'next/font/google';
export const Navbar: React.FC = () => {
    const pathname = usePathname() || '/';
    const { data: session } = api.auth.getSession.useQuery()
    const navigation = useRouter()
    const [showNav, setShowNav] = React.useState(false)
    const { scrollY } = React.useContext(ScrollContext)
    const handleScroll = () => {
        setShowNav(window.scrollY < scrollY);
    };
    console.log(pathname)
    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => document.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY]);
    // {`fixed z-50  w-full border-b-[0.75px] border-b-leadistroWhite/25 px-8 backdrop-blur-[6px]  transition-all duration-300 ${
    //     showNav ? 'top-0' : '-top-16'
    //   }`}
    return (
        <nav className={`fixed z-50 transition-all duration-700 ${showNav ? 'top-2' : '-top-20'
            } max-w-screen-lg rounded-full w-full bg-leadistroBlack/80 backdrop-blur-[6px] text-leadistroWhite mx-auto p-4 border-b-2 border-b-leadistroRed`}>
            <ul className="flex flex-row justify-center items-center space-x-3">
                <li className='flex-1'>
                    <Button className='rounded-full' onClick={() => void navigation.push('/')} variant={'ghost'}>
                        <Heading3 textChildren='leadistro' className='font-comfortaa hover:cursor-pointer' />
                    </Button>
                </li>
                <Button variant={'ghost'} onClick={() => { }} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/20'>
                    <Heading4 textChildren='Features' className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button variant={'ghost'} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/20'>
                    <Heading4 textChildren='Features' className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button variant={'ghost'} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/20'>
                    <Heading4 textChildren='Pricing' className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button
                    onClick={session ? () => void signOut() : () => void signIn()}
                    variant={'ghost'}
                    className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/60'>
                    <Heading4 textChildren={session ? "Sign out" : "Sign in"} className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button variant={'ghost'} onClick={() => void navigation.push('/download')} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/60'>
                    <Heading4 textChildren='Download' className='hidden md:inline-flex font-poppins' />
                </Button>
                <li>
                    <Sheet>
                        <SheetTrigger asChild>
                            <MenuSquareIcon className='md:hidden inline-flex text-leadistroWhite h-8 w-8 hover:text-leadistroRed' />
                        </SheetTrigger>
                        <SheetContent className='flex flex-col font-poppins items-center justify-start bg-gradient-to-b bg-leadistroBlack' side={'right'}>
                            <SheetHeader>
                                <SheetTitle className='w-fit h-fit rounded-[23px] from-border border-4 border-leadistroRed/75 bg-leadistroBlack'>
                                    {/* <AspectRatio ratio={1 / 1}>
                                        </AspectRatio> */}
                                    <Image src={img} width={100} height={100} className='rounded-[20px] bg-leadistroRed' alt="logo" />
                                </SheetTitle>
                            </SheetHeader>
                            <Separator className='bg-white my-8' />
                            <div className='flex flex-col items-center justify-between flex-1'>
                                <Button variant={'outline'} className={`text-leadistroWhite border-2 rounded-2xl border-leadistroRed font-medium text-lg px-8 py-6 ${poppins.className}`}>Blog</Button>
                                <Button variant={'outline'} className={`text-leadistroWhite border-2 rounded-2xl border-leadistroRed font-medium text-lg px-8 py-6 ${poppins.className}`}>Features</Button>
                                <Button variant={'outline'} className={`text-leadistroWhite border-2 rounded-2xl border-leadistroRed font-medium text-lg px-8 py-6 ${poppins.className}`}>Pricing</Button>
                                <Button variant={'outline'} className={`text-leadistroWhite border-2 rounded-2xl border-leadistroRed font-bold text-lg px-8 py-6 ${poppins.className}`}>Download Apk</Button>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button variant={'outline'} className={`text-leadistroBlack border-2 rounded-2xl border-leadistroWhite/70 bg-leadistroRed font-black text-xl px-8 py-6 mt-8 ${comfortaa.className}`}>Register</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </li>
            </ul>
        </nav>
    );
}

const NavigationBarItems = {
    '/features': {
        name: 'Features'
    },
    '/pricing': {
        name: 'Pricing'
    },
    '/download': {
        name: 'Download'
    }
}

const NavigationBar: React.FC = () => {
    const pathname = usePathname()
    const ref = React.useRef<HTMLElement>(null);
    const [isIntersecting, setIsIntersecting] = React.useState<boolean | undefined>(false);
    React.useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry?.isIntersecting)
        });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [])
    return (
        <header className='font-poppins' ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${isIntersecting
                    ? "bg-leadistroBlack/60 border-transparent"
                    : "bg-leadistroBlack/30 border-leadistroRed/80"
                    }`}
            >
                <nav className='container relative flex flex-row items-center justify-between md:py-4 md:px-16 mx-auto'>
                    <Link className='flex-1' href={'/'}>
                        <Button className='hover:text-leadistroRed text-leadistroWhite bg-leadistroBrown/20 font-comfortaa hover:bg-leadistroBlack font-bold text-2xl'>
                            leadistro
                        </Button>
                    </Link>
                    <div id='nav' className='flex items-center justify-center space-x-3'>
                        {Object.entries(NavigationBarItems).map(([path, { name }]) => {
                            const isActive = path === pathname;
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className={clsx(
                                        "transition-all text-leadistroWhite hover:text-leadistroRed",
                                        {
                                            'text-leadistroRed': !isActive
                                        }
                                    )}
                                >
                                    <span className='relative py-1 px-2'>
                                        {name}
                                        {path === pathname ? (
                                            <motion.div
                                                className='absolute h-[2px] w-[90%] top-7 mx-2 bg-white'
                                                layoutId='bar'
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 30,
                                                }}
                                            />
                                        ) : null}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavigationBar


//                            <Link href={'/features'}>
//                                <Button variant="ghost" className='text-leadistroWhite text-2xl'>
//                                    Features
//                                </Button>
//                            </Link>
//                            <Link href={'/pricing'}>
//                                <Button variant="ghost" className='text-leadistroWhite text-2xl'>
//                                    Pricing
//                                </Button>
//                            </Link>
//                            <Link href={'/download'}>
//                                <Button variant="ghost" className='text-leadistroWhite text-2xl'>
//                                    Download
//                                </Button>
//                            </Link>



// export const NavigationBar: React.FC = () => {
//     const { data: session } = api.auth.getSession.useQuery()
//     // const navigation = useRouter()
//     const [showNav, setShowNav] = React.useState(false)
//     const { scrollY } = React.useContext(ScrollContext)
//     const handleScroll = () => {
//         setShowNav(window.scrollY < scrollY);
//     };
//     React.useEffect(() => {
//         document.addEventListener('scroll', handleScroll, { passive: true });
//         return () => document.removeEventListener('scroll', handleScroll);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [scrollY]);
//     // {`fixed z-50  w-full border-b-[0.75px] border-b-leadistroWhite/25 px-8 backdrop-blur-[6px]  transition-all duration-300 ${
//     //     showNav ? 'top-0' : '-top-16'
//     //   }`}
//     return (
//         <nav className={`fixed z-50 transition-all duration-100 ${showNav ? 'top-0' : '-top-16'
//             } w-full font-poppins mx-auto p-4 max-w-screen-md`}>
//             <div className="w-[173px] h-[53px] px-[35px] py-[13px] left-[0px] top-[0px] absolute bg-stone-800 rounded-[999px] justify-center items-center gap-[10px] inline-flex">
//                 <div className="text-white text-[18px] font-semibold"></div>
//             </div>
//             <div className="w-[157px] h-[53px] px-[35px] py-[13px] left-[184px] top-[0px] absolute bg-stone-800 rounded-[999px] justify-center items-center gap-[10px] inline-flex">
//                 <div className="text-white text-[18px] font-semibold"></div>
//             </div>
//             <div className="w-[168px] h-[53px] px-[35px] py-[13px] left-[353px] top-[0px] absolute bg-stone-800 rounded-[999px] justify-center items-center gap-[10px] inline-flex">
//                 <div className="text-white text-[18px] font-semibold"></div>
//             </div>
//             <div className="w-[187px] h-[53px] px-[35px] py-[13px] left-[532px] top-[0px] absolute bg-stone-800 rounded-[999px] justify-center items-center gap-[10px] inline-flex">
//                 <div className="text-white text-[18px] font-semibold"></div>
//             </div>
//             <div className="w-32 h-[53px] px-[35px] py-[13px] left-[728px] top-[0px] absolute bg-stone-800 rounded-[999px] justify-center items-center gap-[10px] inline-flex">
//                 <div className="text-white text-[18px] font-semibold"></div>
//             </div>
//         </nav>
//     )
// }



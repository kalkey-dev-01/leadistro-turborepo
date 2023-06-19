import React from 'react'
import { Heading4, Heading3 } from './typography/Typography';
import { MenuSquareIcon } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';
import img from '../../public/logoBlack.png'
import { comfortaa, poppins } from '~/templates/Main';
import { Separator } from './ui/seperator';
import { ScrollContext } from '~/utils/scroll-observer';
import { useRouter } from 'next/router';
// import { Comfortaa, Poppins } from 'next/font/google';
const Navbar: React.FC = () => {
    const navigation = useRouter()
    const [showNav, setShowNav] = React.useState(false)
    const { scrollY } = React.useContext(ScrollContext)
    const handleScroll = () => {
        setShowNav(window.scrollY < scrollY);
    };
    React.useEffect(() => {
        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => document.removeEventListener('scroll', handleScroll);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollY]);
    // {`fixed z-50  w-full border-b-[0.75px] border-b-leadistroWhite/25 px-8 backdrop-blur-[6px]  transition-all duration-300 ${
    //     showNav ? 'top-0' : '-top-16'
    //   }`}
    return (
        <nav className={`fixed z-50 transition-all duration-100 ${showNav ? 'top-0' : '-top-16'
            } w-full bg-leadistroBlack text-leadistroWhite mx-auto p-4 border-b-2 border-b-leadistroRed`}>
            <ul className="flex flex-row justify-center items-center space-x-3">
                <li className='flex-1'>
                    <Heading3 textChildren='leadistro' className='font-comfortaa hover:cursor-pointer' />
                </li>
                <Button variant={'ghost'} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/20'>
                    <Heading4 textChildren='Blog' className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button variant={'ghost'} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/20'>
                    <Heading4 textChildren='Features' className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button variant={'ghost'} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/20'>
                    <Heading4 textChildren='Pricing' className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button onClick={() => void navigation.push('/login')} variant={'ghost'} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/60'>
                    <Heading4 textChildren='Register' className='hidden md:inline-flex font-poppins' />
                </Button>
                <Button variant={'ghost'} className='text-leadistroWhite/95 hover:text-leadistroWhite hover:bg-leadistroBrown/60'>
                    <Heading4 textChildren='Download' className='hidden md:inline-flex font-poppins' />
                </Button>
                <li>
                    <Sheet>
                        <SheetTrigger asChild>
                            <MenuSquareIcon className='md:hidden inline-flex text-leadistroWhite h-8 w-8 hover:text-leadistroRed' />
                        </SheetTrigger>
                        <SheetContent className='flex flex-col font-poppins items-center justify-start bg-gradient-to-b bg-leadistroBlack' position={'right'} size={'xl'}>
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

export default Navbar;
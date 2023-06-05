import React from 'react'
import { Heading4, Heading3 } from './typography/Typography';
import { MenuSquareIcon } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Navbar: React.FC = () => {
    return (
        <nav className='max-w-full text-white mx-auto p-4 border-b-2 border-b-leadistroRed'>
            <ul className="flex flex-row justify-center items-center gap-10">
                <li className='flex-1'>
                    <Heading3 textChildren='leadistro' className='font-comfortaa hover:cursor-pointer' />
                </li>
                <li>
                    <Heading4 textChildren='Blog' className='hidden md:inline-flex font-poppins hover:text-leadistroRed hover:cursor-pointer' />
                </li>
                <li>
                    <Heading4 textChildren='Features' className='hidden md:inline-flex font-poppins hover:text-leadistroRed hover:cursor-pointer' />
                </li>
                <li>
                    <Heading4 textChildren='Pricing' className='hidden md:inline-flex font-poppins hover:text-leadistroRed hover:cursor-pointer' />
                </li>
                <li>
                    <Heading4 textChildren='Download' className='hidden md:inline-flex font-poppins hover:text-leadistroRed hover:cursor-pointer' />
                </li>
                <li>
                    <Sheet>
                        <SheetTrigger asChild>
                            <MenuSquareIcon className='md:hidden inline-flex text-leadistroWhite h-8 w-8 hover:text-leadistroRed' />
                        </SheetTrigger>
                        <SheetContent position={'right'} size={'xl'}>
                            <SheetHeader>
                                <SheetTitle>Welcome to Navbar</SheetTitle>
                                <SheetDescription>
                                    login Or Logout Well done
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input id="name" value="Pedro Duarte" className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="username" className="text-right">
                                        Username
                                    </Label>
                                    <Input id="username" value="@peduarte" className="col-span-3" />
                                </div>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
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
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cn } from '~/utils/utils'
import { buttonVariants } from "~/components/ui/button"
import { UserAuthForm } from '~/components/user-auth-screen.tsx';
import { Command } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { LoginMain } from '~/templates/Main';
import { Meta } from '~/meta/meta';
import img from '../../public/ChatUi.svg'


export default function LoginScreen() {
    return (
        <LoginMain meta={
            <Meta title="Sign Up" description="Register Your Account to use leadistro" />
        }>
            {/* <div className="md:hidden">
                <Image
                    src={img}
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="block"
                />
                <Image
                    src={img}
                    width={1280}
                    height={843}
                    alt="Authentication"
                    className="hidden"
                />
            </div> */}
            <div className="container font-poppins relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <Link
                    href={'#'}
                    className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "absolute right-4 top-4 md:right-8 md:top-8"
                    )}
                >
                    Register
                </Link>
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex">
                    <div
                        className="absolute flex flex-col items-center justify-center inset-0 bg-gradient-to-tl from-leadistroBlack via-leadistroBrown to-leadistroBlack bg-contain"
                    // style={{
                    //     backgroundImage:
                    //         "url(https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80)",
                    // }}
                    >
                        <div className="drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] bg-gradient-to-br bg-leadistroBlack via-leadistroBrown to-leadistroBlack border-leadistroRed/80 border-2 p-2 rounded-3xl"
                        >
                            <Image src={img} alt='chat' className='w-full h-full bg-cover' />
                        </div>
                    </div>
                    <div className="relative z-20 flex items-center text-lg font-medium">
                        <Command className="mr-2 h-6 w-6" /> leadistro
                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-base">
                                &ldquo;This App is if not one of the best generative Ai tools Out There Try it Yourself to see what i am talking about!&rdquo;
                            </p>
                            <footer className="text-xs">Raman Halder - Leadistro</footer>
                        </blockquote>
                    </div>
                </div>
                <div className="lg:p-8">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Create an account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to create your account
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <Link
                                href="#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="#"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </LoginMain>
    )
}
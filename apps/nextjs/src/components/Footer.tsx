import Image from 'next/image';
import React from 'react'
import { Button } from './ui/button';


const Footer: React.FC = () => {
    return (
        <footer className='w-full flex flex-col items-center justify-center bg-leadistroBlack text-leadistroWhite'>
            <div className="flex w-full p-4 items-center justify-between">
                <div className='flex space-y-4 flex-col items-start justify-start font-poppins'>
                    <Image src={`/logoWhite.png`} alt={'Logo'} loading='lazy' width={30} height={30} className='rounded-sm' />
                    <h3 className='scroll-m-20 text-xl font-semibold max-w-xs tracking-wide'>
                        Growing up your business and ours with leadistro.
                    </h3>
                    <p className='text-sm leading-relaxed'>leadistro, 2023.</p>
                </div>
                <div className='grid font-poppins text-xs place-items-start gap-4 p-4 grid-cols-1 md:grid-cols-3'>
                    {/* Header {1} */}
                    <p className='text-leadistroWhite/90 font-semibold pl-3'>Platform</p>
                    {/* Header {2} */}
                    <p className='text-leadistroWhite/90 font-semibold pl-3'>Company</p>
                    {/* Header {3} */}
                    <p className='text-leadistroWhite/90 font-semibold place-self-start text-sm'>Get The App</p>
                    <Button size={'sm'} variant={'ghost'} className='rounded-xl text-xs'>Dashboard</Button>
                    <Button size={'sm'} variant={'ghost'} className='rounded-xl text-xs'>Blog</Button>
                    <Button size={'sm'} variant={'outline'} className='flex rounded-full hover:bg-leadistroBrown hover:text-leadistroRed hover:border-leadistroRed items-center justify-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className='text-leadistroRed' ><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        <p>
                            Web App
                        </p>
                    </Button>
                    <Button size={'sm'} variant={'ghost'} className='rounded-xl text-xs'>Pricing & Plans</Button>
                    <Button size={'sm'} variant={'ghost'} className='rounded-xl text-xs'>Updates</Button>
                    <Button size={'sm'} variant={'outline'} className='flex hover:text-leadistroWhite/80 hover:bg-leadistroBlack rounded-full items-center justify-center space-x-2'>
                        <svg width="24" height="38" viewBox="0 0 74 88" fill="none" xmlns="http://www.w3.org/2000/svg" className='p-1 hover:text-green-400'>
                            <path d="M68.7011 32.9788C65.8052 32.9788 63.4022 35.4312 63.4022 38.4495V60.458C63.4022 63.4763 65.8052 65.9915 68.7011 65.9915C71.597 65.9915 74 63.5391 74 60.458V38.4495C74 35.4312 71.597 32.9788 68.7011 32.9788ZM5.29892 32.9788C2.403 32.9788 0 35.4312 0 38.4495V60.458C0 63.4763 2.403 65.9915 5.29892 65.9915C8.19484 65.9915 10.5978 63.5391 10.5978 60.458V38.4495C10.5978 35.4312 8.19484 32.9788 5.29892 32.9788ZM13.2473 63.2247C13.2473 65.4256 14.1099 67.5007 15.5887 69.0727C17.0674 70.6447 19.1007 71.4622 21.1957 71.4622V82.4664C21.1957 85.4847 23.5987 88 26.4946 88C29.3905 88 31.7935 85.5476 31.7935 82.4664V71.4622H42.3297V82.4664C42.3297 85.4847 44.7327 88 47.6286 88C50.5246 88 52.9276 85.5476 52.9276 82.4664V71.4622C55.0225 71.4622 57.0558 70.5819 58.5346 69.0727C60.0133 67.5007 60.8759 65.4256 60.8759 63.2247V32.9788H13.2473V63.2247ZM60.6295 27.4452C60.2598 23.7981 59.0891 20.2768 57.2406 17.1956C55.3922 14.0515 52.9276 11.4105 49.97 9.46116L52.6195 3.9276C52.9276 3.29879 52.9892 2.54421 52.7427 1.85252C52.6344 1.50967 52.4582 1.19321 52.225 0.922785C51.9918 0.652356 51.7066 0.433731 51.3872 0.280481C51.0742 0.120227 50.7327 0.0264542 50.3832 0.00483723C50.0337 -0.0167797 49.6835 0.0342093 49.3539 0.154718C48.6761 0.406244 48.1216 0.909295 47.8135 1.53811L45.164 7.07167L44.4863 6.75726C39.6187 5.05947 34.3813 5.05947 29.5137 6.75726L28.836 7.07167L26.1865 1.53811C25.8643 0.893713 25.3134 0.398972 24.6461 0.154718C24.3165 0.0342093 23.9663 -0.0167797 23.6168 0.00483723C23.2673 0.0264542 22.9258 0.120227 22.6128 0.280481C21.9967 0.594888 21.5037 1.16082 21.2573 1.85252C21.1392 2.18892 21.0892 2.54627 21.1104 2.90295C21.1316 3.25963 21.2235 3.60822 21.3805 3.9276L24.03 9.46116C21.0724 11.4734 18.6078 14.1144 16.7594 17.1956C14.9109 20.3396 13.7402 23.7981 13.3705 27.4452V30.212H60.7527V27.4452H60.6295ZM29.0824 21.9746C28.4047 21.9746 27.7269 21.6601 27.234 21.1571C26.9815 20.9018 26.7808 20.5983 26.6434 20.2638C26.506 19.9293 26.4345 19.5705 26.433 19.2078C26.433 18.4532 26.6794 17.7615 27.234 17.2585C27.7269 16.7554 28.4047 16.441 29.0824 16.441C29.7602 16.441 30.438 16.7554 30.9309 17.2585C31.4238 17.7615 31.7319 18.4532 31.7319 19.2078C31.7319 19.9624 31.4238 20.654 30.9309 21.1571C30.438 21.6601 29.7602 21.9746 29.0824 21.9746ZM44.9176 21.9746C44.2398 21.9746 43.562 21.6601 43.0691 21.1571C42.8167 20.9018 42.616 20.5983 42.4785 20.2638C42.3411 19.9293 42.2696 19.5705 42.2681 19.2078C42.2681 18.4532 42.5146 17.7615 43.0691 17.2585C43.562 16.7554 44.2398 16.441 44.9176 16.441C45.5953 16.441 46.2731 16.7554 46.766 17.2585C47.2589 17.7615 47.567 18.4532 47.567 19.2078C47.567 19.9624 47.2589 20.654 46.766 21.1571C46.2731 21.6601 45.5953 21.9746 44.9176 21.9746Z" fill="#87DB1C" />
                        </svg>
                        <p>
                            Android
                        </p>
                    </Button>
                    <Button size={'sm'} variant={'ghost'} className='rounded-xl text-xs'>AI Tools</Button>
                    <Button size={'sm'} variant={'ghost'} className='rounded-xl text-xs'>About</Button>
                    <Button size={'sm'} variant={'outline'} className='flex hover:text-leadistroRed hover:bg-leadistroBrown bg-leadistroBlack rounded-full items-center justify-center space-x-2'>
                        <svg fill="#ff9580" width="20px" height="20px" viewBox="-52.01 0 560.035 560.035" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655" />
                        </svg>
                        <p className='mt-[1px]'>
                            Coming Soon
                        </p>
                    </Button>
                </div>
            </div>
            <div className="flex p-4 bg-leadistroRed text-leadistroBlack w-full items-center justify-between">
                <p className='text-sm font-poppins font-bold'>© 2023 Leadistro LLC All rights reserved.</p>
                <div className='flex items-center font-medium justify-between space-x-9 font-poppins'>
                    <p className='text-sm leading-relaxed '>Terms of Service</p>
                    <p className='text-sm leading-relaxed '>Privacy Policy</p>
                    <p className='text-sm leading-relaxed '>Cookies</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
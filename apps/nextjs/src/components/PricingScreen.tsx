import React from 'react'
import { Heading1, Heading3 } from './typography/Typography'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import RadialGradientCard from './RadialGradientCards'

const PricingScreen: React.FC = () => {

    return (
        <>
            <div className="min-h-screen min-w-full py-10 md:py-20 flex font-poppins flex-col items-center justify-center  bg-leadistroBlack">
                <Heading1
                    textChildren='Pricing'
                    className='md:text-left text-center text-leadistroWhite mb-5' />
                <Heading3
                    textChildren='Choose the Plan That Fits Your Needs'
                    className='md:text-left text-center text-leadistroRed' />
                <p className='font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                    Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                </p>
                <div className='flex md:flex-row space-x-4 flex-col items-center justify-center w-full'>
                    <RadialGradientCard
                        buttonText='Get Started'
                        cardDescription='Get Started for Free'
                        cardTitle='Free'
                        contentPoints={[
                            "Audience storage",
                            "Basic campaign management tools",
                            "Prebuilt email and social media templates"
                        ]}
                    />
                    <RadialGradientCard
                        buttonText='Choose Standard Plan'
                        cardDescription='Unlock Enhanced Marketing Capabilities'
                        cardTitle='Standard Plan - $29/month'
                        contentPoints={[
                            "Expanded audience storage",
                            "Prebuilt email and social media templates",
                            "AI assistance for content optimization",
                            "Advanced campaign management tools"
                        ]}
                    />
                    <RadialGradientCard
                        buttonText='Premium Plan'
                        cardDescription='Premium Plan for everything'
                        cardTitle='Premium Plan - $49/month'
                        contentPoints={[
                            "Extended audience storage",
                            "Prebuilt email and social media templates",
                            "Advanced AI assistance for content creation and optimization",
                            "Advanced campaign management tools",
                            "Enhanced reporting and analytics"
                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default PricingScreen


// {/* <div className="flex flex-col space-y-4 p-2 md:space-x-2 md:flex-row items-center  bg-leadistroBrown justify-between max-w-screen-lg h-full">
//                     <Card className='h-[500px] w-[350px] text-leadistroWhite bg-leadistroBlack border-leadistroWhite/70 border-2 '>
//                         <CardHeader>
//                             <CardTitle className='text-2xl'>Free
// Get Started for Free</CardTitle >
    //                             <CardDescription className='text-xl'>Free
    // Get Started for Free</CardDescription >
//                         </CardHeader>
//                         <CardContent className='md:text-left'>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Audience storage
//                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Basic campaign management tools
//                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Prebuilt email and social media templates
//                             </p>
//                         </CardContent>
//                         <CardFooter className='flex items-center justify-center'>
//                             <Button variant={'ghost'}>Get Started</Button>
//                         </CardFooter>
//                     </Card>
//                     <Card className='h-[500px] w-[350px] text-leadistroWhite bg-leadistroBlack border-leadistroRed border-2'>
//                         <CardHeader>
//                             <CardTitle className='text-2xl'>Standard Plan - $29/month</CardTitle>
//                             <CardDescription className='text-xl'>Unlock Enhanced Marketing Capabilities</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
                                // Expanded audience storage
                                //                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
                                // Prebuilt email and social media templates
                                //                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
                                // AI assistance for content optimization
                                //                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
                                // Advanced campaign management tools
                                //                             </p>
//                         </CardContent>
//                         <CardFooter className='flex items-center justify-center'>
//                             <motion.div whileHover={{ scale: 1.1 }}>
//                                 <Button variant={'outline'} className='bg-leadistroBlack border-2 border-leadistroRed'>Choose Standard Plan</Button>
//                             </motion.div>
//                         </CardFooter>
//                     </Card>
//                     <Card className='h-[500px] w-[350px] text-leadistroWhite bg-leadistroBlack border-leadistroWhite/70 border-2 '>
//                         <CardHeader>
//                             <CardTitle className='text-2xl' >Pro Plan - $99/month</CardTitle>
//                             <CardDescription className='text-xl'>Unleash the Full Potential of Your Marketing</CardDescription>
//                         </CardHeader>
//                         <CardContent className='text-xl'>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Extended audience storage
//                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Prebuilt email and social media templates
//                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Advanced AI assistance for content creation and optimization
//                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Advanced campaign management tools
//                             </p>
//                             <p className='text-sm leading-relaxed [&:not(:first-child)]:mt-6' >
//                                 Enhanced reporting and analytics
//                             </p>
//                         </CardContent>
//                         <CardFooter className='flex items-center justify-center'>
//                             <motion.div whileHover={{ scale: 1.1 }}>
//                                 <Button variant={'outline'} className='bg-leadistroBlack border-2 border-leadistroRed'>Choose Essential Plan</Button>
//                             </motion.div>
//                         </CardFooter>
//                     </Card>
//                 </div> */}
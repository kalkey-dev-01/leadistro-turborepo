import React from 'react'
import { Heading1, Heading3, Paragraph } from './typography/Typography'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const PricingScreen: React.FC = () => {
    return (
        <>
            <div className="min-h-screen min-w-full flex flex-col items-center justify-start md:py-16 bg-leadistroBrown">
                <Heading1
                    textChildren='Pricing'
                    className='font-poppins text-leadistroWhite mb-5' />
                <Heading3
                    textChildren='Choose the Plan That Fits Your Needs'
                    className='font-poppins text-leadistroRed' />
                <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                    Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                </p>
                <div className="flex flex-col space-x-2 md:flex-row items-center bg-leadistroBrown p-3 justify-between max-w-screen-lg h-full">
                    <Card className='text-leadistroWhite font-poppins w-[400px] bg-leadistroBlack border-leadistroWhite/70 border-2 h-[500px]'>
                        <CardHeader>
                            <CardTitle className='text-2xl' >Free</CardTitle>
                            <CardDescription>Get Started for Free</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p></p>
                        </CardContent>
                        <CardFooter>
                            <p></p>
                        </CardFooter>
                    </Card>
                    <Card className='text-leadistroWhite font-poppins w-[400px] bg-leadistroBlack border-leadistroRed border-2 h-[500px]'>
                        <CardHeader>
                            <CardTitle className='text-2xl' >Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p></p>
                        </CardContent>
                        <CardFooter>
                            <p></p>
                        </CardFooter>
                    </Card>
                    <Card className='text-leadistroWhite font-poppins w-[400px] bg-leadistroBlack border-leadistroWhite/70 border-2 h-[500px]'>
                        <CardHeader>
                            <CardTitle className='text-2xl' >Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p></p>
                        </CardContent>
                        <CardFooter>
                            <p></p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default PricingScreen
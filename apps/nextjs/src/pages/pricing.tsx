import React from 'react'
import RadialGradientCard from '~/components/RadialGradientCards'
import { Heading1, Heading3 } from '~/components/typography/Typography'
import { Meta } from '~/meta/meta'
import Main from '~/templates/Main'


const PricingScreen: React.FC = () => {
    return (
        <Main
            meta={
                <Meta
                    title='Pricing'
                    description='Free Tier to Pro Membership, Its Your Choice.'
                />
            }
        >
            <div className="min-h-screen min-w-full py-10 md:py-20 px-6 md:px-10 flex font-poppins flex-col items-center justify-center  bg-leadistroBlack">
                <Heading1
                    textChildren='Pricing'
                    className='md:text-left text-center text-leadistroWhite mb-5' />
                <Heading3
                    textChildren='Choose the Plan That Fits Your Needs'
                    className='md:text-left text-center text-leadistroRed' />
                <p className='font-medium text-xs md:text-sm text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                    Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                </p>
                <div className='flex md:flex-row md:my-16 my-10 md:space-x-6 flex-col space-y-3 md:space-y-0 items-center md:items-start justify-center w-full'>
                    <div className='border-2 border-leadistroWhite/70 rounded-3xl'>
                        <RadialGradientCard
                            variant={'ghost'}
                            buttonText='Get Started'
                            cardDescription='Get Started for Free'
                            cardTitle='Free'
                            contentPoints={[
                                "Audience storage",
                                "Basic campaign management tools",
                                "Prebuilt email and social media templates"
                            ]}
                        />
                    </div>
                    <div className='border-2 border-leadistroRed/70 rounded-3xl'>
                        <RadialGradientCard
                            variant={'outline'}
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
                    </div>
                    <div className='border-2 border-leadistroWhite/70 rounded-3xl'>
                        <RadialGradientCard
                            variant={'ghost'}
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
            </div>
        </Main>
    )
}

export default PricingScreen
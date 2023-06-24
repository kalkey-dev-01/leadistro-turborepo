import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
// import { MouseContext } from '~/utils/mouse-observer'
import { useMotionTemplate, useMotionValue, motion } from 'framer-motion'
import { Button } from './ui/button';

interface Props {
    cardTitle: string;
    cardDescription: string;
    contentPoints: string[];
    buttonText: string;
    variant: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
}

const RadialGradientCard: React.FC<Props> = ({ buttonText, cardDescription, contentPoints, cardTitle, variant }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    console.log('render');

    // const [MousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
    function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
        // console.log(clientX, 'Client X', clientY, 'Client Y', currentTarget.getBoundingClientRect())
        const { top, left } = currentTarget.getBoundingClientRect();
        // const posX = clientX - left;
        // const posY = clientY - top;
        // console.log(posX, posY);
        // mouseX.set(posX);
        // mouseY.set(posY);
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div className='md:my-20 my-10'>
            <div
                onMouseMove={handleMouseMove}
                className="relative max-w-md overflow-hidden rounded-3xl group"
            >
                <motion.div className='absolute -inset-px rounded-3xl group-hover:opacity-100 opacity-0 transition duration-300 pointer-events-none'
                    style={{
                        background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px,rgba(255, 149,  128, 0.125), transparent 70%)`
                    }}
                />
                {/* This is the card down here Here border is set to transparent to avoid any other issues of the card */}
                <Card className='md:w-[25vw] bg-leadistroBlack text-leadistroWhite  font-poppins border-transparent'>
                    <CardHeader>
                        <CardTitle className='text-2xl'>{cardTitle}</CardTitle>
                        <CardDescription className='text-xl text-leadistroRed/80 '>{cardDescription}</CardDescription>
                    </CardHeader>
                    <CardContent className='md:text-left'>
                        {
                            contentPoints.map((val, index) => (
                                <p key={index} className='text-sm leading-relaxed [&:not(:first-child)]:mt-6'>
                                    {val}
                                </p>
                            )
                            )
                        }
                    </CardContent>
                    <CardFooter className='flex items-center justify-center'>
                        <Button variant={variant}>{buttonText}</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default RadialGradientCard


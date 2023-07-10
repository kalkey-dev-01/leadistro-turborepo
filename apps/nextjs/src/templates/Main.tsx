// import { motion, AnimatePresence } from 'framer-motion';
import { Comfortaa, Poppins } from 'next/font/google';
import { type ReactNode, type FC } from 'react';
import React from 'react'
import Footer from '~/components/Footer';
import NavigationBar, { Navbar } from '~/components/Navbar';
// import { useFollowPointer, useMousePosition } from '~/utils/use-follow-pointer';


type Props = {
    meta: ReactNode;
    children: ReactNode;
};

export const comfortaa = Comfortaa({
    subsets: ['latin'],
    variable: '--font-comfortaa',
});
export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

// function SpotlightEffect({ children }: { children: React.ReactNode }) {
//     const mousePosition = useMousePosition();
//     const [isHovered, setIsHovered] = React.useState<boolean>(false);
//     return (
//         <div
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className="relative overflow-hidden border border-leadistroRed backdrop-blur"
//         >
//             <AnimatePresence>
//                 {isHovered && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         layoutId="spotlight"
//                         className="absolute inset-0 z-0 overflow-hidden bg-fixed"
//                         style={{
//                             background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(${mousePosition.x},50%,80%,0.035) 0%,transparent 10%,transparent) fixed`
//                         }}
//                     ></motion.div>
//                 )}
//             </AnimatePresence>
//             <motion.div
//                 className="absolute inset-0 z-0 overflow-hidden bg-fixed"
//                 style={{
//                     clipPath: `polygon(0% 0%, 0% 100%, calc(0% + 1px) 100%, calc(0% + 1px) calc(0% + 1px), calc(100% - 1px) calc(0% + 1px), calc(100% - 1px) calc(100% - 1px), calc(0% + 1px) calc(100% - 1px), calc(0% + 1px) 100%, 100% 100%, 100% 0%)`,
//                     background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(${(mousePosition.x + mousePosition.y) / 5},90%,70%,0.35) 0%,transparent 10%,transparent) fixed`
//                 }}
// const ref = useRef<HTMLDivElement>(null)
// const { x, y } = useFollowPointer(ref)
// console.log(x, 'X ', y, 'Y')
//             ></motion.div>
//             <div className="relative z-10">{children}</div>
//         </div>
//     )
// }
// {/* <motion.div
//     className='h-10 w-10 absolute overflow-x-hidden z-50 bg-leadistroWhite'
//     ref={ref}
//     animate={{ x: x, y: y }}
//     transition={{
//         type: "spring",
//         damping: 3,
//         stiffness: 50,
//         restDelta: 0.001
//     }} /> */}

const Main: FC<Props> = ({ meta, children }) => {
    return (
        <div className={`flex min-w-full flex-col items-center justify-between ${poppins.variable} ${comfortaa.variable}`}>
            {meta}
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
}

export const LoginMain: FC<Props> = ({ meta, children }) => {
    return (
        <div className={`flex min-h-screen min-w-full flex-col items-center justify-between ${poppins.variable} ${comfortaa.variable}`}>
            {meta}
            {children}
        </div>
    );
}



export default Main
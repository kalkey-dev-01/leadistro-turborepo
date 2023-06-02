import { Comfortaa, Poppins } from "next/font/google";
import type { FC } from "react"
const comfortaa = Comfortaa({
    subsets: ['latin'],
    variable: '--font-comfortaa',
});
const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
});

export const Heading1: FC<{ textChildren: string }> = ({ textChildren }) => {
    return (
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${poppins.className}`}>
            {textChildren}
        </h1>
    )
}

export const Heading2: FC<{ textChildren: string }> = ({ textChildren }) => {
    return (
        <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`}>
            {textChildren}
        </h2>
    )
}
export const Heading3: FC<{ textChildren: string }> = ({ textChildren }) => {
    return (
        <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight`}>
            {textChildren}
        </h3>
    )
}
export const Heading4: FC<{ textChildren: string }> = ({ textChildren }) => {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {textChildren}
        </h4>
    )
}

export const Paragraph: FC<{ textChildren: string }> = ({ textChildren }) => {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {textChildren}
        </p>
    )
}

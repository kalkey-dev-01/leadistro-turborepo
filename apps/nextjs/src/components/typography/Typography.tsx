import type { FC } from "react"

export const Heading1: FC<{ textChildren: string, className?: string }> = ({ textChildren, className }) => {
    return (
        <h1 className={`scroll-m-20 text-4xl font-extrabold  tracking-tight lg:text-5xl ${className}`}>
            {textChildren}
        </h1>
    )
}

export const Heading2: FC<{ textChildren: string, className?: string }> = ({ textChildren, className }) => {
    return (
        <h2 className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}>
            {textChildren}
        </h2>
    )
}
export const Heading3: FC<{ textChildren: string, className?: string }> = ({ textChildren, className }) => {
    return (
        <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
            {textChildren}
        </h3>
    )
}
export const Heading4: FC<{ textChildren: string, className?: string }> = ({ textChildren, className }) => {
    return (
        <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
            {textChildren}
        </h4>
    )
}

export const Paragraph: FC<{ textChildren: string, className?: string }> = ({ textChildren, className }) => {
    return (
        <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
            {textChildren}
        </p>
    )
}

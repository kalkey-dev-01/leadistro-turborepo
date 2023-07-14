import React from "react";

export const WorkContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">{children}</div>
)

export const WorkBackground: React.FC = () => (
    <div className="grid grid-cols-1 bg-transparent lg:grid-cols-2 w-full min-h-screen top-0 sticky">
        <div className="bg-gradient-to-b from-leadistroBrown to-leadistroBlack h-[40vh] lg:h-auto"></div>
        <div className="bg-leadistroBlack h-[60vh] lg:min-h-screen"></div>
    </div>
)

export const WorkLeft: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div style={{
            transform: `translateY(${translateY}px)`
        }} className="flex flex-col items-center px-5 md:px-8 justify-center h-[50vh] lg:h-auto" >
            <div className="text-leadistroWhite">{children}</div>
        </div>
    )
}

export const WorkRight: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {
    const translateY = Math.max(-50, -(progress - 0.5) * 50)
    return (
        <div style={{
            transform: `translateY(${translateY}px)`
        }} className="flex flex-1 lg:items-center justify-center h-screen" >
            <div className="w-full max-w-md  lg:pt-0 px-10 md:px-0"> {children}</div>
        </div>
    )
}
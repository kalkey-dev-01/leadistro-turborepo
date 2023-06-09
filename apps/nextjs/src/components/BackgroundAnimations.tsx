import React from 'react'

const BackgroundAnimation: React.FC = () => {
    return (
        <div className='absolute top-3 left-0 right-0'>
            <div className="animate-blob animation-delay-6000 filter blur-xl  bg-gradient-to-tr from-leadistroRed via-leadistroWhite to-leadistroRed absolute top-0 hidden md:inline-flex md:-left-96   bg-leadistroRed  w-80  h-80 rounded-full"></div>
            <div className="animate-blob animation-delay-2000 filter blur-xl  bg-gradient-to-tr from-leadistroRed via-leadistroWhite to-leadistroRed absolute top-0 -left-4 md:-left-40   bg-leadistroRed  w-80  h-80 rounded-full"></div>
            <div className="animate-blob animation-delay-4000 filter blur-xl  bg-gradient-to-l from-leadistroRed via-leadistroRed to-slate-300 absolute top-0 -right-4 md:-right-80  bg-leadistroRed  w-80  h-80 rounded-full"></div>
            <div className="animate-blob animation-delay-6000 filter blur-xl  bg-gradient-to-br from-leadistroWhite via-leadistroRed/80 to-leadistroRed absolute -bottom-8 left-20 md:left-50 md:right-60  bg-leadistroRed w-80 h-80 rounded-full"></div>
        </div>
    )
}
export default BackgroundAnimation
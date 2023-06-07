import React from 'react'
import { ScrollContext } from '~/utils/scroll-observer';

import h from '~/styles/hiw.module.css'

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
    const blockProgress = sectionProgress - blockNo;
    if (blockProgress >= 0 && blockProgress < 1) return 1
    return 0.2
}

const HowItWorks = () => {
    const { scrollY } = React.useContext(ScrollContext);
    const blockRefContainer = React.useRef<HTMLDivElement>(null);
    // numofpages = current block no + 2
    const numOfPages = 3
    let progress = 0
    const { current: elContainer } = blockRefContainer
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer
        const screenHeight = window.innerHeight
        const halfHeight = screenHeight / 2
        const percentY = Math.min(
            clientHeight + halfHeight,
            Math.max(
                -screenHeight, scrollY - offsetTop
            ) + halfHeight) / clientHeight
        progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
    }
    console.log(progress)
    return (
        <div ref={blockRefContainer} className="text-leadistroWhite bg-leadistroBlack ">
            <div className="min-h-screen max-w-screen-xl font-poppins mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center  text-4xl md:text-5xl lg:text-6xl  font-semibold">
                <div className="leading-none">
                    <div className={h.skillText} style={{
                        opacity: opacityForBlock(progress, 0)
                    }}>
                        Effortlessly save and organize your marketing audience within Leadistro. Import contacts and keep them all in one place for easy access and updates.
                    </div>
                    <span className={`${h.skillText} inline-block after:content-['_'] `} style={{
                        opacity: opacityForBlock(progress, 1)
                    }} >
                        Create compelling campaigns with Leadistro&apos;s professionally designed templates. Choose from a variety of options for emails and social media. Customize the templates to align with your brand and message.
                    </span>
                    <div className={`${h.skillText} inline-block`} style={{
                        opacity: opacityForBlock(progress, 2)
                    }}>
                        Enhance your marketing efforts with Leadistro. Generate product descriptions, get ad copy suggestions, and more to maximize the impact of your campaigns.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
import React, { useContext, useRef } from "react";
import { ScrollContext } from "~/utils/scroll-observer";

interface WrapperProps {
    numOfPages: number,
    children: React.ReactNode,
}

interface HorizonContextValue {
    numOfPages: number
    currentPage: number
}

const HorizonContext = React.createContext<HorizonContextValue>({
    numOfPages: 0,
    currentPage: 0
})

const Wrapper: React.FC<WrapperProps> = ({ numOfPages, children }) => {
    const { scrollY } = useContext(ScrollContext)
    const refContainer = useRef<HTMLDivElement>(null)
    let currentPage = 0
    const { current: elContainer } = refContainer
    if (elContainer) {
        const { clientHeight, offsetLeft } = elContainer
        const screenHeight = window.innerHeight
        const halfHeight = screenHeight / 2
        const percentY = Math.min(
            clientHeight + halfHeight,
            Math.max(-screenHeight, scrollY - offsetLeft) + halfHeight) / clientHeight
        currentPage = percentY * numOfPages
    }


    return (
        <HorizonContext.Provider value={{ currentPage, numOfPages }}>
            <div ref={refContainer} className="relative bg-black text-white" style={{
                height: `${numOfPages * 100}vh`,
                width: `${numOfPages * 100}vw`
            }}>{children}
            </div>
        </HorizonContext.Provider>
    )
}

const HorizonBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="absolute h-full w-full">{children}</div>
)

const HorizonContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
)


interface Props {
    page: number
    renderContent: (props: { progress: number }) => any

}

const Horizon: React.FC<Props> = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(HorizonContext)
    const refContainer = useRef<HTMLDivElement>(null)
    const progress = Math.max(0, currentPage - page)

    let opacity = Math.min(1, Math.max(0, progress * 4))
    if (progress > 0.85 && page < numOfPages - 1) {
        opacity = Math.max(0, (1.0 - progress) * 4)
    }
    return (
        <div ref={refContainer} style={{
            opacity,
            pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined
        }} className="absolute top-0 w-full" >{renderContent({ progress })}</div>
    )
}


const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="grid grid-rows-1 lg:grid-rows-2 min-w-full min-h-max">{children}</div>
)


const Background: React.FC = () => (
    <div className="grid grid-rows-1 bg-transparent lg:grid-rows-2 w-full min-h-max top-0 sticky">
        <div className="bg-leadistroRed h-[50vh] w-[100vw] "></div>
        <div className="bg-leadistroBrown h-[50vh] w-[100vw] "></div>
    </div>
)


const Left: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {
    let translateX = Math.max(0, 50 - progress * 3 * 50)
    if (progress > 0.85) translateX = Math.max(-50, -(progress - 0.85) * 2 * 50)
    return (
        <div style={{
            transform: `translateX(${translateX}px)`
        }} className="flex flex-col items-center px-5 md:px-8 justify-center" >
            <div className="text-leadistroWhite">{children}</div>
        </div>
    )
}


const Right: React.FC<{ progress: number, children: React.ReactNode }> = ({ children, progress }) => {
    const translateX = Math.max(-50, -(progress - 0.5) * 50)
    return (
        <div style={{
            transform: `translateX(${translateX}px)`
        }} className="flex flex-1 lg:items-center justify-center" >
            <div className="w-full max-w-md pt-10 lg:pt-0 px-10 md:px-0"> {children}</div>
        </div>
    )
}

const Horiz: React.FC = () => {

    return (
        <Wrapper numOfPages={3}>
            <HorizonBackground>
                <Background />
            </HorizonBackground>
            <HorizonContent>
                <Horizon page={0} renderContent={({ progress }) =>
                    <Container>
                        <Left progress={progress}>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                        </Left>
                        <Right progress={progress}>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                        </Right>
                    </Container>
                }></Horizon>
            </HorizonContent>
            <HorizonContent>
                <Horizon page={1} renderContent={({ progress }) =>
                    <Container>
                        <Left progress={progress}>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                        </Left>
                        <Right progress={progress}>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                        </Right>
                    </Container>
                }></Horizon>
            </HorizonContent>
            <HorizonContent>
                <Horizon page={2} renderContent={({ progress }) =>
                    <Container>
                        <Left progress={progress}>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                        </Left>
                        <Right progress={progress}>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                            <p className='font-poppins font-medium text-center text-leadistroWhite max-w-screen-md leading-relaxed [&:not(:first-child)]:mt-6'>
                                Leadistro offers flexible pricing plans to cater to businesses of all sizes. Whether you&apos;re a startup or an enterprise, we have the right plan to help you optimize your email marketing campaigns and achieve your marketing goals. Select the plan that suits your requirements and take your marketing efforts to the next level.
                            </p>
                        </Right>
                    </Container>
                }></Horizon>
            </HorizonContent>
        </Wrapper>
    );
};

export default Horiz;
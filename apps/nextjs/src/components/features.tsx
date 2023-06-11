// import Image from 'next/image';
import React, { type ReactNode, useContext, useRef } from 'react';

// import BackdropImage from '@/public/assets/images/VerticalDiamondBg.svg';

import { ScrollContext } from '~/utils/scroll-observer';

interface WrapperProps {
    numOfPages: number;
    children: React.ReactNode;
}

interface FContextValue {
    numOfPages: number;
    currentPage: number;
}

export const FContext = React.createContext<FContextValue>({
    numOfPages: 0,
    currentPage: 0,
});
export const TitleWrapper: React.FC<WrapperProps> = ({
    numOfPages,
    children,
}) => {
    const { scrollY } = useContext(ScrollContext);
    const refContainer = useRef<HTMLDivElement>(null);
    let currentPage = 0;
    const { current: elContainer } = refContainer;
    if (elContainer) {
        const { clientHeight, offsetTop } = elContainer;
        const screenHeight = window.innerHeight;
        const halfHeight = screenHeight / 2;
        const percentY =
            Math.min(
                clientHeight + halfHeight,
                Math.max(-screenHeight, scrollY - offsetTop) + halfHeight
            ) / clientHeight;
        currentPage = percentY * numOfPages;
    }

    return (
        <FContext.Provider value={{ currentPage, numOfPages }}>
            <div
                ref={refContainer}
                className="relative bg-leadistroBlack text-white "
                style={{
                    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                    height: numOfPages * 100 + 'vh',
                }}
            >
                {children}
            </div>
        </FContext.Provider>
    );
};
export const FBackground: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => <div className="absolute h-full w-full">{children}</div>;
export const FContent: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => <div className="sticky top-0 h-screen overflow-hidden">{children}</div>;


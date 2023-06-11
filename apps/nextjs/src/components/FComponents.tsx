import { useContext, useRef } from "react";
import { FContext } from "./features";

interface Props {
    page: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    renderContent: (props: { progress: number }) => any;
}

export const Feature: React.FC<Props> = ({ page, renderContent }) => {
    const { currentPage, numOfPages } = useContext(FContext);
    const refContainer = useRef<HTMLDivElement>(null);
    const progress = Math.max(0, currentPage - page);

    let opacity = Math.min(1, Math.max(0, progress * 4));
    if (progress > 0.85 && page < numOfPages - 1) {
        opacity = Math.max(0, (1.0 - progress) * 4);
    }
    return (
        <div
            ref={refContainer}
            style={{
                opacity,
                pointerEvents: progress <= 0 || progress >= 1 ? 'none' : undefined,
            }}
            className="absolute top-0 w-full"
        >
            {renderContent({ progress })}
        </div>
    );
};

export const FeaturesContainer: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => (
    <div
        className={`grid min-h-screen w-full grid-cols-1 font-poppins lg:grid-cols-2`}
    >
        {children}
    </div>
);

export const FeaturesBackground: React.FC = () => (
    <div className="sticky top-0 grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        <div className="h-[40vh] bg-leadistroBrown text-leadistroRed lg:h-auto"></div>
        <div className="h-[60vh] bg-leadistroBlack text-leadistroWhite lg:min-h-screen">
        </div>
    </div>
);
export const FeaturesLeft: React.FC<{
    progress: number;
    children: React.ReactNode;
}> = ({ children, progress }) => {
    let translateY = Math.max(0, 50 - progress * 3 * 50);
    if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50);
    return (
        <div
            style={{
                transform: `translateY(${translateY}px)`,
            }}
            className="flex h-[50vh] flex-col items-center justify-center text-3xl md:items-start lg:h-auto lg:text-3xl"
        >
            <div className="">{children}</div>
        </div>
    );
};
export const FeaturesRight: React.FC<{
    progress: number;
    children: React.ReactNode;
}> = ({ children, progress }) => {
    const translateY = Math.max(-50, -(progress - 0.5) * 50);
    console.log(progress, 'At features')
    return (
        <div
            style={{
                transform: `translateY(${translateY}px)`,
            }}
            className="flex h-screen flex-1 justify-center lg:items-center"
        >
            <div className="w-full max-w-md px-10 pt-10 md:px-0 lg:pt-0">
                {' '}
                {children}
            </div>
        </div>
    );
};

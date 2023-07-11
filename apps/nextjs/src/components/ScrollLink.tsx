// components/ScrollLink.tsx
import Link, { type LinkProps } from "next/link";
import React, { type PropsWithChildren } from "react";
// mirror the props of next/link component
type AnchorProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition
const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        //remove everything before the hash
        const targetId = e.currentTarget.href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    };
    return (
        <Link {...props} onClick={handleScroll}>
            {children}
        </Link>
    );
};
export default ScrollLink;
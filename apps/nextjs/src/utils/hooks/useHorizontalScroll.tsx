import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: any) => {
                if (e.deltaY === 0) return;
                if (
                    !(el.scrollLeft === 0 && e.deltaY < 0) &&
                    !(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
                        e.deltaY > 0)
                ) {
                    e.preventDefault();
                }
                el.scrollTo({
                    left: el.scrollLeft + e.deltaY,
                    behavior: 'smooth'
                });
            };
            el.addEventListener('wheel', onWheel);
            return () => el.removeEventListener('wheel', onWheel);
        }
    }, []);
    return elRef;
}

// Usage:

// import React from "react";
// import { useSideScroll } from "./useSideScroll";

// export const SideScrollTest = () => {
//   const scrollRef = useHorizontalScroll();
//   return (
//     <div ref={scrollRef} style={{ width: 300, overflow: "auto" }}>
//       <div style={{ whiteSpace: "nowrap" }}>
//         I will definitely overflow due to the small width of my parent container
//       </div>
//     </div>
//   );
// };
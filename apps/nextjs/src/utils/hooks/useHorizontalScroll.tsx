import { useRef, useEffect } from "react";

export function useHorizontalScroll() {
    const elRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            const onWheel = (e: { deltaY: number; preventDefault: () => void; }) => {
                if (e.deltaY == 0) return;
                e.preventDefault();
                el.scrollBy(e.deltaY, 0);
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
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
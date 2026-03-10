import React, { useEffect, useRef } from 'react'

export const useReveal = (animationClass) => {

    
    const ref = useRef(null);

    useEffect(() => {
        // const elements = document.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(([entry], observer) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [animationClass])

      return ref;
// return (
//     <div>useReveal</div>
//   )
}

import { useRef, useEffect, useState } from "react";

/**
 * Hook para detectar quando um elemento entra na tela (viewport).
 * @param {Object} options - Opções do IntersectionObserver (ex: { threshold: 0.2 })
 * @returns [ref, isVisible]
 */

export function useInView(options = { threshold: 0.2 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            options
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => observer.disconnect();
    }, [options]);

    return [ref, isVisible];
}

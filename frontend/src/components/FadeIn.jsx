import React, { useState, useRef, useEffect } from "react";

export default function FadeIn({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Retardo opcional
                    setTimeout(() => setIsVisible(true), 0);
                }
            },
            {
                threshold: 0.1, // Se activa cuando el 10% del elemento es visible
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
            {children}
        </div>
    );
}

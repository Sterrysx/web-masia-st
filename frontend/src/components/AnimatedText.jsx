import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedText({ children, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 } // Ajusta el umbral según convenga
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className={`${className} ${visible ? 'animate-fadeInDown' : 'opacity-0'}`}>
            {children}
        </div>
    );
}

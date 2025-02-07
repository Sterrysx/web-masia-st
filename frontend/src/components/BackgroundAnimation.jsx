// components/BackgroundAnimation.jsx
import React, { useEffect, useState } from 'react';

function BackgroundAnimation() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const numberOfStars = 50;
        const newStars = [];
        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                left: Math.random() * 100,
                top: Math.random() * 100,
                duration: 3 + Math.random() * 5,
                delay: Math.random() * 5,
                size: 1 + Math.random() * 2,
            });
        }
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute bg-white opacity-75 rounded-full animate-fall"
                    style={{
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}
        </div>
    );
}

export default BackgroundAnimation;

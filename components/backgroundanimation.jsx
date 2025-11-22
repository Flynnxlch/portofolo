'use client'

import { useState } from 'react'

const BackgroundAnimation = ({ darkMode }) => {
  // Generate stars for dark mode
  const generateStars = () => {
    const stars = []
    for (let i = 0; i < 100; i++) {
      stars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.8 + 0.2,
      })
    }
    return stars
  }

  const [stars] = useState(generateStars())

  return (
    <>
      {/* Starry Night Animation for Dark Mode */}
      {darkMode && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white animate-pulse"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
              }}
            />
          ))}
        </div>
      )}

      {/* Grid Background for Light Mode */}
      {!darkMode && (
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, #E5E5E5 1px, transparent 1px),
              linear-gradient(to bottom, #E5E5E5 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      )}
    </>
  )
}

export default BackgroundAnimation


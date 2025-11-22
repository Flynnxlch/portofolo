'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HiArrowDown } from 'react-icons/hi2'
import BackgroundAnimation from './backgroundanimation'
import TechStack from './techstack'
import Projects from './projects'
import Contact from './contact'
import SocialModal from './socialmodal'

const About = () => {
  const [darkMode, setDarkMode] = useState(true) // Dark mode as primary
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Set dark mode as primary
    document.documentElement.classList.add('dark')
    setDarkMode(true)
    document.body.style.backgroundColor = '#0a0a0a'
    document.body.style.color = '#ededed'
    
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
    <section id="about" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <BackgroundAnimation darkMode={darkMode} />

      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30 blur-3xl transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1), transparent 50%)`,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 px-4 sm:px-0">
            <div className="space-y-3 sm:space-y-4">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Hi, I'm Misyal
              </h1>
              
              <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto lg:mx-0`}>
                An enthusiastic student at <span className="font-semibold">UIN Syarif Hidayatullah Jakarta</span>, driven by a passion for Web and Android Development. I specialize in crafting front-end experiences that users love, working with diverse technologies such as <span className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>React, Javascript,  PHP, Java, Kotlin, Python, And More</span>, alongside modern frameworks like <span className={`font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Express.js and Next.js</span> to bring ideas to life.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
              <a 
                href="https://github.com/Flynnxlch"
                target="_blank"
                rel="noopener noreferrer"
                className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 text-center ${
                  darkMode 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
              
              <button 
                onClick={() => setIsModalOpen(true)}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base border-2 transition-all duration-300 ${
                  darkMode
                    ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-900'
                    : 'border-[#DFDFDF] text-gray-700 hover:border-gray-400 hover:bg-[#F5F5F5]'
                }`}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative elements */}
              <div 
                className={`absolute -top-4 -right-4 w-72 h-72 rounded-full blur-3xl opacity-20 ${
                  darkMode ? 'bg-purple-500' : 'bg-purple-300'
                }`}
              />
              <div 
                className={`absolute -bottom-4 -left-4 w-72 h-72 rounded-full blur-3xl opacity-20 ${
                  darkMode ? 'bg-blue-500' : 'bg-blue-300'
                }`}
              />
              
              {/* Image container with border and shadow */}
              <div className={`relative z-10 rounded-3xl overflow-hidden ${
                darkMode 
                  ? 'border-2 border-gray-800 shadow-2xl shadow-purple-500/20' 
                  : 'border-2 border-[#DFDFDF] shadow-2xl'
              }`}>
                <div className="aspect-square relative">
                  <Image
                    src="/images/my.webp"
                    alt="Misyal"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <HiArrowDown className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
      </div>
    </section>
    <TechStack />
    <Projects />
    <Contact />
    <SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default About


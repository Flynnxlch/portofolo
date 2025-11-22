'use client'

import { useEffect, useState } from 'react'
import { HiArrowRight, HiCodeBracket, HiDevicePhoneMobile } from 'react-icons/hi2'
import BackgroundAnimation from './backgroundanimation'
import SocialModal from './socialmodal'

const Hero = () => {
  // ===== STATUS CONFIGURATION =====
  // Change this to update your status:
  // 'available' - Green dot: Available for work
  // 'internship' - Yellow dot: Currently Internship at [company]
  // 'working' - Blue dot: Currently work at [company]
  const statusType = 'available' // Change this: 'available' | 'internship' | 'working'
  const companyName = 'Company Name' // Fill this when using 'internship' or 'working'
  // =================================

  const [darkMode, setDarkMode] = useState(true) // Dark mode as primary
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)

  const words = ['Android Developer', 'Web Developer', 'Front End Developer', 'Backend Developer']

  // Status configuration
  const getStatusConfig = () => {
    switch (statusType) {
      case 'internship':
        return {
          dotColor: 'bg-yellow-500',
          dotGlow: 'shadow-yellow-500/50',
          text: `Currently Internship at ${companyName}`,
        }
      case 'working':
        return {
          dotColor: 'bg-blue-500',
          dotGlow: 'shadow-blue-500/50',
          text: `Currently work at ${companyName}`,
        }
      default: // 'available'
        return {
          dotColor: 'bg-green-500',
          dotGlow: 'shadow-green-500/50',
          text: 'Available for work',
        }
    }
  }

  const statusConfig = getStatusConfig()

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

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[currentIndex]
    
    if (!isDeleting && currentText === currentWord) {
      // Word is complete, wait before deleting
      const timer = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timer)
    }
    
    if (isDeleting && currentText === '') {
      // Word is deleted, move to next word
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText((prev) => {
          if (prev.length > 0) {
            return currentWord.substring(0, prev.length - 1)
          }
          return prev
        })
        setTypingSpeed(50)
      } else {
        setCurrentText((prev) => {
          if (prev.length < currentWord.length) {
            return currentWord.substring(0, prev.length + 1)
          }
          return prev
        })
        setTypingSpeed(100)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentIndex, typingSpeed, words])

  return (
    <>
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <BackgroundAnimation darkMode={darkMode} />

      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30 blur-3xl transition-opacity duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1), transparent 50%)`,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2">
            <div className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-[#F5F5F5] text-gray-700'}`}>
              <div className={`relative w-2.5 h-2.5 ${statusConfig.dotColor} rounded-full ${statusConfig.dotGlow} shadow-lg`}>
                <div className={`absolute inset-0 ${statusConfig.dotColor} rounded-full animate-ping opacity-75`} />
              </div>
              <span>{statusConfig.text}</span>
            </div>
          </div>

          {/* Name Section */}
          <div className="space-y-2">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Muhammad
            </h1>
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              Misyal Gibran
            </h2>
          </div>

          {/* Typing Animation */}
          <div className="h-12 md:h-16 flex items-center justify-center px-4">
            <p className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {currentText}
              <span className={`inline-block w-0.5 h-8 sm:h-10 md:h-12 ml-1 ${darkMode ? 'bg-gray-400' : 'bg-gray-600'} animate-pulse`} aria-hidden="true"></span>
            </p>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
            <div className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full border flex items-center gap-2 ${
              darkMode 
                ? 'bg-gray-900/50 border-gray-800 text-gray-300' 
                : 'bg-[#F5F5F5] border-[#DFDFDF] text-gray-700'
            }`}>
              <HiCodeBracket className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">Front End Developer</span>
            </div>
            <div className={`px-4 sm:px-5 py-2 sm:py-3 rounded-full border flex items-center gap-2 ${
              darkMode 
                ? 'bg-gray-900/50 border-gray-800 text-gray-300' 
                : 'bg-[#F5F5F5] border-[#DFDFDF] text-gray-700'
            }`}>
              <HiDevicePhoneMobile className="w-4 sm:w-5 h-4 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">Mobile Development</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto px-4 sm:px-0">
            <a 
              href="https://github.com/Flynnxlch"
              target="_blank"
              rel="noopener noreferrer"
              className={`group px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                darkMode 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Explore Projects
              <HiArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base border-2 transition-all duration-300 ${
                darkMode
                  ? 'border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-900'
                  : 'border-[#DFDFDF] text-gray-700 hover:border-gray-400 hover:bg-[#F5F5F5]'
              }`}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
    <SocialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Hero


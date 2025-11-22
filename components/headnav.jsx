'use client'

import React, { useEffect, useState } from 'react'

const HeadNav = ({ floating = false }) => {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Watch for changes to dark mode
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Detect active section based on scroll position
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'contact']
      const scrollPosition = window.scrollY + 100 // Offset for better detection

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About me', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'My work', href: '#work', id: 'work' },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1 ${
      floating 
        ? darkMode 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg border border-gray-800' 
          : 'bg-white/95 backdrop-blur-lg shadow-lg border border-gray-200'
        : darkMode 
          ? 'bg-gray-900' 
          : 'bg-[#F5F5F5]'
    }`}>
      {navLinks.map((link) => {
        const isActive = activeSection === link.id
        return (
          <button
            key={link.name}
            onClick={() => scrollToSection(link.id)}
            className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
              isActive
                ? darkMode
                  ? 'bg-blue-500 text-white'
                  : 'bg-blue-600 text-white'
                : darkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-blue-500/20 hover:text-blue-400' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            {link.name}
          </button>
        )
      })}
    </div>
  )
}

export default HeadNav


'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const HeadNav = ({ floating = false }) => {
  const [darkMode, setDarkMode] = useState(true)

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'My work', href: '/work' },
  ]

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
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${darkMode ? 'text-gray-300 hover:text-white hover:bg-blue-500/20 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default HeadNav


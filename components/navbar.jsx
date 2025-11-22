'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiArrowUpRight, HiBars3, HiDocumentText, HiMoon, HiSun, HiXMark } from 'react-icons/hi2'
import HeadNav from './headnav'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Set dark mode as primary
    const html = document.documentElement
    html.classList.add('dark')
    setDarkMode(true)
    
    // Also ensure body has dark background
    document.body.style.backgroundColor = '#0a0a0a'
    document.body.style.color = '#ededed'
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    const html = document.documentElement
    const body = document.body
    
    if (newDarkMode) {
      html.classList.remove('light')
      html.classList.add('dark')
      body.style.backgroundColor = '#0a0a0a'
      body.style.color = '#ededed'
    } else {
      html.classList.remove('dark')
      html.classList.add('light')
      body.style.backgroundColor = '#ffffff'
      body.style.color = '#171717'
    }
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About me', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'My work', href: '/work' },
  ]

  const ConnectButton = ({ className = '' }) => (
    <button className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full transition-colors ${darkMode ? 'text-white bg-blue-500 border-blue-500 hover:bg-blue-600' : 'text-white bg-blue-600 border-blue-600 hover:bg-blue-700'} ${className}`}>
      Connect
      <HiArrowUpRight className="w-3 h-3" />
    </button>
  )

  return (
    <>
      {/* Main Navbar */}
      <nav className={`w-full relative z-50 transition-all duration-500 ${darkMode ? 'bg-black' : 'bg-white'} ${scrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand Name */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logoz.webp"
                alt="Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className={`text-xl font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                Misyal
              </span>
            </Link>

          {/* Center Navigation Links - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <HeadNav />
          </div>

          {/* Right Side - Resume, Theme Toggle, and Hamburger Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop: Resume and Theme Toggle */}
            <div className="hidden md:flex items-center gap-3">
              {/* Resume Button */}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 ${darkMode ? 'bg-black border-gray-800 hover:bg-gray-900' : 'bg-white border-[#DFDFDF] hover:bg-[#F5F5F5]'}`}
                aria-label="Download Resume"
              >
                <HiDocumentText className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Resume</span>
              </a>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 relative ${darkMode ? 'bg-black border-gray-800 hover:bg-gray-900' : 'bg-white border-[#DFDFDF] hover:bg-[#F5F5F5]'}`}
                aria-label="Toggle dark mode"
              >
                <div className="relative w-5 h-5">
                  <HiSun
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-100 rotate-0 scale-100' : 'text-gray-700 opacity-0 rotate-90 scale-0'}`}
                  />
                  <HiMoon
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-0 -rotate-90 scale-0' : 'text-gray-700 opacity-100 rotate-0 scale-100'}`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile: Resume, Theme Toggle, and Hamburger Menu - All aligned to the right */}
            <div className="md:hidden flex items-center gap-2">
              {/* Resume Button - Mobile */}
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 ${darkMode ? 'bg-black border-gray-800 hover:bg-gray-900' : 'bg-white border-[#DFDFDF] hover:bg-[#F5F5F5]'}`}
                aria-label="Download Resume"
              >
                <HiDocumentText className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
              </a>
              
              {/* Dark Mode Toggle - Mobile */}
              <button
                onClick={toggleDarkMode}
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 relative ${darkMode ? 'bg-black border-gray-800 hover:bg-gray-900' : 'bg-white border-[#DFDFDF] hover:bg-[#F5F5F5]'}`}
                aria-label="Toggle dark mode"
              >
                <div className="relative w-5 h-5">
                  <HiSun
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-100 rotate-0 scale-100' : 'text-gray-700 opacity-0 rotate-90 scale-0'}`}
                  />
                  <HiMoon
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-0 -rotate-90 scale-0' : 'text-gray-700 opacity-100 rotate-0 scale-100'}`}
                  />
                </div>
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-10 h-10 flex items-center justify-center border rounded-full transition-colors ${darkMode ? 'bg-black border-gray-800 hover:bg-gray-900' : 'bg-white border-[#DFDFDF] hover:bg-[#F5F5F5]'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <HiXMark className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                ) : (
                  <HiBars3 className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 space-y-3 border-t ${darkMode ? 'border-gray-800' : 'border-[#DFDFDF]'}`}>
            {[
              { name: 'Home', id: 'home' },
              { name: 'About me', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'My work', id: 'work' },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  const element = document.getElementById(link.id)
                  if (element) {
                    const offset = 80
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                    const offsetPosition = elementPosition - offset
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
                  }
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors ${darkMode ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-[#F5F5F5]'}`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>

      {/* Floating Navbar - Desktop (Centered) */}
      <div className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-1">
          <HeadNav floating={true} />
          <div className={`flex items-center gap-1 transition-all duration-500 ${scrolled ? 'ml-1' : 'ml-0'}`}>
            {/* Resume Button - Floating */}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 shadow-lg ${darkMode ? 'bg-gray-900/95 border-gray-800 hover:bg-gray-800 backdrop-blur-lg' : 'bg-white/95 border-gray-200 hover:bg-gray-50 backdrop-blur-lg'}`}
              aria-label="Download Resume"
            >
              <HiDocumentText className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            </a>
            
            {/* Theme Toggle - Floating */}
            <button
              onClick={toggleDarkMode}
              className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 relative shadow-lg ${darkMode ? 'bg-gray-900/95 border-gray-800 hover:bg-gray-800 backdrop-blur-lg' : 'bg-white/95 border-gray-200 hover:bg-gray-50 backdrop-blur-lg'}`}
              aria-label="Toggle dark mode"
            >
              <div className="relative w-5 h-5">
                <HiSun
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-100 rotate-0 scale-100' : 'text-gray-700 opacity-0 rotate-90 scale-0'}`}
                />
                <HiMoon
                  className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-0 -rotate-90 scale-0' : 'text-gray-700 opacity-100 rotate-0 scale-100'}`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Navbar - Mobile (Top Right) */}
      <div className={`md:hidden fixed top-4 right-4 z-50 transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-2">
          {/* Resume Button - Floating Mobile */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 shadow-lg ${darkMode ? 'bg-gray-900/95 border-gray-800 hover:bg-gray-800 backdrop-blur-lg' : 'bg-white/95 border-gray-200 hover:bg-gray-50 backdrop-blur-lg'}`}
            aria-label="Download Resume"
          >
            <HiDocumentText className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
          </a>
          
          {/* Theme Toggle - Floating Mobile */}
          <button
            onClick={toggleDarkMode}
            className={`w-10 h-10 flex items-center justify-center border rounded-full transition-all duration-300 relative shadow-lg ${darkMode ? 'bg-gray-900/95 border-gray-800 hover:bg-gray-800 backdrop-blur-lg' : 'bg-white/95 border-gray-200 hover:bg-gray-50 backdrop-blur-lg'}`}
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              <HiSun
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-100 rotate-0 scale-100' : 'text-gray-700 opacity-0 rotate-90 scale-0'}`}
              />
              <HiMoon
                className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${darkMode ? 'text-gray-300 opacity-0 -rotate-90 scale-0' : 'text-gray-700 opacity-100 rotate-0 scale-100'}`}
              />
            </div>
          </button>

          {/* Hamburger Menu Button - Floating Mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-10 h-10 flex items-center justify-center border rounded-full transition-colors shadow-lg ${darkMode ? 'bg-gray-900/95 border-gray-800 hover:bg-gray-800 backdrop-blur-lg' : 'bg-white/95 border-gray-200 hover:bg-gray-50 backdrop-blur-lg'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiXMark className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            ) : (
              <HiBars3 className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
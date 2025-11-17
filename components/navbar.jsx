'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiArrowUpRight, HiBars3, HiMoon, HiSun, HiXMark } from 'react-icons/hi2'
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
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <HeadNav />
          </div>

          {/* Right Side - Empty div for spacing */}
          <div className="hidden md:flex items-center gap-3">
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`py-4 space-y-3 border-t ${darkMode ? 'border-gray-800' : 'border-[#DFDFDF]'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${darkMode ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-[#F5F5F5]'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <ConnectButton className="w-full justify-center" />
            </div>
          </div>
        </div>
      </div>
    </nav>

      {/* Floating HeadNav and Theme Toggle */}
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex items-center gap-1">
          <HeadNav floating={true} />
          <div className={`transition-all duration-500 ${scrolled ? 'ml-1' : 'ml-0'}`}>
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
    </>
  )
}

export default Navbar
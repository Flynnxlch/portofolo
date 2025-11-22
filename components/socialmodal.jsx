'use client'

import { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'

const SocialModal = ({ isOpen, onClose }) => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/muhammad-misyal-gibran-412029297',
      color: 'bg-blue-600 hover:bg-blue-700',
      description: 'Connect with me professionally'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Flynnxlch',
      color: darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-900 hover:bg-black',
      description: 'Check out my code'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: 'https://wa.me/6289669358227',
      color: 'bg-green-600 hover:bg-green-700',
      description: 'Message me on WhatsApp'
    }
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ zIndex: 100 }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className={`relative w-full max-w-md rounded-3xl border shadow-2xl ${
        darkMode 
          ? 'bg-gray-900 border-gray-800' 
          : 'bg-white border-gray-200'
      } animate-in fade-in zoom-in duration-300`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div>
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's Connect
            </h3>
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Choose your preferred platform
            </p>
          </div>
          <button
            onClick={onClose}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              darkMode 
                ? 'hover:bg-gray-800 text-gray-400' 
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        {/* Social Links */}
        <div className="p-6 space-y-3">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-xl ${social.color} text-white transition-all duration-300 transform hover:scale-[1.02]`}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{social.name}</p>
                  <p className="text-sm opacity-90">{social.description}</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SocialModal


'use client'

import { useEffect, useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { HiEnvelope, HiMapPin, HiPaperAirplane } from 'react-icons/hi2'
import BackgroundAnimation from './backgroundanimation'

const Contact = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    const mailtoLink = `mailto:muhammadmisyalg@gmail.com?subject=${subject}&body=${body}`
    
    // Open default email client
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: HiEnvelope,
      title: 'Email',
      detail: 'muhammadmisyalg@gmail.com',
      url: 'mailto:muhammadmisyalg@gmail.com',
      color: 'text-blue-400'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      detail: 'linkedin.com/in/muhammad-misyal-gibran-412029297',
      url: 'https://www.linkedin.com/in/muhammad-misyal-gibran-412029297',
      color: 'text-blue-400'
    }
  ]

  return (
    <section id="contact" className={`relative py-20 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <BackgroundAnimation darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className={`text-sm uppercase tracking-[0.3em] mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`p-8 rounded-3xl border ${
            darkMode 
              ? 'bg-gray-900/50 border-gray-800' 
              : 'bg-[#F5F5F5] border-[#DFDFDF]'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
            <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Feel free to reach out through any of these channels.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.title}
                    href={item.url}
                    target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={item.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    className="flex items-start gap-4 group transition-all duration-300 hover:translate-x-1"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      darkMode 
                        ? 'bg-blue-500/10 group-hover:bg-blue-500/20' 
                        : 'bg-blue-100 group-hover:bg-blue-200'
                    }`}>
                      <Icon className={`w-5 h-5 ${item.color} transition-transform group-hover:scale-110`} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.title}
                      </p>
                      <p className={`transition-colors ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}>
                        {item.detail}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-3xl border ${
            darkMode 
              ? 'bg-gray-900/50 border-gray-800' 
              : 'bg-[#F5F5F5] border-[#DFDFDF]'
          }`}>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Send a Message
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'bg-black border-gray-800 text-white placeholder-gray-500 focus:border-blue-500'
                      : 'bg-white border-[#DFDFDF] text-gray-900 placeholder-gray-400 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>

              {/* Email */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                    darkMode
                      ? 'bg-black border-gray-800 text-white placeholder-gray-500 focus:border-blue-500'
                      : 'bg-white border-[#DFDFDF] text-gray-900 placeholder-gray-400 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>

              {/* Message */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    darkMode
                      ? 'bg-black border-gray-800 text-white placeholder-gray-500 focus:border-blue-500'
                      : 'bg-white border-[#DFDFDF] text-gray-900 placeholder-gray-400 focus:border-blue-500'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  darkMode
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <HiPaperAirplane className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


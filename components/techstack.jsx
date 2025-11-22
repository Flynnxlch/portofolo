'use client'

import { useEffect, useState } from 'react'
import { HiCircleStack, HiCodeBracketSquare, HiCommandLine, HiDevicePhoneMobile, HiServer, HiWrenchScrewdriver } from 'react-icons/hi2'
import BackgroundAnimation from './backgroundanimation'

const TechStack = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    // Load devicon CSS from jsdelivr CDN
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
    document.head.appendChild(link)

    // Check dark mode
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => {
      observer.disconnect()
      // Clean up the stylesheet link if needed
      if (document.head.contains(link)) {
        document.head.removeChild(link)
      }
    }
  }, [])

  const techCategories = [
    {
      title: 'Languages',
      icon: HiCommandLine,
      techs: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain' },
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'React', icon: 'devicon-react-original' },
        { name: 'HTML5', icon: 'devicon-html5-plain' },
        { name: 'CSS3', icon: 'devicon-css3-plain' },
        { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain' },
      ],
    },
    {
      title: 'Framework',
      icon: HiCodeBracketSquare,
      techs: [
        { name: 'Next.js', icon: 'devicon-nextjs-plain' },
        { name: 'Express', icon: 'devicon-express-original' },
      ],
    },
    {
      title: 'Backend',
      icon: HiServer,
      techs: [
        { name: 'Node.js', icon: 'devicon-nodejs-plain' },
        { name: 'PHP', icon: 'devicon-php-plain' },
      ],
    },
    {
      title: 'Mobile/Android',
      icon: HiDevicePhoneMobile,
      techs: [
        { name: 'Java', icon: 'devicon-java-plain' },
        { name: 'Kotlin', icon: 'devicon-kotlin-plain' },
      ],
    },
    {
      title: 'Database',
      icon: HiCircleStack,
      techs: [
        { name: 'Supabase', icon: 'devicon-supabase-plain' },
        { name: 'Firebase', icon: 'devicon-firebase-plain' },
        { name: 'MySQL', icon: 'devicon-mysql-plain' }
      ],
    },
    {
      title: 'Tools',
      icon: HiWrenchScrewdriver,
      techs: [
        { name: 'Git', icon: 'devicon-git-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
        { name: 'VS Code', icon: 'devicon-vscode-plain' },
        { name: 'Android Studio', icon: 'devicon-androidstudio-plain' },
      ],
    },
  ]


  return (
    <section id="services" className={`relative py-20 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <BackgroundAnimation darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Tech Stack
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {techCategories.map((category) => {
            const CategoryIcon = category.icon
            return (
              <div 
                key={category.title} 
                className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-900/50 border-gray-800 hover:border-gray-700' 
                    : 'bg-[#F5F5F5] border-[#DFDFDF] hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <CategoryIcon className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                  <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 ${
                        darkMode
                          ? 'bg-black border-gray-800 text-gray-300 hover:border-gray-700 hover:bg-gray-900'
                          : 'bg-white border-[#E5E5E5] text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <i className={`${tech.icon} colored text-base`}></i>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TechStack


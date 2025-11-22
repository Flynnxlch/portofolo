'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HiCodeBracket } from 'react-icons/hi2'
import BackgroundAnimation from './backgroundanimation'

const Projects = () => {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const checkDarkMode = () => {
      setDarkMode(document.documentElement.classList.contains('dark'))
    }

    checkDarkMode()

    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      name: 'Android Task List',
      date: 'Jul 2025',
      image: '/images/andro.webp',
      description:
        'Android-based task management application for organizing assignments, tracking reminders, and collaborating on progress.',
      techStack: ['Kotlin', 'Android Studio', 'Firebase'],
      features: [
        'Built task boards with priority tags, reminders, and offline-ready storage via Room.',
        'Added secure workspace roles, biometric login, and activity insights for each sprint.',
      ],
      githubUrl: 'https://github.com/Flynnxlch/Aps-TaskList',
    },
    {
      name: 'BisaDitas',
      date: 'Oct 2025',
      image: '/images/Cinema.webp',
      description:
        'Bootcamp hub for the disability community, connecting training progress to inclusive job placements.',
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase'],
      features: [
        'Delivered accessible learning modules, live mentor sessions, and milestone dashboards.',
        'Integrated job allocation engine that matches graduates with roles based on finished tracks.',
      ],
      githubUrl: 'https://github.com/Flynnxlch/Bisaditas',
    },
    {
      name: 'My-Artikelku',
      date: 'Present',
      image: '/images/vim.webp',
      description:
        'Publishing platform where creators draft with Vim-inspired shortcuts, share articles, and foster discussion.',
      techStack: ['PHP', 'JavaScript', 'MySQL'],
      features: [
        'Enabled article authoring with autosave, markdown previews, and threaded comments.',
        'Implemented security policies, audit trails, and activity logs for every publication event.',
      ],
      githubUrl: 'https://github.com/Flynnxlch/My-Artikelku',
    },
  ]

  return (
    <section id="work" className={`relative py-20 overflow-hidden ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <BackgroundAnimation darkMode={darkMode} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className={`text-sm uppercase tracking-[0.3em] mb-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Product case studies blending engineering, UX, and inclusive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className={`h-full flex flex-col rounded-[32px] overflow-hidden border shadow-2xl transition-all duration-500 ${
                darkMode
                  ? 'bg-[#0B0B0B] border-gray-800 hover:border-gray-700'
                  : 'bg-white border-[#E5E5E5] hover:border-gray-400'
              }`}
            >
              {/* Image at the top - no container */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </div>

              <div
                className={`flex flex-col flex-1 px-8 pb-8 pt-6 ${
                  darkMode ? 'bg-[#050505]' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className={`text-xs uppercase tracking-[0.2em] mb-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                    Project
                    </p>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.name}</h3>
                  </div>
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.date}
                  </span>
                </div>

                <p className={`text-sm mb-5 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        darkMode
                          ? 'bg-gray-900 text-gray-200 border border-gray-800'
                          : 'bg-gray-200 text-gray-800 border border-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className={`space-y-2 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm flex items-start">
                      <span className={`mr-2 mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto w-fit inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-black'
                  }`}
                >
                  <HiCodeBracket className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


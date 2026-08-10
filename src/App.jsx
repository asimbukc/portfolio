import { useEffect, useRef, useState } from 'react'
import { FaFileAlt, FaWhatsapp } from 'react-icons/fa'
import './App.css'
import { SkillsSection } from './components/SkillsSection'
import { ProjectsSection } from './components/ProjectsSection'
import { EducationSection } from './components/EducationSection'
import { DiscoSection } from './components/DiscoSection'
import { ExperienceSection } from './components/ExperienceSection'

const techStack = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'Nest Js', 'Tailwind CSS', 'PostgreSQL', 'RestAPI']

const CROSSFADE_MS = 900 // must match the duration-[900ms] classes below

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern shopping experience with secure checkout, dynamic product pages, and CMS-driven inventory.',
    stack: ['Next.js', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Analytics Dashboard',
    description: 'A responsive admin panel for tracking users, sales, and business growth in real time.',
    stack: ['React', 'Node.js', 'Charts'],
  },
  {
    title: 'Portfolio Experience',
    description: 'A polished personal brand website with strong storytelling, clean UI, and smooth interactions.',
    stack: ['Vite', 'Tailwind', 'Framer Motion'],
  },
]

const experience = [
  {
    role: 'Full Stack Developer',
    period: '2023 — Present',
    detail: 'Designing and shipping end-to-end web applications with a focus on clean architecture and fast delivery.',
  },
  {
    role: 'Frontend Developer',
    period: '2021 — 2023',
    detail: 'Built responsive interfaces and interactive dashboards while collaborating closely with product teams.',
  },
]

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setProgress((scrollY / docHeight) * 100)
      }
    }
    
    // Initial call
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

function App() {
  const scrollProgress = useScrollProgress()
  const [activeTech, setActiveTech] = useState(techStack[4])
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayTech, setDisplayTech] = useState(techStack[4])
  const [introState, setIntroState] = useState('intro')
  const activeIndexRef = useRef(techStack.indexOf(techStack[4]))
  const transitionTimeoutRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = introState !== 'home' ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [introState])

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setIntroState('closing')
    }, 3000)

    const swapTimer = setTimeout(() => {
      setIntroState('home')
    }, 3900)

    return () => {
      clearTimeout(closeTimer)
      clearTimeout(swapTimer)
    }
  }, [])

  const indexRef = useRef(4) // starting index, matches techStack[4]
  const [layerA, setLayerA] = useState(techStack[4])
  const [layerB, setLayerB] = useState(techStack[(4 + 1) % techStack.length])
  const [activeLayer, setActiveLayer] = useState('A') // which one is currently visible
  const wordTimeoutRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % techStack.length
      indexRef.current = nextIndex

      // 1. Flip visibility now. The incoming (currently hidden) layer
      //    already holds the correct word from the previous cycle's
      //    preload, so it fades in showing the right text right away.
      setActiveLayer(prev => (prev === 'A' ? 'B' : 'A'))

      // 2. Only AFTER the outgoing layer has fully faded out do we
      //    overwrite its text — with the word after next — so it's
      //    ready to be the next thing that fades in.
      wordTimeoutRef.current = setTimeout(() => {
        const followingWord = techStack[(nextIndex + 1) % techStack.length]
        setActiveLayer(current => {
          if (current === 'B') {
            setLayerA(followingWord) // A is hidden now, safe to update
          } else {
            setLayerB(followingWord) // B is hidden now, safe to update
          }
          return current
        })
      }, CROSSFADE_MS)
    }, 2200)

    return () => {
      clearInterval(interval)
      clearTimeout(wordTimeoutRef.current)
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07111f] text-white">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] z-[100] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Scroll to next section FAB */}
      <button
        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] ${
          (scrollProgress < 2 && introState === 'home') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to next section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 animate-bounce mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
      
      {introState !== 'home' && (
        <div className="absolute inset-0 z-20 transition-opacity duration-700 ease-in-out opacity-100">
          <DiscoSection isClosing={introState === 'closing'} />
        </div>
      )}

      {introState === 'home' && (
        <div className="min-h-screen bg-[#07111f] text-white">
          {/* Original Hero Section */}
          <section className="relative min-h-screen overflow-hidden bg-[#07111f] flex flex-col justify-center xl:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.28),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(94,89,255,0.3),_transparent_35%)]" />
            <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:48px_48px]" />

            <div className="relative z-20 mx-auto w-[92%] max-w-3xl mt-12 py-24 xl:mt-0 xl:absolute xl:left-16 xl:top-[55%] xl:-translate-y-1/2 xl:mx-0 xl:py-0">
              <h2 className="font-bebas text-2xl tracking-[0.25em] text-[#7dd3fc] sm:text-3xl md:text-4xl lg:text-5xl">
                Full Stack Developer
              </h2>

              <h1 className="mt-2 sm:mt-3 font-bebas text-6xl leading-none text-white sm:text-[6rem] md:text-[8rem] lg:text-[9rem]">
                M ASIM KHAN
              </h1>

              <div className="relative mt-2 sm:mt-4 h-10 sm:h-12 md:h-14 lg:h-16">
                <span
                  className={`absolute left-0 top-0 inline-block font-bebas text-2xl text-[#bae6fd] transition-opacity duration-[900ms] ease-out sm:text-3xl md:text-4xl lg:text-5xl ${activeLayer === 'A' ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {layerA}
                  <span className="block mt-2 sm:mt-3 h-1 w-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8]" />
                </span>
                <span
                  className={`absolute left-0 top-0 inline-block font-bebas text-2xl text-[#bae6fd] transition-opacity duration-[900ms] ease-out sm:text-3xl md:text-4xl lg:text-5xl ${activeLayer === 'B' ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  {layerB}
                  <span className="block mt-2 sm:mt-3 h-1 w-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#818cf8]" />
                </span>
              </div>

              <div className="xl:hidden relative mt-12 mb-16 flex justify-end">
                <div className="absolute right-[-20%] top-1/2 h-[120vw] w-[120vw] -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,_rgba(56,189,248,0.9),_rgba(46,11,93,0.95)_58%,_rgba(7,17,31,1)_100%)] shadow-[0_0_120px_rgba(0,0,0,0.32)] sm:right-[-10%] sm:h-[90vw] sm:w-[90vw] lg:h-[70vw] lg:w-[70vw]" />
                <div
                  className="relative z-10 w-[110vw] -mr-[25%] sm:w-[90vw] sm:-mr-[15%] lg:w-[70vw] lg:-mr-[10%]"
                  style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)' }}
                >
                  <picture className="drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                    <source srcSet="/asim.webp" type="image/webp" />
                    <img
                      src="/asim.png"
                      alt="Asim Khan"
                      className="h-auto w-full"
                      fetchPriority="high"
                      decoding="async"
                      width="590"
                      height="720"
                    />
                  </picture>
                </div>
              </div>

              <div className="mt-6 sm:mt-10 flex flex-col items-start gap-6 sm:gap-8">
                <div className="flex flex-wrap items-center gap-4 sm:gap-5 md:gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                      <img src="Mongo.svg" className="w-6 sm:w-8 md:w-10" alt="MongoDB" />
                    </div>
                    <span className="mt-1 sm:mt-2 font-bebas text-lg sm:text-xl md:text-2xl text-white">M</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                      <img src="Express.svg" className="w-6 sm:w-8 md:w-10" alt="Express" />
                    </div>
                    <span className="mt-1 sm:mt-2 font-bebas text-lg sm:text-xl md:text-2xl text-white">E</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                      <img src="React.svg" className="w-6 sm:w-8 md:w-10" alt="React" />
                    </div>
                    <span className="mt-1 sm:mt-2 font-bebas text-lg sm:text-xl md:text-2xl text-white">R</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                      <img src="Node.svg" className="w-6 sm:w-8 md:w-10" alt="Node" />
                    </div>
                    <span className="mt-1 sm:mt-2 font-bebas text-lg sm:text-xl md:text-2xl text-white">N</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-6 sm:pb-8">
                  <a
                    href="/Asim_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/35 text-[#38bdf8] backdrop-blur-md font-bebas text-xl sm:text-2xl tracking-widest transition-colors duration-300 hover:bg-[#38bdf8]/25 hover:border-[#38bdf8] hover:text-white"
                  >
                    <FaFileAlt className="text-lg" />
                    <span className="mt-0.5">RESUME</span>
                  </a>

                  <a
                    href="https://wa.me/923412662732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/35 text-[#25D366] backdrop-blur-md font-bebas text-xl sm:text-2xl tracking-widest transition-colors duration-300 hover:bg-[#25D366]/25 hover:border-[#25D366] hover:text-white"
                  >
                    <FaWhatsapp className="text-xl sm:text-2xl" />
                    <span className="mt-0.5">CONTACT ME</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden xl:block absolute right-0 top-1/2 h-[78vw] w-[78vw] max-h-[950px] max-w-[950px] -translate-y-1/2 translate-x-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_30%_30%,_rgba(56,189,248,0.9),_rgba(46,11,93,0.95)_58%,_rgba(7,17,31,1)_100%)] shadow-[0_0_120px_rgba(0,0,0,0.32)]" />

            <div
              className="hidden xl:block absolute right-[-8%] top-[55%] z-10 w-[120vw] max-w-[590px] -translate-y-1/2"
              style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 95%)' }}
            >
              <picture className="drop-shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                <source srcSet="/asim.webp" type="image/webp" />
                <img
                  src="/asim.png"
                  alt="Asim Khan"
                  className="h-auto w-full"
                  fetchPriority="high"
                  decoding="async"
                  width="590"
                  height="720"
                />
              </picture>
            </div>
          </section>

          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
        </div>
      )}
    </div>
  )
}

export default App
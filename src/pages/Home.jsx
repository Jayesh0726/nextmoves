import React, { useRef, useEffect, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplineScene from '../components/HeroSection.jsx'
import Footer from '../components/Footer.jsx'

const About = lazy(() => import('../components/About.jsx'))
const HWD = lazy(() => import('../components/HWD.jsx'))
const Industries = lazy(() => import('../components/Industries.jsx'))
const CaseStudy = lazy(() => import('../components/CaseStudy.jsx'))
const Roadmaps = lazy(() => import('../components/Roadmaps.jsx'))
const Blog = lazy(() => import('../components/Blog.jsx'))

// Fallback loading component
const LoadingFallback = () => (
  <div className="w-screen min-h-screen bg-black flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
)

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const splineRef = useRef(null)
  const splineSectionRef = useRef(null)
  const aboutRef = useRef(null)

  useEffect(() => {
    const splineEl = splineRef.current
    const splineSectionEl = splineSectionRef.current
    const aboutEl = aboutRef.current

    if (!splineEl || !splineSectionEl || !aboutEl) return

    const distance = aboutEl.offsetTop - splineSectionEl.offsetTop

    const pinTrigger = ScrollTrigger.create({
      trigger: splineSectionEl,
      start: 'top top',
      end: distance,
      pin: splineEl,
      pinSpacing: false,
      markers: false,
    })

    return () => {
      pinTrigger.kill()
    }
  }, [])

  return (
    <div className="relative w-screen overflow-x-hidden">
      <section ref={splineSectionRef} className="relative h-screen w-screen overflow-hidden">
        <div ref={splineRef} className="absolute inset-0 z-0">
          <SplineScene />
        </div>
      </section>

      <section
        ref={aboutRef}
        className="relative z-10 w-screen min-h-screen bg-gradient-to-b from-[#0D0D0D] via-[#070707] to-black flex flex-col items-center justify-center py-20 px-6"
      >
        <About />
      </section>

      <HWD />

      <Industries />
      <CaseStudy />
      <Roadmaps />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
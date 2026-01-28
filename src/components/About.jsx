import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const statsRef = useRef(null)

  useEffect(() => {
    const statsEl = statsRef.current
    if (!statsEl) return

    const counters = statsEl.querySelectorAll('[data-target]')
    counters.forEach((el) => {
      const target = Number(el.dataset.target || 0)
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 1.6,
          ease: 'power1.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsEl,
            start: 'top 90%',
            end: 'bottom 55%',
            scrub: true,
            once: true,            
          },
          onUpdate: function () {
            el.innerText = Math.floor(this.targets()[0].innerText)
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="w-full h-[200vh] md:h-screen  overflow-y-auto">
      {/* Main About Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Left Side */}
          <div>
            <div className="inline-block bg-[#161616] text-white px-4 py-2 rounded text-sm font-bold tracking-wider mb-4">
              ABOUT US
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              From Glitch To Growth / Tech Hiccups? We Fix Them All!
            </h2>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-start">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              At Nexmove, we are here to be your go-to for all things IT! Now innovate, adapt, and defeat all tech challenges with our tailored IT solutions, whether digital services, software development, cybersecurity or cloud computing. Let us handle all the tech stuff while you focus on what you do best – driving and propelling your business forward.
            </p>
            <button className="text-white border-b-2 border-white pb-2 w-fit font-semibold tracking-wider hover:opacity-70 transition-opacity">
              Join Us Today!
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 pt-6 border-t border-white/10">
          <div className="border-l border-white/20 pl-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <span data-target="4">0</span>
            </h3>
            <p className="text-gray-400 text-sm">Years experiences</p>
          </div>
          <div className="border-l border-white/20 pl-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <span data-target="175">0</span>+
            </h3>
            <p className="text-gray-400 text-sm">Project completed</p>
          </div>
          <div className="border-l border-white/20 pl-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <span data-target="148">0</span>
            </h3>
            <p className="text-gray-400 text-sm">Happy customers</p>
          </div>
          <div className="border-l border-white/20 pl-4">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <span data-target="2">0</span>
            </h3>
            <p className="text-gray-400 text-sm">Business Partner</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Bespoke Solutions */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">Bespoke Solutions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Customize your digital strategy with solutions formulated specifically for your business objectives.
            </p>
          </div>

          {/* Tech Invention */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📷</span>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">Tech Invention</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Be at the forefront of digital revolutions with easy access to avant-garde technology and digital trends.
            </p>
          </div>

          {/* Scalability */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔐</span>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">Scalability</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expand your digital infrastructure seamlessly with our scalable solutions that evolve with your ever-growing business needs and requirements.
            </p>
          </div>

          {/* Personalized Support */}
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">Personalized Support</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get dedicated support right through from our highly experienced team of subject matter experts, ensuring your needs are met every step of the way on your digital journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
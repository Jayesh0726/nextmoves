import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Industries() {
	const [expanded, setExpanded] = useState(null)
	const containerRef = useRef(null)
	const cardsRef = useRef([])

	useEffect(() => {
		const cards = cardsRef.current
		if (!cards.length) return

		cards.forEach((card, idx) => {
			gsap.fromTo(
				card,
				{ opacity: 0, y: 30 },
				{
					opacity: 1,
					y: 0,
					duration: 0.6,
					delay: idx * 0.08,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top 85%',
					},
				}
			)
		})

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill())
		}
	}, [])

	const industries = [
		{ id: 1, name: 'Finance & Banking', icon: '🏦' },
		{ id: 2, name: 'Education & Training', icon: '🎓' },
		{ id: 3, name: 'Information Technology & Telecommunications', icon: '📱' },
		{ id: 4, name: 'Energy & Environment', icon: '⚡' },
		{ id: 5, name: 'Healthcare & Pharmaceuticals', icon: '🏥' },
		{ id: 6, name: 'E-commerce & Retail', icon: '🛍️' },
		{ id: 7, name: 'Real Estate', icon: '🏢' },
		{ id: 8, name: 'Entertainment and Media', icon: '🎬' },
		{ id: 9, name: 'Manufacturing & Industry', icon: '🔧' },
	]

	const toggleExpanded = (id) => {
		setExpanded(expanded === id ? null : id)
	}

	return (
		<section className="w-full bg-gradient-to-b from-[#161616] via-[#0a0a0a] to-[#050505] py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-6">
				{/* Heading */}
				<h2 className="text-4xl md:text-5xl font-bold text-white mb-16 leading-tight max-w-3xl">
					Presenting Nexmoves: Customised <br />
					Technology Solutions Redefining <br />
					Industries.
				</h2>

				{/* Industries Grid */}
				<div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{industries.map((industry, idx) => (
						<div
							key={industry.id}
							ref={(el) => (cardsRef.current[idx] = el)}
							className="group bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 hover:border-white/15 rounded-xl px-6 py-5 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-gradient-to-br hover:from-[#252525] hover:to-[#141414]"
							onClick={() => toggleExpanded(industry.id)}
						>
							{/* Left: Icon + Name */}
							<div className="flex items-center gap-4">
								<span className="text-3xl transition-transform duration-300 group-hover:scale-110">{industry.icon}</span>
								<span className="text-base font-semibold text-gray-100 group-hover:text-white transition-colors duration-300">
									{industry.name}
								</span>
							</div>

							{/* Right: Dropdown Arrow */}
							<button
								className={`text-gray-500 group-hover:text-gray-300 transition-all duration-300 flex-shrink-0 ${
									expanded === industry.id ? 'rotate-180' : ''
								}`}
								aria-label="Toggle industry details"
							>
								<svg
									className="w-5 h-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 14l-7 7m0 0l-7-7m7 7V3"
									/>
								</svg>
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Industries

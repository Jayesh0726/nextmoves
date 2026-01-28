import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HWDContainers from './HWDContainers'

gsap.registerPlugin(ScrollTrigger)

function HWD() {
	const sectionRef = useRef(null)
	const scrollContainerRef = useRef(null)

	useEffect(() => {
		const section = sectionRef.current
		const scrollContainer = scrollContainerRef.current
		if (!section || !scrollContainer) return

		const getDistance = () => {
			return Math.max(0, scrollContainer.scrollWidth - window.innerWidth)
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: scrollContainer,
				start: 'top top',
				end: () => `+=${getDistance()}`,
				scrub: 1,
				pin: section,
				anticipatePin: 1,
				markers: false,
				invalidateOnRefresh: true,
			},
		})

		tl.to(scrollContainer, {
			x: () => -getDistance(),
			ease: 'none',
		})

		return () => {
			tl.kill()
		}
	}, [])

	const services = [
		{
			title: 'Web Development Services',
			description: 'We make your online presence hard to ignore with intuitive, user-friendly web designs that convert.',
			icon: '🖥️',
		},
		{
			title: 'Digital Marketing Services',
			description: 'Reach new heights with target-specific digital marketing strategies and measurable growth.',
			icon: '📈',
		},
		{
			title: 'Cloud Computing',
			description: 'Escalate your business to the cloud with secure, scalable solutions delivered seamlessly.',
			icon: '☁️',
		},
		{
			title: 'Application Development Services',
			description: 'Custom applications that streamline operations while amplifying your presence.',
			icon: '🧩',
		},
		{
			title: 'Graphic Designing',
			description: 'Bring your brand story to life with designs that connect with your audience.',
			icon: '🎨',
		},
		{
			title: 'Cybersecurity Solution',
			description: 'Protect your information and stay ahead of threats with proactive cybersecurity.',
			icon: '🔒',
		},
		{
			title: 'Software Development',
			description: 'Bridge the gap between vision and reality with powerful software solutions.',
			icon: '📱',
		},
		{
			title: 'Content Writing',
			description: 'Engaging content that educates, converts, and grows your reach.',
			icon: '✍️',
		},
		{
			title: 'Public Relation (PR)',
			description: 'Shape your narrative, build trust, and drive growth with strategic PR.',
			icon: '🗣️',
		},
		{
			title: 'E-Commerce Solution Services',
			description: 'Streamlined e-commerce solutions to boost online sales—sell smarter, not harder.',
			icon: '🛒',
		},
	]

	return (
		<section ref={sectionRef} className="relative sm:mt-9 md:mt-0 w-full h-[calc(100vh+12rem)] bg-linear-to-b from-black via-[#070707] to-[#161616] overflow-hidden">
			<div className="absolute top-16 left-0 right-0 flex flex-col items-start text-start gap-6 md:px-64 px-8 z-10">
				<div className="inline-flex items-center px-6 py-3 cursor-pointer bg-[#161616] text-slate-100 text-xs font-semibold rounded-full tracking-wider uppercase">
					How We Do
				</div>
				<h2 className="text-3xl md:text-5xl font-bold text-gray-100">Nexmove&apos;s Suite Of Solutions</h2>
			</div>

			<div ref={scrollContainerRef} className="absolute top-48 left-0 h-screen flex items-center  gap-8 px-36 md:px-64">
				<HWDContainers items={services} />
			</div>
		</section>
	)
}

export default HWD

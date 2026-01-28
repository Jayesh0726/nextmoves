import React from 'react'
import { GlowingEffect } from './ui/glowing-effect'

// Renders a responsive grid of service cards for the How We Do section.
// Expects an array of items: { title, description, icon }
function HWDContainers({ items = [] }) {
	return (
		<div className="flex gap-y-8 gap-x-32 md:gap-x-48">
			{items.map((item, idx) => (
				<div
					key={item.title + idx}
					className="md:w-[35rem] w-[20rem] h-[24rem] md:h-[37rem] bg-transparent rounded-md cursor-pointer shadow-sm border-4 border-white/10 px-10 py-14 flex flex-col items-start justify-around text-left relative"
				>
					<GlowingEffect
						blur={10}
						spread={100}
						glow={true}
						variant="default"
						disabled={false}
						borderWidth={2}
						className="rounded-md"
					/>
					<div className="mb-8 md:text-5xl text-3xl text-slate-100 relative z-10" aria-hidden>
						{item.icon}
					</div>
					<h3 className="font-semibold text-slate-100 uppercase md:text-6xl text-2xl mb-6 leading-6 md:leading-14 relative z-10">{item.title}</h3>
					<p className="text-slate-50/50 text-md leading-tight relative z-10">{item.description}</p>
				</div>
			))}
		</div>
	)

}

export default HWDContainers

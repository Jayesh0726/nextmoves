import { CardSpotlight } from './ui/card-spotlight';

export default function Roadmaps() {
  const roadmapItems = [
    {
      phase: "01",
      title: "Requirement Gathering",
      description: "We listen, analyse, and shape your requirements into an actionable roadmap for success and glory.",
      icon: "📋"
    },
    {
      phase: "02",
      title: "UI/UX Design",
      description: "We craft seamless user experiences and visually intuitive interfaces that delight your users and customers alike.",
      icon: "🎨"
    },
    {
      phase: "03",
      title: "Prototype",
      description: "We transform concepts into tangible prototypes through early feedback and iteration to refine your vision.",
      icon: "🖼️"
    },
    {
      phase: "04",
      title: "Development",
      description: "Our team of expert developers turns ideas into reality with expert coding and development tailored to your unique and specific needs.",
      icon: "⚙️"
    },
    {
      phase: "05",
      title: "Quality Assurance",
      description: "We believe in flawless execution through strict testing and quality assurance protocols for seamless functionality and superior performance.",
      icon: "✓"
    },
    {
      phase: "06",
      title: "Deployment",
      description: "We ensure minimal disruption and maximum impact for smooth and uninterrupted implementation of your solution.",
      icon: "🚀"
    },
    {
      phase: "07",
      title: "Support & Maintenance",
      description: "Get ongoing support and maintenance to keep your project thriving along with continuous improvements and updates.",
      icon: "🛠️"
    }
  ];

  return (
    <div className="w-full bg-[#050505] md:px-[3vw] py-10 md:py-32">
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center mb-20">
        <h1 className="font-neum md:leading-24 leading-8  text-[8vw] md:text-[6vw] text-center mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">
          Our Transformative Roadmaps
        </h1>
        <p className="font-neur text-white text-center w-full md:w-1/2 text-sm md:text-base">
          We follow a strategic approach to transform your vision into reality, ensuring excellence at every stage of the journey.
        </p>
      </div>

      {/* Roadmap Timeline */}
      <div className="w-full mx-auto">
        {/* Mobile View */}
        <div className="md:hidden flex flex-col gap-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl border-2 border-white/50 bg-[#161616] transition-all duration-300">
                  {item.icon}
                </div>
                {index < roadmapItems.length - 1 && (
                  <div className="w-1 h-16 mt-2 bg-white/30 transition-all duration-300" />
                )}
              </div>
              <div className="flex-1 pt-2">
                <p className="text-white/60 text-xs tracking-wider mb-2">{item.phase}</p>
                <h3 className="font-neum text-xl text-white mb-3">{item.title}</h3>
                <p className="font-neur text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View - Timeline */}
        <div className="hidden md:flex justify-between gap-4 relative">
          {/* Connecting Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          {roadmapItems.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center px-2">
              {/* Circle Node */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl border-2 border-white/50 bg-[#161616] relative z-10 mb-8 transition-all duration-300">
                {item.icon}
              </div>
              {/* Content Card */}
              <CardSpotlight
                radius={150}
                color="rgba(148, 163, 184, 0.3)"
                className="w-full h-80 px-4 py-6 rounded-lg text-center border-white/20 bg-black"
              >
                <p className="text-white/60 text-xs tracking-widest mb-2 uppercase">{item.phase}</p>
                <h3 className="font-neum text-lg text-white mb-3">{item.title}</h3>
                <p className="font-neur text-white/70 text-sm leading-relaxed">{item.description}</p>
              </CardSpotlight>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

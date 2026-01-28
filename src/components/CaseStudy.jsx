import { useEffect, useRef } from 'react';

export default function CaseStudy() {
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      imageRefs.current.forEach((img) => {
        if (img) {
          const container = img.parentElement;
          if (container) {
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            if (rect.top < windowHeight && rect.bottom > 0) {
              const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
              const moveAmount = scrollProgress * 200 - 100;
              img.style.transform = `translateY(${moveAmount}px)`;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const caseStudies = [
    {
      title: "Wellness Forever",
      description: "We transformed Wellness Forever's vision into a comprehensive health and fitness ecosystem. From identity design to digital platform development, we created an integrated wellness experience that connects clients with personalized fitness programs, nutrition guidance, and holistic lifestyle support to help them achieve lasting health goals.",
      image: "/wellness.webp",
      textLeft: true
    },
    {
      title: "Kirasa Nightwear",
      description: "Kirasa Nightwear needed a luxury sleepwear brand that stood out in a competitive market. We crafted an elegant brand identity, designed sophisticated packaging, and built an e-commerce platform that captures the essence of comfort and sophistication, positioning them as the premium choice for quality nightwear.",
      image: "/pkirasa.webp",
      textLeft: false
    },
    {
      title: "Eversource Technology",
      description: "Eversource Technology required a modern digital presence to showcase their innovative tech solutions. We developed a cutting-edge website, created compelling visual narratives, and designed interactive product demonstrations that effectively communicate their technological expertise and drive enterprise client engagement.",
      image: "/pever.webp",
      textLeft: true
    },
    {
      title: "ByHeart PathLabs",
      description: "ByHeart PathLabs needed to establish trust and credibility in the healthcare sector. We designed a professional brand identity, created patient-friendly informational materials, and built a secure digital platform that simplifies lab services while maintaining the highest standards of healthcare communication and compliance.",
      image: "/pbyheart.webp",
      textLeft: false
    }
  ];

  return (
    <div className="w-full bg-[#050505]">
      <div className="w-full md:px-[3vw] md:py-32 py-10 flex flex-col items-center justify-center">
        <h1 className=" text-[8vw] md:text-[6vw] bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase text-center">
          Our Case Study
        </h1>
      </div>
        
      {caseStudies.map((study, index) => (
        <div key={index} className="w-full h-[120vh] md:px-[3vw] md:py-32 py-2 bg-offwhite">
          <div className="w-full h-full bg-transparent flex flex-col md:flex-row items-center justify-between relative">
            {study.textLeft ? (
              <>
                {/* Text Section - Left */}
                <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col items-center justify-center gap-10">
                  <div className="w-2/3 md:w-[40%] flex flex-col leading-8 md:leading-[5rem]">
                    <p className="font-neum text-[5vw] md:text-[4vw] text-white">
                      {study.title}
                    </p>
                    
                  </div>
                  <div className="font-neur text-white w-2/3 md:w-[40%]">
                    {study.description}
                  </div>
                  <button className="mt-6 px-8 py-3 border border-white/50 rounded-full text-white text-sm tracking-wider hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
                
                {/* Image Section - Right */}
                <div className="h-1/2 md:h-full w-[85%] md:w-1/2 relative overflow-hidden">
                  <img
                    ref={(el) => (imageRefs.current[index * 2] = el)}
                    className="h-[130vh] w-full absolute top-0 left-0 object-cover will-change-transform"
                    src={study.image}
                    alt={study.title}
                  />
                </div>
              </>
            ) : (
              <>
                {/* Image Section - Left */}
                <div className="h-1/2 md:h-full w-[85%] md:w-1/2 relative overflow-hidden">
                  <img
                    ref={(el) => (imageRefs.current[index * 2 + 1] = el)}
                    className="h-[130vh] w-full absolute top-0 left-0 md:object-cover object-cover will-change-transform"
                    src={study.image}
                    alt={study.title}
                  />
                </div>
                
                {/* Text Section - Right */}
                <div className="h-1/2 md:h-full w-full md:w-1/2 flex flex-col items-center justify-center gap-10">
                  <div className="w-2/3 md:w-[40%] flex flex-col leading-8 md:leading-[5rem]">
                    <p className="font-neum text-[5vw] md:text-[4vw] text-white">
                      {study.title}
                    </p>
                    
                  </div>
                  <div className="font-neur text-white w-2/3 md:w-[40%]">
                    {study.description}
                  </div>
                  <button className="mt-6 px-8 py-3 border border-white/50 rounded-full text-white text-sm tracking-wider hover:bg-white/10 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SpotLight from './SpotLight.jsx';
gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: index * 0.25,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 70%',
            scrub: 1,
            markers: false
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "The Future Of Cybersecurity: Trends And Technologies Every Business Should Know",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Technology",
      date: "Jan 15, 2026"
    },
    {
      id: 2,
      title: "The Future Of Artificial Intelligence (AI) In IT Business: Trends And Predictions",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
      category: "AI & Innovation",
      date: "Jan 20, 2026"
    },
    {
      id: 3,
      title: "From Idea To Market: A Comprehensive Guide To Software Development Lifecycle For IT Services",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Development",
      date: "Jan 25, 2026"
    }
  ];

  return (
    <div className="w-full relative bg-gradient-to-b from-[#050505] to-[#000000] px-[3vw] py-32">
      
      <SpotLight bgcolor={"bg-gray-100"} height={"h-36"} width={"w-36"} blur={"blur-[150px]"} left={"left-[1%]"} top={"top-[13%]"} translateX={"translate-x-[0%]"} translateY={"translate-y-[0%]"}/>
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center mb-20">
        <h1 className="font-neum text-[8vw] md:text-[6vw] text-center mb-6  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 uppercase">
          Blog
        </h1>
        <p className="font-neur text-white/70 text-center w-full md:w-1/2 text-sm md:text-base">
          Get inspiration and insights into what's new in the digital world and stay ahead of the crowd.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Image */}
            <div className="w-full h-56 bg-white/10 overflow-hidden relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-white text-xs tracking-wider">{post.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-white/50 text-xs tracking-wider mb-3">{post.date}</p>
              <h3 className="font-neum text-white text-lg leading-tight mb-4 group-hover:text-white/80 transition-colors">
                {post.title}
              </h3>
              <button className="text-white/70 text-sm tracking-wider hover:text-white transition-colors flex items-center gap-2">
                Read More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="w-full flex justify-center">
        <button className="px-8 py-3 border border-white/50 rounded-full text-white text-sm tracking-wider hover:bg-white/10 transition-all duration-300">
          View More
        </button>
      </div>
    </div>
  );
}

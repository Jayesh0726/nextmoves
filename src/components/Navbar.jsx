import { useEffect, useState, useRef } from 'react';
import { NoiseBackground } from './ui/noise-background.jsx';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [blur, setBlur] = useState(0);
  const rafIdRef = useRef(null);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      lastScrollY = window.scrollY;
    };

    // Use requestAnimationFrame to throttle scroll updates
    const updateBlur = () => {
      setBlur(Math.min(lastScrollY / 100, 1));
      rafIdRef.current = requestAnimationFrame(updateBlur);
    };

    // Start the animation loop
    rafIdRef.current = requestAnimationFrame(updateBlur);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 transition-all duration-300 
        ${blur > 0 ? 'bg-black/10 backdrop-blur-md' : 'bg-transparent border-b border-transparent'}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-xl md:text-2xl font-thin tracking-[0.3em]">
          NEXMOVE
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors">
            HOME
          </a>
          <a href="#services" className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors">
            SERVICES
          </a>
          <a href="#about" className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors">
            ABOUT
          </a>
          <a href="#portfolio" className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors">
            PORTFOLIO
          </a>
          <a href="#contact" className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors">
            CONTACT
          </a>
        </div>

        {/* CTA Button */}
        <NoiseBackground
          gradientColors={[ "rgb(255, 100, 150)",
          "rgb(100, 150, 255)",
          "rgb(255, 200, 100)",]}
          noiseIntensity={0.15}
          speed={0.05}
          containerClassName="hidden md:block p-0.5"
        >
          <button className="px-6 py-2 cursor-pointer bg-[#161616] rounded-xl text-white text-sm tracking-wider transition-all duration-300 hover:bg-[#1f1f1f]">
            GET STARTED
          </button>
        </NoiseBackground>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 py-6 transition-all duration-300 ${
          (blur > 0) ? 'bg-black/30 backdrop-blur-md' : 'bg-transparent'
        }`}>
          <div className="flex flex-col items-center gap-6">
            <a
              href="#home"
              className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </a>
            <a
              href="#services"
              className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              SERVICES
            </a>
            <a
              href="#about"
              className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#portfolio"
              className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              PORTFOLIO
            </a>
            <a
              href="#contact"
              className="text-white text-sm tracking-wider hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
            <NoiseBackground
              gradientColors={["rgb(255, 255, 255)", "rgb(148, 163, 184)", "rgb(255, 255, 255)"]}
              noiseIntensity={0.15}
              speed={0.05}
              containerClassName="w-42 py-2 px-0 flex justify-center"
            >
              <button className="px-6 py-2 cursor-pointer bg-[#161616] rounded-xl text-white text-sm tracking-wider transition-all duration-300 hover:bg-[#1f1f1f]">
                GET STARTED
              </button>
            </NoiseBackground>
          </div>
        </div>
      )}
    </nav>
  );
}

import { useState, useEffect, memo } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = memo(function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ) || window.innerWidth < 768
      );
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      className="w-screen h-screen overflow-x-hidden relative bg-black"
      style={{ willChange: 'transform' }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: isMobile ? 'none' : 'auto',
        }}
      >
        <Spline 
          scene="/scene.splinecode"
        />
      </div>
    </div>
  );
});


export default HeroSection;


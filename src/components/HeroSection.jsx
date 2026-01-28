import { useState, useEffect, memo } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = memo(function HeroSection() {
  const [sceneUrl, setSceneUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setSceneUrl(`https://prod.spline.design/Z6pKUxTWimjVS57c/scene.splinecode`);
    
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
      className="w-screen h-screen overflow-x-hidden relative"
      style={{ willChange: 'transform' }}
    >
      {sceneUrl && (
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // Disable pointer events on mobile to allow scrolling
            pointerEvents: isMobile ? 'none' : 'auto',
          }}
        >
          <Spline scene={sceneUrl} />
        </div>
      )}
    </div>
  );
});

export default HeroSection;


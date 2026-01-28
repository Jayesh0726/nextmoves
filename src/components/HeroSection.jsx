import { useState, useEffect, memo } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = memo(function HeroSection() {
  const [sceneUrl, setSceneUrl] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use cached scene URL to avoid repeated API calls
    const SPLINE_SCENE_URL = 'https://prod.spline.design/Z6pKUxTWimjVS57c/scene.splinecode';
    
    // Check if URL is cached in sessionStorage
    const cachedUrl = sessionStorage.getItem('splineSceneUrl');
    if (cachedUrl) {
      setSceneUrl(cachedUrl);
    } else {
      setSceneUrl(SPLINE_SCENE_URL);
      sessionStorage.setItem('splineSceneUrl', SPLINE_SCENE_URL);
    }
    
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
          <Spline 
            scene={sceneUrl}
            onLoad={() => setIsLoading(false)}
          />
        </div>
      )}
    </div>
  );
});

export default HeroSection;


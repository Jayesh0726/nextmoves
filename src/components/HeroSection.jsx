import { useState, useEffect, memo } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = memo(function HeroSection() {
  const [sceneUrl, setSceneUrl] = useState('');

  useEffect(() => {
    setSceneUrl(`https://prod.spline.design/Z6pKUxTWimjVS57c/scene.splinecode`);
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden" style={{ willChange: 'transform' }}>
      {sceneUrl && <Spline scene={sceneUrl} />}
    </div>
  );
});

export default HeroSection;


import { useEffect, useRef } from 'react';
import './styles.css';

function Animation() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0.8;
      audio.play().catch((e) => {
        console.warn('Autoplay failed:', e);
      });
    }
  }, []);

  return (
    <div className="loading-animation">
      <img
        src="/loading.gif"
        alt="Loading animation"
        style={{
            width: '60%',
            height: '60%',
            margin: '0 auto',
            display: 'block',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat'
          }}
      />
      <audio ref={audioRef} src="/brick_placing.mp3" preload="auto" />
    </div>
  );
}

export default Animation;
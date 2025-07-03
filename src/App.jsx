import { useState, useEffect } from 'react';
import LandingScreen from './LandingScreen';
import Footer from './Footer.jsx';
import SearchByBoth from './SearchByBoth.jsx';
import Animation from './Animation.jsx';
import './styles.css';

function App() {
  const [landingVisible, setLandingVisible] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [mainAppVisible, setMainAppVisible] = useState(false);

  const handleStart = () => {
    setLandingVisible(false);
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
      setMainAppVisible(true);
    }, 4200);
  };

  return (
    <>
      {landingVisible && <LandingScreen onStart={handleStart} />}
      {showAnimation && <Animation />}
      {mainAppVisible && (
        <>
          <SearchByBoth />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

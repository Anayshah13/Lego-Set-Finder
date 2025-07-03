import { useState } from 'react';
import LandingScreen from './LandingScreen';
import Footer from './Footer.jsx';
import SearchByBoth from './SearchByBoth.jsx';
import './styles.css';

function App() {
  const [landingVisible, setLandingVisible] = useState(true);

  return (
    <>
      {landingVisible ? (
        <LandingScreen onStart={() => setLandingVisible(false)} />
      ) : (
        <SearchByBoth />
      )}
      <Footer/>
    </>
  );
}

export default App;


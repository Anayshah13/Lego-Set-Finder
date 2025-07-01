import { useState } from 'react';
import LandingScreen from './LandingScreen';
import SearchByNumber from './SearchByNumber'; 
import Footer from './Footer.jsx';
import SearchByName from './SearchByName.jsx'; 
import './styles.css';

function App() {
  const [landingVisible, setLandingVisible] = useState(true);

  return (
    <>
      {landingVisible ? (
        <LandingScreen onStart={() => setLandingVisible(false)} />
      ) : (
        <SearchByNumber /> 
      )}
      <SearchByName/>
      <Footer/>
    </>
  );
}

export default App;


import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './styles.css';
import Footer from './Footer.jsx'

function SearchByNumber() {
  const [landingVisible, setLandingVisible] = useState(true);
  const [setNumber, setSetNumber] = useState('');
  const [setData, setSetData] = useState({
    img_url: '',
    name: '',
    num_parts: '',
    year: ''
  });
  const [sets, setSets] = useState([]);

  useEffect(() => {
    Papa.parse('/sets.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setSets(results.data);
      },
      error: (error) => {
        console.error('Error loading sets:', error);
      }
    });
  }, []);

  useEffect(() => {
    const trimmed = setNumber.trim();

    if (trimmed === '') {
      setSetData({
        img_url: '',
        name: '',
        num_parts: '',
        year: ''
      });
      return;
    }

    const formattedSetNum = trimmed.includes('-') ? trimmed : `${trimmed}-1`;

    const match = sets.find((s) => s.set_num === formattedSetNum);

    if (match) {
      setSetData({
        img_url: match.img_url,
        name: match.name,
        num_parts: match.num_parts,
        year: match.year,
      });
    } else {
      setSetData({
        img_url: '',
        name: 'Set Not Found',
        num_parts: '',
        year: '',
      });
    }
  }, [setNumber, sets]);

  return (
  <>
    {landingVisible && (
      <div 
	  	className={`landing-screen ${!landingVisible ? 'slide-out' : ''}`} 
	  	onClick={() => setLandingVisible(false)}
	>
    <h1>Welcome to LEGO Finder</h1>
        <button className="start-button">Click To Start!</button>
      </div>
    )}

    <div className="app-container">
      <div className="input-panel">
        <div className="lego-img">
          <img
            src="/Lego_logo.jpg"
            alt="LEGO Logo"
            className="lego-logo"
          />
        </div>

        <input
          type="text"
          placeholder="Enter LEGO Set Number"
          value={setNumber}
          onChange={(e) => setSetNumber(e.target.value)}
          className="set-input"
          />
          <h5>
            *enter any existing set number,eg: 42158 ,001 to find its details
          </h5>
      </div>

      <div className="divider" />

      <div className="display-panel">
        <div className="set-name">{setData.name || 'SET NAME'}</div>
        <div className="image-box">
          <img
            src={setData.img_url || '/greeen.jpg'}
            alt={setData.name || 'LEGO Placeholder'}
            className="set-image"
          />
        </div>
        <div className="set-details">
          {setData.num_parts ? `${setData.num_parts} parts` : 'PIECE COUNT'}
        </div>
        <div className="set-details">
          {setData.year ? `Released: ${setData.year}` : 'RELEASE YEAR'}
        </div>
      </div>
    </div>
  <Footer/>
  </>
);
}

export default SearchByNumber;

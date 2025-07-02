import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import SetInputPanel from './SetInputPanel.jsx';
import SetDisplayPanel from './SetDisplayPanel.jsx';
import './styles.css';
import Title from './title.jsx'

function SearchByNumber() {
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
      setSetData({ img_url: '', name: '', num_parts: '', year: '' });
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
      <Title text="SET NUMBER => SET DETAILS" />
      <div className="app-container">
        <SetInputPanel setNumber={setNumber} onChange={setSetNumber} />
        <div className="divider" />
        <SetDisplayPanel setData={setData} />
      </div>

    </>
  );
}

export default SearchByNumber;

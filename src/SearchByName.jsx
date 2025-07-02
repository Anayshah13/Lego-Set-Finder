import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import SetInputPanel2 from './SetInputPanel2';
import SetDisplayPanel2 from './SetDisplayPanel2';
import './styles.css';

function SearchByName() {
  const [sets, setSets] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [setData, setSetData] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    Papa.parse('/sets.csv', {
      download: true,
      header: true,
      complete: (results) => setSets(results.data),
      error: (err) => console.error('Failed to load sets:', err)
    });
  }, []);

  useEffect(() => {
    const trimmed = nameInput.trim().toLowerCase();
    if (!trimmed) {
      setSuggestions([]);
      setSetData({});
      return;
    }

    const matches = sets
      .filter(s => s.name?.toLowerCase().includes(trimmed))

    setSuggestions(matches);
  }, [nameInput, sets]);

  const handleSuggestionClick = (set) => {
    setNameInput(set.name);
    setSetData(set);
    setSuggestions([]);
  };

  return (
    <>
      <div className="app-container">
        <SetInputPanel2
          nameInput={nameInput}
          onChange={setNameInput}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
        <div className="divider" />
        <SetDisplayPanel2 setData={setData} />
      </div>
    </>
  );
}

export default SearchByName;

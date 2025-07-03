import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import SetInputPanel2 from './SetInputPanel2.jsx';
import SetDisplayPanel2 from './SetDisplayPanel2.jsx';
import './styles.css';

function SearchByBoth() {
  const [sets, setSets] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [setData, setSetData] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [searchMode, setSearchMode] = useState('name'); // <--- lifted here

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

    let matches = [];

    if (searchMode === 'name') {
      matches = sets.filter((s) =>
        s.name?.toLowerCase().includes(trimmed)
      );
    } else if (searchMode === 'number') {
        const formattedSetNum = trimmed.includes('-') ? trimmed : `${trimmed}-1`;
        const exactMatch = sets.find((s) => s.set_num === formattedSetNum);
        if (exactMatch) {
          setSetData(exactMatch);
        } else {
          setSetData({ name: 'Set Not Found', img_url: '', num_parts: '', year: '' });
        }

        setSuggestions([]);
        return;
}


    setSuggestions(matches);
    if (searchMode === 'number' && matches.length === 1) {
      setSetData(matches[0]);
    }
  }, [nameInput, sets, searchMode]);

  const handleSuggestionClick = (set) => {
    setNameInput(set.name);
    setSetData(set);
    setSuggestions([]);
  };

  return (
    <div className="app-container">
      <SetInputPanel2
        nameInput={nameInput}
        onChange={setNameInput}
        suggestions={searchMode === 'name' ? suggestions : []}
        onSuggestionClick={handleSuggestionClick}
        searchMode={searchMode}
        setSearchMode={setSearchMode}
      />
      <div className="divider" />
      <SetDisplayPanel2 setData={setData} searchMode={searchMode}/>
    </div>
  );
}

export default SearchByBoth;
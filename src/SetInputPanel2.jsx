function SetInputPanel2({nameInput,onChange,suggestions,onSuggestionClick,searchMode,setSearchMode}) {
  const handleModeChange = (mode) => {
    setSearchMode(mode);
    onChange('');
  };

  return (
    <div className="input-panel">
      <div className="lego-img">
        <img src="/Lego_logo.jpg" alt="LEGO Logo" className="lego-logo" />
      </div>

      <div className="option-button-dad">
        <button
          className={`option-button ${searchMode === 'number' ? 'active' : ''}`}
          onClick={() => handleModeChange('number')}
        >
          Find by number
        </button>
        <button
          className={`option-button ${searchMode === 'name' ? 'active' : ''}`}
          onClick={() => handleModeChange('name')}
        >
          Find by name
        </button>
      </div>

      <input
        type="text"
        placeholder={
          searchMode === 'name' ? 'Enter set name' : 'Enter set number'
        }
        value={nameInput}
        onChange={(e) => onChange(e.target.value)}
        className="set-input"
        autoComplete="off"
      />

      {searchMode === 'name' && suggestions.length > 0 && (
        <ul className="suggestion-box">
          {suggestions.map((s, i) => (
            <li key={i} onClick={() => onSuggestionClick(s)}>
              {s.name}
            </li>
          ))}
        </ul>
      )}

      <h5>
        *Start typing a LEGO set{' '}
        {searchMode === 'name'
          ? 'name like "Ferrari", "Ninjago", or "Technic"'
          : 'number like 42154'}
      </h5>
    </div>
  );
}

export default SetInputPanel2;
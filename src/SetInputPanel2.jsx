function SetInputPanel2({ nameInput, onChange, suggestions, onSuggestionClick }) {
  return (
    <div className="input-panel">
      <div className="lego-img">
        <img src="/Lego_logo.jpg" alt="LEGO Logo" className="lego-logo" />
      </div>

      <input
        type="text"
        placeholder="Enter LEGO Set Name"
        value={nameInput}
        onChange={(e) => onChange(e.target.value)}
        className="set-input"
        autoComplete="off"
      />

      {suggestions.length > 0 && (
        <ul className="suggestion-box">
          {suggestions.map((s, i) => (
            <li key={i} onClick={() => onSuggestionClick(s)}>
              {s.name}
            </li>
          ))}
        </ul>
      )}

      <h5>*Start typing a LEGO set name, like "Ferrari", "Ninjago", or "Technic"</h5>
    </div>
  );
}

export default SetInputPanel2;

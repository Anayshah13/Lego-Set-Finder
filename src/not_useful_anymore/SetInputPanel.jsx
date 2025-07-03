function SetInputPanel({ setNumber, onChange }) {
  return (
    <div className="input-panel">
      <div className="lego-img">
        <img src="/Lego_logo.jpg" alt="LEGO Logo" className="lego-logo" />
      </div>

      <input
        type="text"
        placeholder="Enter LEGO Set Number"
        value={setNumber}
        onChange={(e) => onChange(e.target.value)}
        className="set-input"
      />
      <h5>*enter any existing set number, eg: 42158, 001 to find its details</h5>
    </div>
  );
}

export default SetInputPanel;

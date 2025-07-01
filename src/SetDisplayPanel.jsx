function SetDisplayPanel({ setData }) {
  return (
    <div className="display-panel1">
      <div className="set-name">{setData.name || 'SET NAME'}</div>

      <div className="image-box">
        <img
          src={setData.img_url || '/green_bg.jpg'}
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
  );
}

export default SetDisplayPanel;

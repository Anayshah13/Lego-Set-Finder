function SetDisplayPanel2({ setData ,searchMode }) {
  return (
    <div className="display-panel">
      <div className="set-name">
        {searchMode === 'name' ? setData.set_num : setData.name}
      </div>
      
      <div className="image-box">
        <img
          src={setData?.img_url || '/greeen.jpg'}
          alt={setData?.name || 'LEGO Placeholder'}
          className="set-image"
        />
      </div>

      <div className="set-details">
        {setData?.num_parts ? `${setData.num_parts} parts` : 'PIECE COUNT'}
      </div>

      <div className="set-details">
        {setData?.year ? `Released: ${setData.year}` : 'RELEASE YEAR'}
      </div>
    </div>
  );
}

export default SetDisplayPanel2;

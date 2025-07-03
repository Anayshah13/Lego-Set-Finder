
function Animation() {
  return (
    <div className="page">
      <div className="c">
        <img
          src="/loading.gif"
          alt="Loading animation"
          style={{
            width: '60%',
            height: '60%',
            margin: '0 auto',
            display: 'block',
            backgroundSize: 'cover',
            backgroundRepeat: 'noRepeat'
          }}
        />
      </div>
    </div>
  );
}

export default Animation;
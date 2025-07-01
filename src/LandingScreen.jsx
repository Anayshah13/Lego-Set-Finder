
function LandingScreen({ onStart }) {
  return (
    <div className="landing-screen">
      <h1>Welcome to LEGO Finder</h1>
      <button className="start-button" onClick={onStart}>Click To Start!</button>
    </div>
  );
}

export default LandingScreen;


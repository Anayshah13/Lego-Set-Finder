function LandingScreen({ onClick }) {
  return (
    <div className="landing-screen">
      <h1>Welcome to LEGO Finder</h1>
      <button className="start-button" onClick={onClick}>Click To Start!</button>
    </div>
  );
}

export default LandingScreen;

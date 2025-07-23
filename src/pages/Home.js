import '../styles/Page.css';

function Home() {
  return (
    <div className="page home">
      <h2 className="home-title">Welcome to the Packers Fan Hub!</h2>
      <p className="home-subtitle">Follow the latest Packers news, games, and player stats.</p>

      {/* Countdown section saved for later use */}
      {/*
      <div className="countdown-container">
        <h3 className="countdown-title">Countdown Till Next Game:</h3>
        <div className="countdown">
          <div className="time-box">
            <span className="time">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="time">{timeLeft.seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}

export default Home;
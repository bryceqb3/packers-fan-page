import { useEffect, useState } from 'react';
import '../styles/Page.css';

function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const nextGameDate = new Date('2025-09-07T13:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = nextGameDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days: String(days).padStart(2, '0'),
          hours: String(hours).padStart(2, '0'),
          minutes: String(minutes).padStart(2, '0'),
          seconds: String(seconds).padStart(2, '0')
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextGameDate]);

  return (
    <div className="page home">
      <h2 className="home-title">Welcome to the Packers Fan Hub!</h2>
      <p className="home-subtitle">Follow the latest Packers news, games, and player stats.</p>

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
    </div>
  );
}

export default Home;
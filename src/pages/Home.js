import { useEffect, useState } from 'react';
import '../styles/Page.css';

function Home() {
  const [timeLeft, setTimeLeft] = useState({});
  
  // Set the next game date here
  const nextGameDate = new Date('2025-09-07T13:00:00'); 

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = nextGameDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [nextGameDate]);

  return (
    <div className="page">
      <h2>Welcome to the Packers Fan Hub!</h2>
      <p>Follow the latest Packers news, games, and player stats.</p>
      
      <div className="countdown-container">
        <h3>Countdown Till Next Game:</h3>
        <div className="countdown">
          <span>{timeLeft.days}d</span> :
          <span>{timeLeft.hours}h</span> :
          <span>{timeLeft.minutes}m</span> :
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
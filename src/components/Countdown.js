import { useEffect, useState } from 'react';
import axios from 'axios';

function Countdown() {
  const [nextGameDate, setNextGameDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const fetchNextGame = async () => {
      try {
        const response = await axios.get(
          'https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133602'
        );
        const gameDate = new Date(response.data.events[0].dateEvent + 'T' + response.data.events[0].strTime);
        setNextGameDate(gameDate);
      } catch (error) {
        console.error('Error fetching game:', error);
      }
    };

    fetchNextGame();
  }, []);

  useEffect(() => {
    if (!nextGameDate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diff = nextGameDate - now;

      if (diff <= 0) {
        setTimeLeft('Game has started!');
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextGameDate]);

  return (
    <div className="countdown">
      <h2>Next Packers Game Countdown</h2>
      {timeLeft ? <p>{timeLeft}</p> : <p>Loading...</p>}
    </div>
  );
}

export default Countdown;
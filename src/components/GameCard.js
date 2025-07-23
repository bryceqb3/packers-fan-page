import React from 'react';
import '../styles/GameCard.css';

function GameCard({ week, opponent, date, logo }) {
  return (
    <div className="game-card">
      <h3>Week {week}</h3>
      <img src={logo} alt={`${opponent} logo`} className="team-logo" />
      <p>{opponent}</p>
      <p>{date}</p>
    </div>
  );
}

export default GameCard;
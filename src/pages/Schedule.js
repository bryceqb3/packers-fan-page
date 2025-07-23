import '../styles/Page.css';
import GameCard from '../components/GameCard';

const scheduleData = [
  { week: 1, opponent: 'Lions', date: 'Sept 7', logo: '/logos/lions.png' },
  { week: 2, opponent: 'Commanders', date: 'Sept 11', logo: '/logos/commanders.png' },
  { week: 3, opponent: 'Browns', date: 'Sept 21', logo: '/logos/browns.png' },
  { week: 4, opponent: 'Cowboys', date: 'Sept 28', logo: '/logos/cowboys.png' },
  { week: 5, opponent: 'Bye', date: 'Oct 5', logo: '/logos/bye.png' },
  { week: 6, opponent: 'Bengals', date: 'Oct 12', logo: '/logos/bengals.png' },
  { week: 7, opponent: 'Cardinals', date: 'Oct 19', logo: '/logos/cardinals.png' },
  { week: 8, opponent: 'Steelers', date: 'Oct 26', logo: '/logos/steelers.png' },
  { week: 9, opponent: 'Panthers', date: 'Nov 2', logo: '/logos/panthers.png' },
  { week: 10, opponent: 'Eagles', date: 'Nov 10', logo: '/logos/eagles.png' },
  { week: 11, opponent: 'Giants', date: 'Nov 16', logo: '/logos/giants.png' },
  { week: 12, opponent: 'Vikings', date: 'Nov 23', logo: '/logos/vikings.png' },
  { week: 13, opponent: 'Lions', date: 'Nov 27', logo: '/logos/lions.png' },
  { week: 14, opponent: 'Bears', date: 'Dec 7', logo: '/logos/bears.png' },
  { week: 15, opponent: 'Broncos', date: 'Dec 14', logo: '/logos/broncos.png' },
  { week: 16, opponent: 'Bears', date: 'Dec 20', logo: '/logos/bears.png' },
  { week: 17, opponent: 'Ravens', date: 'Dec 27', logo: '/logos/ravens.png' },
  { week: 18, opponent: 'Vikings', date: 'Jan 4', logo: '/logos/vikings.png' },
];

function Schedule() {
  return (
    <div className="page">
      <h2>2025-2026 Packers Game Schedule</h2>
      <div className="schedule-grid">
        {scheduleData.map((game) => (
          <GameCard
            key={game.week}
            week={game.week}
            opponent={game.opponent}
            date={game.date}
            logo={game.logo}
          />
        ))}
      </div>
    </div>
  );
}

export default Schedule;
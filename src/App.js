import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Schedule from './pages/Schedule';
import Standings from './pages/Standings';
import Players from './pages/Players';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Always visible at the top */}
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/players" element={<Players />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

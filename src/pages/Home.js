import React from 'react';
import { Tweet } from 'react-tweet'; // The recommended component for embeds
import '../styles/Page.css';

function Home() {
  return (
    <div className="page">
      <h2>Welcome to the Packers Fan Hub!</h2>
      <p>Stay updated with the latest from the Packers community.</p>

      <div className="social-section">
        
        {/* X (Twitter) Embed */}
        <div className="social-embed">
          {/* This component handles everything for you.
            Just find the tweet's ID from its URL and place it here.
            URL: https://x.com/packers/status/1815852528773341328
            ID: 1815852528773341328
          */}
          <Tweet id="1948122326362374635" />
        </div>

        {/* YouTube Embed */}
        <div className="social-embed">
          {/*
            Replace 'VIDEO_ID_HERE' with the ID from the YouTube video URL.
            URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
            ID: dQw4w9WgXcQ
          */}
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/YZucdBahsmI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none' }}
          />
        </div>

        {/* Instagram Embed */}
        <div className="social-embed">
          {/*
            Replace 'POST_ID_HERE' with the ID from the Instagram post URL.
            URL: https://www.instagram.com/p/C-Clq25y9bT/
            ID: C-Clq25y9bT
          */}
          <iframe
            src="https://www.instagram.com/p/DMQwh5Kub9c/embed"
            width="100%"
            height="400"
            allowTransparency="true"
            scrolling="no"
            style={{ border: 'none', overflow: 'hidden' }}
            title="Instagram Post"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
import React, { useEffect } from 'react';
import '../styles/Page.css';

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    script.setAttribute('async', '');
    document.body.appendChild(script);
  }, []);

  return (
    <div className="page">
      <h2>Welcome to the Packers Fan Hub!</h2>
      <p>Stay updated with the latest from the Packers community.</p>

      <div className="social-section">
        {/* Twitter Embed */}
        <div className="social-embed">
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              GB already has a lotta love for this guy.
              <a href="https://twitter.com/emplifybellin?ref_src=twsrc%5Etfw">@emplifybellin</a>{' '}
              <a href="https://t.co/defey1sZx0">pic.twitter.com/defey1sZx0</a>
            </p>
            &mdash; Green Bay Packers (@packers){' '}
            <a href="https://twitter.com/packers/status/1948171272887886065?ref_src=twsrc%5Etfw">
              July 24, 2025
            </a>
          </blockquote>
        </div>

        {/* YouTube Embed */}
        <div className="social-embed">
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
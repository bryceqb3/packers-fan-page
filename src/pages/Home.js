import React, { useEffect } from 'react';
import '../styles/Page.css';

function Home() {
  useEffect(() => {
    const twitterScript = document.createElement('script');
    twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    twitterScript.setAttribute('async', '');
    document.body.appendChild(twitterScript);

    const instagramScript = document.createElement('script');
    instagramScript.setAttribute('src', 'https://www.instagram.com/embed.js');
    instagramScript.setAttribute('async', '');
    document.body.appendChild(instagramScript);
  }, []);

  return (
    <div className="page">
      <h2>Welcome to the Packers Fan Hub!</h2>
      <p>Stay updated with the latest from the Packers community.</p>

      {/* Social Icon Row */}
<div className="icon-row">
  <a href="https://x.com/packers?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="xicon-box-bg" target="_blank" rel="noreferrer">
    <img src="/logos/x-icon.png" alt="X" className="xicon" />
  </a>
  <a href="https://www.youtube.com/c/packers" className="icon-box-bg" target="_blank" rel="noreferrer">
    <img src="/logos/youtube.png" alt="YouTube" className="icon-box__img" />
  </a>
  <a href="https://www.instagram.com/packers/?hl=en" className="instaicon-box-bg" target="_blank" rel="noreferrer">
    <img src="/logos/insta.png" alt="Instagram" className="instaicon" />
  </a>
</div>

      {/* Embed Container */}
      <div className="social-wrapper">
        <div className="social-section">
          {/* Twitter Embed */}
          <div className="social-embed">
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                GB already has a lotta love for this guy.
                <a href="https://twitter.com/emplifybellin">@emplifybellin</a>{' '}
                <a href="https://t.co/defey1sZx0">pic.twitter.com/defey1sZx0</a>
              </p>
              &mdash; Green Bay Packers (@packers){' '}
              <a href="https://twitter.com/packers/status/1948171272887886065">
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
              scrolling="no"
              style={{ border: 'none', overflow: 'hidden' }}
              title="Instagram Post"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


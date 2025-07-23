import React, { useEffect } from "react";
import "../styles/Page.css";

function Home() {
  useEffect(() => {
    // Load Twitter script on mount
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup if needed
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="page">
      <h2>Welcome to the Packers Fan Hub!</h2>
      <p>Stay updated with the latest from the Packers community.</p>

      <div className="social-section">
        {/* Twitter Embed */}
        <div className="social-embed twitter">
          <a
            className="twitter-timeline"
            data-height="500"
            href="https://twitter.com/packers"
          >
            Tweets by @packers
          </a>
        </div>

        {/* YouTube Embed */}
        <div className="social-embed youtube">
          <iframe
            style={{ border: "none" }}
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/YZucdBahsmI"
            title="Packers YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Instagram Embed */}
        <div className="social-embed instagram">
          <iframe
            src="https://www.instagram.com/p/DMQwh5Kub9c/embed"
            width="100%"
            height="480"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            title="Instagram"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
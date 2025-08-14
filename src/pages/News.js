import React, { useEffect, useState } from 'react';
import '../styles/Page.css';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://corsproxy.io/?https://www.packers.com/rss/news')
      .then(res => res.text())
      .then(str => {
        const parser = new window.DOMParser();
        const xml = parser.parseFromString(str, 'text/xml');
        const items = xml.querySelectorAll('item');
        const newsItems = Array.from(items).map(item => ({
          title: item.querySelector('title')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          description: item.querySelector('description')?.textContent || '',
          image: item.querySelector('enclosure')?.getAttribute('url') || ''
        }));
        setArticles(newsItems);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="page">
      <h2>Latest Packers News</h2>
      <div className="news-grid">
        {articles.length > 0 ? (
          articles.map((article, idx) => (
            <div key={idx} className="news-card">
              {article.image && (
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <img src={article.image} alt={article.title} className="news-image" />
                </a>
              )}
              <h3>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </h3>
              <p className="news-date">{new Date(article.pubDate).toLocaleDateString()}</p>
              <p>{article.description.replace(/<[^>]+>/g, '')}</p>
            </div>
          ))
        ) : (
          <p>Loading latest news...</p>
        )}
      </div>
    </div>
  );
}

export default News;
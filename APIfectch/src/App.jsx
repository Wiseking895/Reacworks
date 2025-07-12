import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://mocki.io/v1/645701cc-9e2f-4260-a740-0c7c0000b6f2')
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Trending Gospel Music from Ghana</h1>
      {loading ? (
        <p className="loading">Loading songs...</p>
      ) : (
        <div className="music-grid">
          {songs.map((song) => (
            <div key={song.id} className="music-card">
              <img src={song.image} alt={song.title} className="music-image" />
              <h2>{song.title}</h2>
              <p>Artist: {song.artist}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

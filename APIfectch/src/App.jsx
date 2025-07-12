import { useEffect, useState } from 'react';
import './App.css';

const API_KEY = '14201cd8da00c433c0cad851e915cfe8';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const TRAILER_API = (id) =>
  `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [playingTrailerId, setPlayingTrailerId] = useState(null);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error('Error fetching movies', err);
    }
    setLoading(false);
  };

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(SEARCH_API + encodeURIComponent(searchTerm));
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error('Search error:', err);
    }
    setLoading(false);
  };

  const handlePlayTrailer = async (movieId) => {
    setPlayingTrailerId(null);
    setLoading(true);
    try {
      const res = await fetch(TRAILER_API(movieId));
      const data = await res.json();
      const trailer = data.results.find((vid) => vid.type === 'Trailer');
      if (trailer) {
        setPlayingTrailerId(trailer.key);
      } else {
        alert('Trailer not available.');
      }
    } catch (err) {
      console.error('Trailer fetch error', err);
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <h1>🎬 Movie Explorer</h1>

      <form onSubmit={searchMovies} className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div className="spinner">Loading...</div>}

      <div className="movie-list">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : 'https://via.placeholder.com/300x450?text=No+Image'
              }
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
            <p>{movie.overview.slice(0, 100)}...</p>
            <button onClick={() => handlePlayTrailer(movie.id)}>
              ▶ Play Trailer
            </button>
          </div>
        ))}
      </div>

      {playingTrailerId && (
        <div className="trailer-modal">
          <div className="trailer-content">
            <button className="close-btn" onClick={() => setPlayingTrailerId(null)}>
              ✖
            </button>
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${playingTrailerId}`}
              title="Movie Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Thunderbolts *", release_date: "2025" },
    { id: 2, title: "Fantastic Four: First Steps *", release_date: "2025" },
    { id: 3, title: "Avengers: Secret Wars *", release_date: "2025" },
    { id: 4, title: "Tron: Ares", release_date: "2025" },
    { id: 5, title: "The Batman Part II", release_date: "2025" },
  ];

  const handleSearch = () => {
    e.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies
          .filter((movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

export default Home;

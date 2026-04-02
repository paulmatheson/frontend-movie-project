import "../css/Favorites.css";
import { useMovieContext } from "../contexts/movieContext";
import MovieCard from "../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();
  console.log(favorites);

  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
      </div>
    );
  }
}

export default Favorite;

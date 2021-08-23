import { Link } from "react-router-dom";
import noPoster from "../images/no-movie-poster.jpg";
import thumbsUp from "../images/thumbs-up.svg";
import thumbsDown from "../images/thumbs-down.svg";

function MovieCard({ movieObj }) {
  // funtion to trim summary length
  function truncateSummary(sentence, amount, tail) {
    const words = sentence.split(" ");

    if (amount >= words.length) {
      return sentence;
    }

    const truncated = words.slice(0, amount);
    return `${truncated.join(" ")}${tail}`;
  }

  let movieSummary = movieObj.overview;

  return (
    <div className="card-container">
      <div className="movie-card">
        <div className="movie-poster">
          {movieObj.poster_path === null ? (
            <img src={noPoster} alt="No poster"></img>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`}
              alt={movieObj.title}
            />
          )}
        </div>

        <div className="movie-info">
          <h3 className="movie-title">{movieObj.title}</h3>
          <p>Release date: {movieObj.release_date}</p>

          <span className="rating">
            {movieObj.vote_average > 5 ? (
              <img className="thumbs" src={thumbsUp} alt=""></img>
            ) : (
              <img className="thumbs" src={thumbsDown} alt="" />
            )}
            {movieObj.vote_average * 10 + "%"}
          </span>

          <p>{truncateSummary(movieSummary, 24, "...")}</p>
          <Link className="btn-more-info" to={`/movie/${movieObj.id}`}>
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

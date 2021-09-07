import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import { API_TOKEN } from "../globals/globals";

function PageTopRated({ sort }) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_TOKEN,
          },
        }
      );
      let rawMovieData = await res.json();
      rawMovieData = rawMovieData.results.splice(0, 20);

      setMovieData(rawMovieData);
    };

    fetchMovies();
  }, [sort]);

  return (
    <div className="category-container">
      <h2>Top Rated</h2>
      <div className="movies-container">
        {movieData !== null && <Movies movieData={movieData} />}
      </div>
    </div>
  );
}

export default PageTopRated;

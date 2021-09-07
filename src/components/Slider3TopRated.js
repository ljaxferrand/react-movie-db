import { useEffect, useState } from "react";
import SliderMovies from "./SliderMovies";
import { API_TOKEN } from "../globals/globals";

function Slider3TopRated() {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?&language=en-US&page=1`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_TOKEN,
          },
        }
      );
      let rawMovieData = await res.json();
      rawMovieData = rawMovieData.results.splice(0, 12);

      setMovieData(rawMovieData);
    };

    fetchMovies();
  });

  return (
    <div>{movieData !== null && <SliderMovies movieData={movieData} />}</div>
  );
}

export default Slider3TopRated;

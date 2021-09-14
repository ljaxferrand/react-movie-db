import { useEffect, useState } from "react";
import SliderMovies from "./SliderMovies";
import { API_TOKEN } from "../globals/globals";

function Slider4Upcoming({ sort }) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${sort}?&language=en-US&region=CA|US&with_release_type=2|3`,
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
  }, [sort]);

  return (
    <div>
      {movieData !== null && <SliderMovies sort={sort} movieData={movieData} />}
    </div>
  );
}

export default Slider4Upcoming;

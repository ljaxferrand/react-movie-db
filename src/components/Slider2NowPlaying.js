import { useEffect, useState } from "react";
import SliderMovies from "./SliderMovies";
import { API_TOKEN } from "../globals/globals";

function Slider2NowPlaying({ sort }) {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    let controller = new AbortController();
    const fetchMovies = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${sort}?&language=en-US&page=1`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_TOKEN,
          },
          signal: controller.signal,
        }
      );
      let rawMovieData = await res.json();
      rawMovieData = rawMovieData.results.splice(0, 12);

      setMovieData(rawMovieData);
    };

    fetchMovies();
    return () => controller?.abort();
  });

  return (
    <div>
      {movieData !== null && <SliderMovies sort={sort} movieData={movieData} />}
    </div>
  );
}

export default Slider2NowPlaying;

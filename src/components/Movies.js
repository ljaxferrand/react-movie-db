// import { useEffect } from "react";
import useGlobal from "../store/globalAppState";
import isFav from "../utilities/isFav";
import MovieCard from "./MovieCard";

function Movies({ movieData }) {
  const globalStateAndglobalActions = useGlobal();
  const globalState = globalStateAndglobalActions[0];

  // useEffect(() => {
  //   document.title = `${appTitle} - Home`;
  // }, []);

  return (
    <>
      {movieData.map((oneMovie, i) => {
        return (
          <MovieCard
            key={i}
            movieObj={oneMovie}
            isFav={isFav(globalState.favs, null, oneMovie.id)}
          />
        );
      })}
    </>
  );
}

export default Movies;

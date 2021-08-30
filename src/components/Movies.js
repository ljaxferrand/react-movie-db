// Page Home
// import { appTitle } from "../globals/globals";
// import { useEffect } from "react";
import useGlobal from "../store/globalAppState";
import isFav from "../utilities/isFav";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movies({ movieData }) {
  const globalStateAndglobalActions = useGlobal();
  const globalState = globalStateAndglobalActions[0];

  // useEffect(() => {
  //   document.title = `${appTitle} - Home`;
  // }, []);

  var settings = {
    fade: false,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1620,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 450,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="movies-container">
      <Slider {...settings}>
        {movieData.map((oneMovie, i) => {
          return (
            <MovieCard
              key={i}
              movieObj={oneMovie}
              isFav={isFav(globalState.favs, null, oneMovie.id)}
            />
          );
        })}
      </Slider>
    </section>
  );
}

export default Movies;

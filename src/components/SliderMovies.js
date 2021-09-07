// import { useEffect } from "react";
import useGlobal from "../store/globalAppState";
import isFav from "../utilities/isFav";
import MovieCard from "./MovieCard";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderMovies({ movieData, sort }) {
  const globalStateAndglobalActions = useGlobal();
  const globalState = globalStateAndglobalActions[0];

  // useEffect(() => {
  //   document.title = `${appTitle} - Home`;
  // }, []);

  var settings = {
    fade: false,
    arrows: true,
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1919,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1499,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1014,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 699,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movieData.map((oneMovie, i) => {
        return (
          <MovieCard
            key={i}
            movieObj={oneMovie}
            isFav={isFav(globalState.favs, null, oneMovie.id)}
            sort={sort}
          />
        );
      })}
    </Slider>
  );
}

export default SliderMovies;

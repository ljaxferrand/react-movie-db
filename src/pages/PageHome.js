
import { useEffect, useState } from 'react';
import Movies from '../components/Movies';
import SortNav from '../components/SortNav';
import HeroImage from '../components/HeroImage';
import { API_TOKEN } from '../globals/globals'

function PageHome() {


    return (
        <section className='home-page'>
            <HeroImage />
            <SortNav sort='popular' />
            <SortNav sort='upcoming' />
            <SortNav sort='top_rated' />
            <SortNav sort='now_playing' />
            
        </section>
    )

import { useEffect, useState } from "react";
import Movies from "../components/Movies";
import { API_TOKEN } from "../globals/globals";

function PageHome({ sort }) {
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
      rawMovieData = rawMovieData.results.splice(0, 12);
      setMovieData(rawMovieData);
    };

    fetchMovies();
  }, [sort]);

  return <div>{movieData !== null && <Movies movieData={movieData} />}</div>;

}

export default PageHome;

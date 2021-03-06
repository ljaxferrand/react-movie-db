import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import Movies from '../components/Movies';
import { API_TOKEN } from '../globals/globals';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HeroImage() {

    //https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US 

    const [movieData, setMovieData] = useState(null); 

    var settings = {
        fade: true, 
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 0,
        autoplay: true,
        autoplaySpeed: 7000,
    };

    useEffect(() => {

        const fetchMovies = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            rawMovieData = rawMovieData.results.splice(0, 5);
            setMovieData(rawMovieData);
        }

        fetchMovies();
    }, []);

    return (
        <div>
            {movieData !== null && 
                <div className='hero-container'>
                    <Slider {...settings}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${movieData[0].backdrop_path}`} alt={`Poster for ${movieData[0].title}`} />
                        <div className="sliderText">
                            <h2>{movieData[0].title}</h2>
                            {/* <p className='hero-synopsis'>{movieData[0].overview}</p> */}
                            <Link className="btn-more-info" to={`/movie/${movieData[0].id}`}>
                            More Info
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${movieData[1].backdrop_path}`} alt={`Poster for ${movieData[1].title}`} />
                        <div className="sliderText">
                            <h2>{movieData[1].title}</h2>
                            {/* <p className='hero-synopsis'>{movieData[1].overview}</p> */}
                            <Link className="btn-more-info" to={`/movie/${movieData[1].id}`}>
                            More Info
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${movieData[2].backdrop_path}`} alt={`Poster for ${movieData[2].title}`} />
                        <div className="sliderText">
                            <h2>{movieData[2].title}</h2>
                            {/* <p className='hero-synopsis'>{movieData[2].overview}</p> */}
                            <Link className="btn-more-info" to={`/movie/${movieData[2].id}`}>
                            More Info
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${movieData[3].backdrop_path}`} alt={`Poster for ${movieData[3].title}`} />
                        <div className="sliderText">
                            <h2>{movieData[3].title}</h2>
                            {/* <p className='hero-synopsis'>{movieData[3].overview}</p> */}
                            <Link className="btn-more-info" to={`/movie/${movieData[3].id}`}>
                            More Info
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${movieData[4].backdrop_path}`} alt={`Poster for ${movieData[4].title}`} />
                        <div className="sliderText">
                            <h2>{movieData[4].title}</h2>
                            {/* <p className='hero-synopsis'>{movieData[4].overview}</p> */}
                            <Link className="btn-more-info" to={`/movie/${movieData[4].id}`}>
                            More Info
                            </Link>
                        </div>
                    </div>
                    
                    </Slider>
                    
                    <div className="hero-overlay">
                    <div className="banner--fadeBottom" />    
                    </div>
                    
                </div>
            }
        </div>
    )
}

export default HeroImage;

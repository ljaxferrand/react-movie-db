import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/_searchMovies.scss';
import * as IoIcons from 'react-icons/io';
import thumbsUp from "../images/thumbs-up.svg";


export default function SearchMoviesForm(props){

    //states for input query of movies
    const [query, setQuery] = useState('');
    //create the state for retrieving movies and updating state to browser
    const [movies, setMovies] = useState([]);

    const searchMovies = async(e) => {

        e.preventDefault();
        // console.log("submitting");

        const url = `https://api.themoviedb.org/3/search/movie?api_key=b719fcd73bdca87defac06b5f5c92133&language=en-US&query=${query}&page=1`;

        try {
        const res = await fetch(url);
        const data = await res.json();
        //track movies that are displayed on the screen
        // console.log(data.results);
        setMovies(data.results);
    }catch(err){
        // console.log(err);
        }
    }

    return (
        <>
        
        <fieldset className='search-box-container'>
            <p className="search-message">The search for millions of movies is over. Viewport helps you find the movies, actors, and genres you love.</p>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query"></label>
                <input className="input" type="search" name="query" placeholder="Type a name to search..."
                value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button className="button">Search</button>
            </form>
            {/* { noMoviesMessage() } */}
        </fieldset>

            <div className="card-list">
                {/* filters out movies without images */}
                {movies.filter(movie => movie.poster_path).map(movie => ( 
                    <div className="card" key={movie.id}>
                       <img className="card--image"
                       src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                       alt={movie.title + 'poster'}
                       />
                       <div className="card-content">
                           <h3 className="card--title">{movie.title}</h3>
                           {/* <p className="movie-card-text"><small>RELEASE DATE: {movie.release_date}</small></p> */}
                           <p className="movie-card-text"><img className="thumbs" src={thumbsUp} alt=""></img> {movie.vote_average * 10 + "%"}</p>
                           {/* <p className="card-desc">{movie.overview}</p> */}
                           <Link className="btn-more-info" to={`/movie/${movie.id}`}>More Info</Link>
                           
                       </div>
                    </div>
                ))}
            </div>
            
        </>
    )
}

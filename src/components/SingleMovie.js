import noPoster from "../images/no-movie-poster.jpg";
import thumbsUp from "../images/thumbs-up.svg";
import thumbsDown from "../images/thumbs-down.svg";

function SingleMovie( {movieData} ) {
    console.log(movieData);
    return (
        <section className="singleMovie">
            
            <div className="singleMovieContent">

                <div className="singleMoviePoster">
                {movieData.poster_path === null ? <img src={noPoster} alt="No poster found" /> :
                <img src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} alt={movieData.title} />}
                </div>

                <div className="SingleMovieInfo">
                    <h2>{movieData.title}</h2>
                    <p>{movieData.overview}</p>
                    <p>Release Date: {movieData.release_date}</p>
                    <span className="rating">
                        {movieData.vote_average > 5 ? (
                        <img className="thumbs" src={thumbsUp} alt=""></img>
                        ) : (
                        <img className="thumbs" src={thumbsDown} alt="" />
                        )}
                        {movieData.vote_average * 10 + "%"}
          </span>
                </div>
            </div>

        </section>
    )
}

export default SingleMovie

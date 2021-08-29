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

                <div className="singleMovieInfo">
                    <h2 className="movieTitle">{movieData.title}</h2>
                    
                    <span className="rating">
                        {movieData.vote_average > 5 ? (
                        <img className="thumbs" src={thumbsUp} alt=""></img>
                        ) : (
                        <img className="thumbs" src={thumbsDown} alt="" />
                        )}
                        <p className="ratingPercent">{movieData.vote_average * 10 + "%"}</p>
                    </span>
                    <h3>Synopsis</h3>
                    <p className="movieDes">{movieData.overview}</p>

                    <div className="underDes">
                        <div className="releaseDate">
                            <p className="releaseDateTitle">Release Date</p>
                            <p className="date">{movieData.release_date}</p>
                        </div>
                        <div className="runtime">
                            <p className="runtimeTitle">Runtime</p>
                            <p className="time">{movieData.runtime} Mins.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default SingleMovie

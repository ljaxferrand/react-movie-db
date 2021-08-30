import noPoster from "../images/no-movie-poster.jpg";
import thumbsUp from "../images/thumbs-up.svg";
import thumbsDown from "../images/thumbs-down.svg";

function SingleMovie( {movieData, creditsData} ) {
    console.log(movieData);
    console.log(creditsData);
    
    return (
        <section className="singleMovie">
            
            <div className="singleMovieContent">

                <div className="singleMoviePoster">
                {movieData.poster_path === null ? <img src={noPoster} alt="No poster found" /> :
                <img src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`} alt={movieData.title} />}
                </div>

                <div className="singleMovieInfo">

                    <div className="underPoster">
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

                    <div className="cast">
                        {creditsData !== null && (
                            <div className="creditsData">
                                <h3>Top Billed Cast</h3>

                                <div className="castArea">

                                    <div className="castMember">
                                        <img src={`https://image.tmdb.org/t/p/original/${creditsData[0].profile_path}`} alt={creditsData[0].name} />
                                        <p>{creditsData[0].name} as {creditsData[0].character}</p>
                                    </div>

                                    <div className="castMember">
                                        <img src={`https://image.tmdb.org/t/p/original/${creditsData[1].profile_path}`} alt={creditsData[1].name} />
                                        <p>{creditsData[1].name} as {creditsData[1].character}</p>
                                    </div>

                                    <div className="castMember">
                                        <img src={`https://image.tmdb.org/t/p/original/${creditsData[2].profile_path}`} alt={creditsData[2].name} />
                                        <p>{creditsData[2].name} as {creditsData[2].character}</p>
                                    </div>

                                    <div className="castMember">
                                        <img src={`https://image.tmdb.org/t/p/original/${creditsData[3].profile_path}`} alt={creditsData[3].name} />
                                        <p>{creditsData[3].name} as {creditsData[3].character}</p>
                                    </div>

                                    <div className="castMember">
                                        <img src={`https://image.tmdb.org/t/p/original/${creditsData[4].profile_path}`} alt={creditsData[4].name} />
                                        <p>{creditsData[4].name} as {creditsData[4].character}</p>
                                    </div>

                                    <div className="castMember">
                                        <img src={`https://image.tmdb.org/t/p/original/${creditsData[5].profile_path}`} alt={creditsData[5].name} />
                                        <p>{creditsData[5].name} as {creditsData[5].character}</p>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default SingleMovie

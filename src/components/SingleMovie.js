import useGlobal from "../store/globalAppState";
import FavButton from "./FavButton";
import noPoster from "../images/no-movie-poster.jpg";
import noCastPhoto from "../images/no-cast-photo.png";
import thumbsUp from "../images/thumbs-up.svg";
import thumbsDown from "../images/thumbs-down.svg";
import Modal from "./VideoModal";



function SingleMovie( {movieData, creditsData, movieObj, isFav} ) {

  const globalStateAndglobalActions = useGlobal();
  const globalActions = globalStateAndglobalActions[1];

  function handleFavClick(addToFav, obj) {
      console.log(addToFav)
    if (addToFav === true) {
      globalActions.addFav(obj);
    } else {
      globalActions.removeFav(obj.id);
    }
  }
    // console.log(movieData);
    // console.log(creditsData);
    movieObj = movieData;
    // console.log(movieObj)

    let trailerArray = movieData.videos.results;

    let trailerKey = null;

    for (let i = 0; i < trailerArray.length; i++){
        if (trailerArray[i].type === 'Trailer'){
            trailerKey = trailerArray[i].key;
        }
    }

    
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
                        

                        
                        <div className="underTitle">
                            <span className="rating">
                                {movieData.vote_average > 5 ? (
                                <img className="thumbs" src={thumbsUp} alt=""></img>
                                ) : (
                                <img className="thumbs" src={thumbsDown} alt="" />
                                )}
                                <p className="ratingPercent">{movieData.vote_average * 10 + "%"}</p>
                            </span>

                            

                            {trailerKey !== null &&
                            <div className="trailer">
                                <Modal trailerKey={trailerKey}/>
                            </div>
                            }

                            <div className="btn-favourite-single">
                                {isFav ? (
                                    <FavButton
                                    movieObj={movieObj}
                                    remove={true}
                                    handleFavClick={handleFavClick}
                                    />
                                ) : (
                                    <FavButton
                                    movieObj={movieObj}
                                    handleFavClick={handleFavClick}
                                    />
                                )}
                            </div>

                            
                        </div>


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

                                    {creditsData[0] !== undefined && (
                                    <div className="castMember">
                                        {creditsData[0].profile_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${creditsData[0].profile_path}`} alt={creditsData[0].name} /> :
                                        <img src={noCastPhoto} alt="cast profile unavailable" /> }

                                        <p>{creditsData[0].name} as {creditsData[0].character}</p>
                                    </div>
                                    )}

                                    {creditsData[1] !== undefined && (
                                    <div className="castMember">
                                        {creditsData[1].profile_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${creditsData[1].profile_path}`} alt={creditsData[1].name} /> :
                                        <img src={noCastPhoto} alt="cast profile unavailable" /> }

                                        <p>{creditsData[1].name} as {creditsData[1].character}</p>
                                    </div>
                                    )}

                                    {creditsData[2] !== undefined && (
                                    <div className="castMember">
                                        {creditsData[2].profile_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${creditsData[2].profile_path}`} alt={creditsData[2].name} /> :
                                        <img src={noCastPhoto} alt="cast profile unavailable" /> }

                                        <p>{creditsData[2].name} as {creditsData[2].character}</p>
                                    </div>
                                    )}

                                    {creditsData[3] !== undefined && (
                                    <div className="castMember">
                                        {creditsData[3].profile_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${creditsData[3].profile_path}`} alt={creditsData[3].name} /> :
                                        <img src={noCastPhoto} alt="cast profile unavailable" /> }

                                        <p>{creditsData[3].name} as {creditsData[3].character}</p>
                                    </div>
                                    )}

                                    {creditsData[4] !== undefined && (
                                    <div className="castMember">
                                        {creditsData[4].profile_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${creditsData[4].profile_path}`} alt={creditsData[4].name} /> :
                                        <img src={noCastPhoto} alt="cast profile unavailable" /> }

                                        <p>{creditsData[4].name} as {creditsData[4].character}</p>
                                    </div>
                                    )}

                                    {creditsData[5] !== undefined && (
                                    <div className="castMember">
                                        {creditsData[5].profile_path !== null ? <img src={`https://image.tmdb.org/t/p/original/${creditsData[5].profile_path}`} alt={creditsData[5].name} /> :
                                        <img src={noCastPhoto} alt="cast profile unavailable" /> }

                                        <p>{creditsData[5].name} as {creditsData[5].character}</p>
                                    </div>
                                    )}

                                </div>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default SingleMovie;



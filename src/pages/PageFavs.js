import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import MovieCard from '../components/MovieCard';
import { appTitle } from '../globals/globals';

function PageFavs() {

	// const globalStateAndActions = useGlobal();
    // const globalState = globalStateAndActions[0];
    const [globalState, globalActions] = useGlobal();
    const [ready, setReady] = useState(false);

	useEffect(() => {
		document.title = `${appTitle} - Favs`;
        
        globalActions.setFavs();
    
            setReady(true);
	}, [globalActions]);

    return (
        <main>
		    <section className='favourites'>
                <h2>Your Favourite Movies</h2>
                {globalState.favs.length < 1 ? <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some favourite movies.</p> : 
                    <div className="movies-container">
                        {ready && globalState.favs.map((oneMovie, i) => {
                            return <MovieCard key={i} 
                                        movieObj={oneMovie}
                                        isFav={true} />
                        })}
				    </div>}
            </section>
	    </main>
    );
	
}

export default PageFavs;

// ready state on pagefavs.js replace lines 9 and 10 
// const [globalState, globalActions] = useGlobal();
  
//   const [ready, setReady] = useState(false);

//   useEffect(() => {

//     globalActions.setFavs();
    
//     setReady(true);

//   }, [globalActions]);
// Page Favs

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import MovieCard from '../components/MovieCard';
import { appTitle } from '../globals/globals';

function PageFavs() {

	const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

	useEffect(() => {
		document.title = `${appTitle} - Favs`;
	}, []);

    return (
        <main>
		    <section>
                <h2>Favourite Movies</h2>
                {globalState.favs.length < 1 ? <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some favourite movies.</p> : 
                    <div className="movies-container">
                        {globalState.favs.map((oneMovie, i) => {
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

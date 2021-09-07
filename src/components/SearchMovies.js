import '../styles/_searchMovies.scss';
import SearchMoviesForm from './SearchMoviesForm';

function SearchMovies() {
    return (
        <div >
            <div className="container">
                <h1 className="search-title"></h1>
                <SearchMoviesForm />
            </div>
            <div className="background-styles">

            </div>
        </div>
    )
}

export default SearchMovies

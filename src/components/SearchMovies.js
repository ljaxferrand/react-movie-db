import '../styles/_searchMovies.scss';
import SearchMoviesForm from './SearchMoviesForm';

function SearchMovies() {
    return (
        <div className="container">
            <h1 className="search-title">Movie Search Page</h1>
            <SearchMoviesForm />
        </div>
    )
}

export default SearchMovies

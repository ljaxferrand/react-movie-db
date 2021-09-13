import SingleMovie from "../components/SingleMovie";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_TOKEN } from '../globals/globals';

function PageSingleMovie() {

    const [movieData, setMovieData] = useState(null);
    const [creditsData, setCreditsData] = useState(null);

    const { id } = useParams();

    useEffect(() => {

        const fetchMovie = async () => {

            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=credits,videos`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                }
            });
            let rawMovieData = await res.json();
            let rawCreditsData = rawMovieData.credits.cast.splice(0, 6);

            setMovieData(rawMovieData);
            setCreditsData(rawCreditsData);
        }

        fetchMovie();
    }, []);

    return (
        <section>
            {movieData !== null && <SingleMovie movieData={movieData} creditsData={creditsData} />}
        </section>
    )
}

export default PageSingleMovie;

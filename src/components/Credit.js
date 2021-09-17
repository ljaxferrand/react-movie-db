import imdblogo from '../images/imdb-logo.svg'; 
import movieBanner from '../images/movie-banner.jpeg';
import bcitLogo from '../images/bcit-logo.png';
import '../styles/_about.scss'; 

function credit() {
    return (
        <div className="about-page-title">
            <div className="about-banner-container">
                <img class="about-us-banner-image" src={movieBanner} alt="About us banner" />
                <h1 className="about-title">About Us</h1>
                <figure className="quote">
                    <blockquote >
                        <p>"The secret to film is that it's an illusion"</p>
                    </blockquote>
                    <figcaption>—George Lucas</figcaption>
                </figure>
            </div>
            
            <div className="credit-logos-container">
                <div className="item1">
                    <p className="about-text">
                    This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
                </div>
                <div className="item2">
                    <a href="https://www.themoviedb.org/"><img class="imdb-logo" src={imdblogo} alt="Logo for IMDB" /></a>
                </div>
                <div className="item3">
                    <a href="https://www.bcit.ca/programs/front-end-web-developer-certificate-full-time-6535cert/"><img class="bcit-logo" src={bcitLogo} alt="logo for BCIT"/></a>
                </div>
                <div className="item4">
                    <p className="about-text">Enjoy browsing your favourite movies on this site. It was made possible by the contributions of the BCIT front-end web development program, its instructors, and of course, a team of dedicated developers.</p>
                    <div className="bcitstudents-container">
                    <ul className="bcitstudents-list">
                        <li><a href="https://chivitran.com">Chivi Tran</a></li>
                        <li>LJ MacLean-Ferrand</li>
                        <li>Chris Coulson</li>
                        <li><a href="https://nicoleholland.ca/">Nicole Holland</a></li>
                    </ul>
                </div>
                </div>
                
            </div>  
        </div>
    )
}

export default credit

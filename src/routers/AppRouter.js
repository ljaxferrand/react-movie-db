import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import { keepTheme  } from '../utilities/themes';
import Header from '../components/Header';
import Footer from "../components/Footer";
import PageHome from '../pages/PageHome';
import PagePopular from '../pages/PagePopular';
import PageTopRated from '../pages/PageTopRated';
import PageNowPlaying from '../pages/PageNowPlaying';
import PageUpcoming from '../pages/PageUpcoming';
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageSingleMovie from '../pages/PageSingleMovie';
// import HeroImage from '../components/HeroImage';
import Page404 from '../pages/Page404';
import PageSearch from '../pages/PageSearch';
// import { APP_FOLDER_NAME } from '../globals/globals';


function AppRouter() {
    useEffect(() => {
        keepTheme();
    })

    return (
        <Router>
            
        <div className='wrapper'>
            <header>
            <Header />
            </header>
                <main>
                    <Switch>
                        <Route path='/' exact><PageHome sort='popular' /></Route>
                        <Route path='/popular' exact><PagePopular sort='popular' /></Route>
                        <Route path='/top-rated' exact><PageTopRated sort='top_rated' /></Route>
                        <Route path='/now-playing' exact><PageNowPlaying sort='now_playing' /></Route>
                        <Route path='/upcoming' exact><PageUpcoming sort='upcoming' /></Route>
                        <Route path='/about'><PageAbout /></Route>
                        <Route path='/favs'><PageFavs /></Route>
                        <Route path='/movie/:id'><PageSingleMovie /></Route>
                        <Route path='/search'><PageSearch /></Route>
                        <Route path='*'><Page404 /></Route>
                    </Switch>
                </main>
          <footer>
            <Footer />  
          </footer>
        </div>
       

        </Router>
    )
}

export default AppRouter;

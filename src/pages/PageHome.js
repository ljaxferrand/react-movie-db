import HeroImage from "../components/HeroImage";
import { Link } from "react-router-dom";
import Slider1Popular from "../components/Slider1Popular";
import Slider2NowPlaying from "../components/Slider2NowPlaying";
import Slider3TopRated from "../components/Slider3TopRated";
import Slider4Upcoming from "../components/Slider4Upcoming";

function PageHome() {
  return (
    <div className="home-page-div">
      <section className="home-page">
        <HeroImage />
      </section>

      <div className="sliders-container">
        <Link to="popular">
          <h2>Popular</h2>
        </Link>
        <Slider1Popular />

        <Link to="top-rated">
          <h2>Top Rated</h2>
        </Link>
        <Slider3TopRated />

        <Link to="now-playing">
          <h2>Now Playing</h2>
        </Link>
        <Slider2NowPlaying />

        <Link to="upcoming">
          <h2>Upcoming</h2>
        </Link>
        <Slider4Upcoming />
      </div>
    </div>
  );
}

export default PageHome;

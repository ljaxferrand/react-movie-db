import { Link } from "react-router-dom";
import "../styles/_page-not-found.scss"; 
import lost from "../images/lost.jpeg"; 

function Page404() {
    return (
        <div className="pageNotFound">
            <h1 className="pageTitle">404 error: page not found</h1>
            <img class="lost" src={lost} alt="Image of anadventurer lost in an Amazonian forest" />
            <p>We have a lot of movie info for you to enjoy but...</p>
            <p className="pageMessage">Somehow, you've found the one page that doesn't contain any movie info!</p>
            <Link to="/"><button className="homeButton404">Home</button></Link>
        </div>
    )
}

export default Page404



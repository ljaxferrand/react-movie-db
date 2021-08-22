import { Link } from "react-router-dom";
import "../styles/nopage.scss"; 

function Page404() {
    return (
        <div className="pageNotFound">
            <h1 className="pageTitle">404 error</h1>
            <p>We have a lot of movie info for you to read but...</p>
            <p className="pageMessage">Somehow, you've found the one page that doesn't contain any movie info</p>
            <Link to="/"><button className="homeButton404">Home</button></Link>
        </div>
    )
}

export default Page404



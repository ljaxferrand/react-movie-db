import { Link } from 'react-router-dom';

function Footer() {
    return (

        <div className="footer-flex">

            <div className='footer-col-2'>
                <ul>
                    <li> <Link to="/about">About</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    <li><Link to="/favs">Favourites</Link></li>
                </ul>
            </div>


            <div className='footer-col-1'>
                <h2>Viewport Movie Database</h2>
                <p>&copy; Chris Coulson, Chivi Tran, LJ Maclean-Ferrand and Nicole Holland</p>

            </div>

        </div>
    )
}

export default Footer

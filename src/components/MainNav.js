import React from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

// import { Button } from './Button';

class Navbar extends React.Component {

    state = { clicked: false}

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                {/* // Logo item linking in header  */}
                
                    <h1 className="navbar-logo"><Link to="/"><img class="logo" src={logo} alt="Logo" /></Link></h1>
                    
               
                {/* // Event handling of the hamburger and close buttons */}
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                {/* // Creation of the Navbar items */}
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                    return (
                        // see mapped items in MenuItems.js for menu item naming, linking, and classname
                        <li key={index}><a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
                    
            </ul>
            
            {/* <Button>Sign Up</Button> */}
        </nav>
        )
    }
}

export default Navbar
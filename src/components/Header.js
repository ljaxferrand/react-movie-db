
import MainNav from './MainNav';

import Toggle from './Toggle';

function Header() {
    

    return (
        <div>
            <MainNav />
            

                <div className="themeToggle">
                <Toggle />
                </div>
                

        </div>
    );
};

export default Header


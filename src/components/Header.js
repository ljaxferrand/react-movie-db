import React, { useState } from 'react';
import MainNav from './MainNav';
import Switch from './Switch'; 

function Header() {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div>
            <MainNav />
            <div className="themeToggle">
                <Switch rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
            </div>
        </div>
    );
};

export default Header


import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = ({header}) =>{
    return(
        <header>
            <div>
                <h1>
                    {header.title}   
                </h1>
                <h2>
                    {header.subtitle}    
                </h2>
            </div>
            <AnchorLink className="link" href='#about'></AnchorLink>
        </header>
    );
}

export default Header;
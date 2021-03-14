import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
 
const Nav = ({global}) => {
    return(
    <nav>
        <ul>
        <AnchorLink href='#about'>A Propos</AnchorLink>
        <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
        <AnchorLink href='#formation'>Portfolio</AnchorLink>
        </ul>
    </nav>
    );
}

export default Nav;
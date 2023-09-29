import React from 'react';
import { NavBarHeaderItem } from '../../Shared/ListNavBerHeader';

const NavBarHeaderComponent = () => {
    return (
        <nav className='nav-bar-header'>
            <ul className='nav-bar-header-list'>
                {NavBarHeaderItem.map((item, index) => (
                    <li className='nav-bar-header-item' key={index}>
                        <a href='#'>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBarHeaderComponent;

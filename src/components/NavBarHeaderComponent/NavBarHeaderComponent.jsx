import React from 'react'
import './NavBarHeader.css'
import { Link } from 'react-router-dom'
export default function 
() {
  return (
    <div className='nav-bar-header'>
    <nav>
        <ul className='menu'>
        <div className='navmenu'>
                  <li><Link to='/Home'>Home</Link></li>
                  <li><Link to='/Shop'>Shop</Link></li>
                  <li><Link to='/CreateYourOwn'>Create Your Own</Link></li>
                  <li><Link to='/About'>About Us</Link></li>
                  <li><Link to='/Contact'>Contact</Link></li>
                  <li><Link to='/SizeGuide'>Size Guide</Link></li>
                  </div>
        </ul>
    </nav>
    </div>
  )
}

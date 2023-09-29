import React from 'react'
import './HeaderComponent.css'
import FunctionHeaderComponent from '../FunctionHeaderComponent/FunctionHeaderComponent'
import NavBarHeaderComponent from '../NavBarHeaderComponent/NavBarHeaderComponent'


const HeaderComponent = () => {
    return (
        <header>
            <div className='top-header'>
                <div className='wrapperHeader'>
                    <div className='wrapperLogoHeader'>
                        <a href='#' className='logo'>
                            <img src='2.1.png' alt='logo' />
                        </a>
                    </div>

                    <FunctionHeaderComponent />
                </div>
            </div>

            <div className='bot-header'>
                <NavBarHeaderComponent />
            </div>

        </header>
    )
}

export default HeaderComponent
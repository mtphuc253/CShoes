import React from 'react'

const FunctionHeaderComponent = () => {
    return (
        <div className='wrapperFunctionHeader'>
            <div className='search-bar'>
                <input type='text' placeholder='...' className='searchBox' />
                <button className='searchBtn'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>

            <a href='#' className='cartBtn'>
                <i class="fa-solid fa-cart-shopping"></i>
            </a>
            <a href='#' className='userBtn'>
                <i class="fa-solid fa-user"></i>
            </a>
        </div>
    )
}

export default FunctionHeaderComponent
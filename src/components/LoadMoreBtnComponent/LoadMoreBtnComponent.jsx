import { Button, Space } from 'antd';
import React, { useState } from 'react';

const LoadMoreBtnComponent = () => {
    const [isHovered, setIsHovered] = useState(false);

    const btnStyle = {
        height: '45px',
        width: '125px',
        fontSize: '14px',
        fontWeight: '700',
        color: 'white',
        backgroundColor: isHovered ? 'rgb(39, 39, 39)' : 'black',
        transition: 'background-color 0.3s ease',
    };

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className='loadMoreBtn'>
            <button
                className='loadMoreBtnText'
                style={btnStyle}
                onMouseEnter={handleHover}
                onMouseLeave={handleMouseLeave}
            >
                <span>LOAD MORE</span>
            </button>
        </div>
    );
};

export default LoadMoreBtnComponent;

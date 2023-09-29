import Slider from "react-slick";
import React, { useEffect, useRef } from 'react';
import { Image } from 'antd';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css';

const SliderComponent = ({ arrImages }) => {
    const sliderRef = useRef(null);

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 2500, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 1000, 
    };

    return (
        <div className="slider-container">
            <Slider {...settings} ref={sliderRef}>
                {
                    arrImages.map((image, index) => {
                        return (
                            <div key={index} className="slide-item">
                                <Image src={image} alt='slider' preview={false} />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SliderComponent;

// HomePage.jsx

import React from 'react';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import './HomePage.css';
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.jpg';
import slider4 from '../../assets/images/slider4.jpg';
import slider5 from '../../assets/images/slider5.jpg';
import slider6 from '../../assets/images/slider6.jpg';
import CardComponent from '../../components/CardComponent/CardComponent';
import LoadMoreBtnComponent from '../../components/LoadMoreBtnComponent/LoadMoreBtnComponent';

const HomePage = () => {
  return (
    <div className='homePage'>
      <SliderComponent arrImages={[slider1, slider2, slider3, slider4, slider5, slider6]} />


      <div className='Product'>
        <div className='hotProducts'>
          <div className='row'>

            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />

          </div>

        </div>

        <div className='loadMore'>
          <LoadMoreBtnComponent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

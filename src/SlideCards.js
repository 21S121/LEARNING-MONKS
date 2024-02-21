import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlideCards.css';
import card1 from './card1.png';
import card2 from './card2.png';
import card3 from './card3.png';

const SlideCards = () => {
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:false,
    autoplay: true,        // Add autoplay setting
    autoplaySpeed: 1500,   // Set autoplay speed in milliseconds (1 second in this case)
  };

  return (
    <div className="slide-cards-container">
      <Slider {...sliderSettings}>
        <div className="card">
          <img src={card1} alt="card1" />
        </div>
        <div className="card">
          <img src={card2} alt="card2" />
        </div>
        <div className="card">
          <img src={card3} alt="card3" />
        </div>
      </Slider>
    </div>
  );
};

export default SlideCards;

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SliderContainer, Image } from './Slider.styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrow from "../../assets/images/leftArrow.png";
import rightArrow from "../../assets/images/rightArrow.png";

const PrevArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      <img src={leftArrow} alt="arrow_left" />
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      <img src={rightArrow} alt="arrow_right" />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptativeHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }
  ]
};

const SliderComponent = props => {
  return (
    <>
      <SliderContainer>
        <Slider {...settings} style={{ width: "100%", height: "200px" }}>
          <img
            src={require(`../../assets/images/book1.png`)}
          />
          <img
            src={require(`../../assets/images/book1.png`)}
          />
          <img
            src={require(`../../assets/images/book1.png`)}
          />
          <img
            src={require(`../../assets/images/book1.png`)}
          />
          <img
            src={require(`../../assets/images/book1.png`)}
          />
          <img
            src={require(`../../assets/images/book1.png`)}
          />
        </Slider>
      </SliderContainer>
    </>
  );
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SliderComponent);

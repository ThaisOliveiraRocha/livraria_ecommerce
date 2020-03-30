import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { SliderContainer, SlickPrev, SlickNext } from './Slider.styles';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrow from "../../assets/images/leftArrow.png";
import rightArrow from "../../assets/images/rightArrow.png";

const PrevArrow = ({ onClick }) => {
  return (
    <SlickPrev className="slick-arrow slick-prev" onClick={onClick}>
      <img src={leftArrow} alt="arrow_left" />
    </SlickPrev>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <SlickNext className="slick-arrow slick-next" onClick={onClick}>
      <img src={rightArrow} alt="arrow_right" />
    </SlickNext>
  );
};

const settings = {
  dots: true,
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
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <Slider {...settings} style={{ width: "auto", height: "50%" }}>
          <img
            src={require(`../../assets/images/promocoes.png`)}
          />
          <img
            src={require(`../../assets/images/banner-got.png`)}
          />
          <img
            src={require(`../../assets/images/star-wars.png`)}
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

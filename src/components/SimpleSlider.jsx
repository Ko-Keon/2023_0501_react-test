import React, { Component } from "react";

import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope as fasEnvelope , faAdd, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'




export default function SimpleSlider() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow : <SampleNextArrow />,
      prevArrow : <SamplePrevArrow />
    };

    // 배열을 이용하여 map을 사용해 화면에 출력하기 위함
    const pictures = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

    return (
      <div>
        <h2> 0501 평가</h2>
        <Slider {...settings} className="mx-5">
          <div>
            <img 
            src={ require('../img/img1.jpg')} 
            alt=""
            width={400}
             />
          </div>
          <div>
            <img 
                src={ require('../img/img2.jpg')} 
                alt=""
                width={400}
                />
          </div>
          <div>
            <img 
                src={ require('../img/img3.jpg')} 
                alt=""
                width={400}
                />
          </div>

          {
            pictures.map((pic)=>(
              <div>
                <img 
                src={require(`../img/${pic}`)} 
                alt="" 
                width={400}
                />
              </div>
            ))
          }
        </Slider>
      </div>
    );
}


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={className}
      style={
        { ...style, display: "block", color: "darkgray",
                    width:"40px", height:"40px", right:"10px"}
      }
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      style={{ ...style, display: "block", color: "darkgray", 
      width:"40px", height:"40px", left:"10px" , zIndex:"10"}}
      onClick={onClick}
    />
  );
}
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from '../Contents/ProductList'
import FlaticonNext from '../assets/arrows/right.png';
import FlaticonPrev from '../assets/arrows/back.png'

const SampleNextArrow = (props) => {
	const { className, style, onClick } = props;
	return (
	  <img
		className={className}
		style={{ ...style, height: '50px', width: '50px', zIndex: 1, right:"-40px" }}
		src={FlaticonNext}
		alt="Next"
		onClick={onClick}
	  />
	);
  };
  
  // Updated SamplePrevArrow component
  const SamplePrevArrow = (props) => {
	const { className, style, onClick } = props;
	return (
	  <img
		className={className}
		style={{ ...style, height: '50px', width: '50px', zIndex: 1, left:"-40px"  }}
		src={FlaticonPrev}
		alt="Previous"
		onClick={onClick}
	  />
	);
  };
  
const HomeProducts = () => {
	const settings = {
		
		className: "center",
		centerMode: true,
		centerPadding: "60px",
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			initialSlide: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			},
		},
		],
	};
	return (
		<div className="sliderContainer">
			 <h2 className="section-title">Products</h2>
			<Slider {...settings}>
				{dataDigitalBestSeller.map((item) => (
				<div className="card" >
					<div >
						<img
							src={item.linkImg}
							alt={item.title}
							// style={{border:"1px solid red"}}
						/>
						{/* <h1>{item.title}</h1> */}
					</div>
					<div >
						<h3>{item.price}</h3>
						<span className="category">{item.category}</span>
					</div>
				</div>
				))}
			</Slider>
		</div>
	);
  
}

export default HomeProducts
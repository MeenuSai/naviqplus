import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from '../Contents/ProductList'
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "black" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "black" }}
		onClick={onClick}
	  />
	);
  }
const HomeProducts = () => {
	const settings = {
		
		className: "center",
		centerMode: true,
		centerPadding: "60px",
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
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
				<div className="card">
					<div className="card-top">
					<img
						src={item.linkImg}
						alt={item.title}
						style={{height:"22vh",width:"18vw"}}
					/>
					<h1>{item.title}</h1>
					</div>
					<div className="card-bottom">
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
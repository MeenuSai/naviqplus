import React from 'react';
import img1 from '../assets/Veh_img1_Frontpage_header.jpg';
import img2 from '../assets/Fastag header2.jpg';
import img3 from '../assets/Toll_img_Frontpage_header.jpg';
import HomeProducts from './HomeProducts';
import Carousel from 'react-bootstrap/Carousel';
import SoftwareContent from '../Contents/SoftwareContent';
import Features from '../Contents/Features';
import BuyNow from './BuyNow';
import HomeFooter from '../Contents/HomeFooter';
const Home = () => {
  
return (
	<div className='App'>
	<Carousel>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src={img1}
			alt="First slide"
			style={{height:"auto",width:"100%"}}
			/>
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src={img2}
			alt="Second slide"
			style={{height:"auto",width:"100%"}}
			/>

			<Carousel.Caption>
				<h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src={img3}
			alt="Third slide"
			style={{height:"auto",width:"100%"}}
			/>

			<Carousel.Caption>
				<h3>Third slide label</h3>
				<p>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur.
				</p>
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	<HomeProducts/>
	<SoftwareContent/>
	<Features/>
	<h2 className="section-title">Buy Now</h2> 
	<BuyNow/>
	<HomeFooter/>

	</div>
  
	)
}


export default Home;

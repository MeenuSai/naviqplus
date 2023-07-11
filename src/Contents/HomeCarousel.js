import React,{useState,useEffect} from 'react'
import img1 from '../assets/p1_2.jpg';
import img2 from '../assets/Fastag header2_cropped2.jpg';
import img3 from '../assets/Toll_img_Frontpage_header_cropped2.jpg';
import img1_1 from '../assets/Veh_img1_Frontpage_header.jpg';
import img2_1 from '../assets/Fastag header2.jpg';
import img3_1 from '../assets/Toll_img_Frontpage_header.jpg';
import Carousel from 'react-bootstrap/Carousel';
const HomeCarousel = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [screenHeight, setScreenHeight] = useState(window.innerHeight);
	const [selectedImage1, setSelectedImage1] = useState(null);
	const [selectedImage2, setSelectedImage2] = useState(null);
	const [selectedImage3, setSelectedImage3] = useState(null);
  
	useEffect(() => {
	  const handleResize = () => {
		setScreenWidth(window.innerWidth);
		setScreenHeight(window.innerHeight);
	  };
  
	  window.addEventListener('resize', handleResize);
	  return () => {
		window.removeEventListener('resize', handleResize);
	  };
	}, []);
  
	useEffect(() => {
	  if (screenWidth > screenHeight) {
		setSelectedImage1(img1_1);
		setSelectedImage2(img2_1);
		setSelectedImage3(img3_1);
	  } else {
		setSelectedImage1(img1);
		setSelectedImage2(img2);
		setSelectedImage3(img3);
	  }
	}, [screenWidth, screenHeight]);
  return (
    <div>
        <Carousel>
		<Carousel.Item>
			<img
			// className="d-block w-100"
			src={selectedImage1}
			alt="First slide"
			style={{backgroundSize:"cover",height:"auto", width:"100%"}}
			/>
			<Carousel.Caption>
				<h3>First slide label</h3>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
			// className="d-block w-100"
			src={selectedImage2}
			alt="Second slide"
			style={{backgroundSize:"cover",height:"auto", width:"100%"}}
			/>

			<Carousel.Caption>
				{/* <h3>Second slide label</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
			</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
			<img
			// className="d-block w-100"
			src={selectedImage3}
			alt="Third slide"
			style={{backgroundSize:"cover",height:"auto", width:"100%"}}
			/>

			<Carousel.Caption>
				{/* <h3>Third slide label</h3>
				<p>
					Praesent commodo cursus magna, vel scelerisque nisl consectetur.
				</p> */}
			</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
    </div>
  )
}

export default HomeCarousel
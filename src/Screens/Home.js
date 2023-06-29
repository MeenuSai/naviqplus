import React from 'react'
import Product from './Product'
import img1 from '../assets/Veh_img1_Frontpage_header.jpg'
import img2 from '../assets/Fastag header2.jpg'
import img3 from '../assets/Toll_img_Frontpage_header.jpg'
import img4 from '../assets/products_Header.jpg'
import NavBar from '../Components/NavBar'
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    return (
        <>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          style={{height:"70vh"}}
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
          style={{height:"70vh"}}
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
          style={{height:"70vh"}}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            {/* <div>Home</div> */}
            {/* <div  style={{display:"flex", height:"70vh", }}>
                <img src={homeImg} alt='homeImg' width="100%">
                
                </img>
            </div> */}
            
            {/* <Product/> */}
        </>
        
        
    )
}

export default Home
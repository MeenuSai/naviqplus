import React, { useRef} from 'react';
import HomeProducts from '../Contents/HomeProducts';
import SoftwareContent from '../Contents/SoftwareContent';
import Features from '../Contents/Features';
import BuyNow from '../Contents/BuyNow';
import HomeFooter from '../Contents/HomeFooter';
import HomeCarousel from '../Contents/HomeCarousel';
const Home = () => {

return (
	<div className='App'>
		<HomeCarousel/>
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

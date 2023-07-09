import React, { useRef, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineMenuOpen } from 'react-icons/md'; // Import the desired icon from FontAwesome
import ScrollToTop from '../Components/ScrollToTop';
import HomeCarousel from '../Contents/HomeCarousel';
import HomeProducts from '../Contents/HomeProducts';
import SoftwareContent from '../Contents/SoftwareContent';
import Features from '../Contents/Features';
import BuyNow from '../Contents/BuyNow';
import HomeFooter from '../Contents/HomeFooter';
import { Link as ScrollLink } from 'react-scroll';

function NavBar() {
	const homeCarouselRef = useRef(null);
	const homeProductsRef = useRef(null);
	const softwareContentRef = useRef(null);
	const buyNowRef = useRef(null);
	const contactUsRef = useRef(null);
	const [showOffcanvas, setShowOffcanvas] = useState(false);

	const scrollToSection = (elementRef) => {
	  setShowOffcanvas(false);
	  elementRef.current.scrollIntoView({ behavior: 'smooth' });
	};
  
	const handleNavItemClick = (elementRef) => {
	  setTimeout(() => scrollToSection(elementRef), 300);
	};
  
	return (
		<>
			{[ 'sm'].map((expand) => (
				<Navbar key={expand} expand={expand} className="navbarcolor ">
					<Container fluid>
					<Navbar.Brand href="#">NaviqPlus ProTracker</Navbar.Brand>
					<Navbar.Toggle
						style={{ outline: 'none', border: 'none' }}
						aria-controls={`offcanvasNavbar-expand-${expand}`}
						onClick={() => setShowOffcanvas(!showOffcanvas)}
					>
						<MdOutlineMenuOpen />
					</Navbar.Toggle>
					<Navbar.Offcanvas
						show={showOffcanvas}
						onHide={() => setShowOffcanvas(false)}
						style={{ width: '40%' }}
						id={`offcanvasNavbar-expand-${expand}`}
						aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
						placement="end"
					>
						<Offcanvas.Body className="navbarcolor">
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link>
								<ScrollLink
									to="homeCarousel"
									spy
									smooth
									offset={-56}
									duration={500}
									onClick={() => setShowOffcanvas(false)}
									className="nav-link"
								>
								Home
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink
									to="homeProducts"
									spy
									smooth
									offset={-56}
									duration={500}
									onClick={() => setShowOffcanvas(false)}
									className="nav-link"
								>
								Products
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink
									to="softwareContent"
									spy
									smooth
									offset={-56}
									duration={500}
									onClick={() => setShowOffcanvas(false)}
									className="nav-link"
								>
								Software
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink
									to="buyNow"
									spy
									smooth
									offset={-56}
									duration={500}
									onClick={() => setShowOffcanvas(false)}
									className="nav-link"
								>
								BuyNow
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink
									to="contactUs"
									spy
									smooth
									offset={-56}
									duration={500}
									onClick={() => setShowOffcanvas(false)}
									className="nav-link"
								>
								ContactUs
								</ScrollLink>
							</Nav.Link>
							<Nav.Link>
								<ScrollLink
									to="contactUs"
									spy
									smooth
									offset={-56}
									duration={500}
									onClick={() => setShowOffcanvas(false)}
									className="nav-link"
								>
								AboutUs
								</ScrollLink>
							</Nav.Link>
						</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
					</Container>
				</Navbar>
		))}
		<div className='App'>
			<div id="homeCarousel" ref={homeCarouselRef}>
				<HomeCarousel/>
			</div>
			<div id="homeProducts" ref={homeProductsRef}>
				<HomeProducts/>
			</div>
			<div id="softwareContent" ref={softwareContentRef}>
				<SoftwareContent/>
				<Features/>
			</div>
			<div id="buyNow" ref={buyNowRef}>
				<BuyNow/>
			</div>
			<div id="contactUs" ref={contactUsRef}>
				<HomeFooter/>
			</div>
		</div>
		</>
  );
}

export default NavBar;
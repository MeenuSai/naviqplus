import React from 'react';

const HomeFooter = () => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="footerSection">
        <h6>NaviqTracker</h6>
        <h4>About Us</h4>
          
        </div>
        <div className="footerSection">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Software</a>
            </li>
             
          </ul>
        </div>
        <div className="footerSection">
          <h4>Contact Us</h4>
          <p>123 Main Street, City, State 12345</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@NaviqTracker.com</p>
        </div>
        <div className="footerSection">
            <h4>Follow Us</h4>
            <div className="socialMediaLinks">
                <ul>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">Instagram</a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
      
      <div className="footerBottom">
        <p>&copy; 2023 NaviqTracker. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default HomeFooter;

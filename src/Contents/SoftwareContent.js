import React from "react";
 
const SoftwareContent = () => {
  return (
    <section className="powering-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h2>Powering GPS Tracking Businesses of Any Size</h2>
            <p>
              NaviqTracker offers a comprehensive GPS tracking solution that
              caters to businesses of all sizes. Whether you have a small fleet
              or a large enterprise, our platform is designed to meet your
              needs.
            </p>
            <ul>
              <li>Real-time tracking and location updates</li>
              <li>Detailed reports and analytics</li>
              <li>Geofencing and custom alerts</li>
              <li>Driver behavior monitoring</li>
              <li>Integration with other business systems</li>
            </ul>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-6 col-md-12">
            <img
              src={require('../assets/products_Header.jpg')}
              alt="GPS Tracking"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareContent;

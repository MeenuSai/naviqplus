import React from "react";
 
const Features = () => {
  return (
    <section className="powerful-features-section">
      <div className="container">
        <h2 className="section-title">What can NaviqTracker Do for You?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src={require('../assets/maps/live-tracking.png') }  height={80} width={100}/>
            <h3 className="feature-title">Real-time Car Tracking</h3>
            <p className="feature-description">Track and monitor your vehicles in real-time with accurate location updates.</p>
          </div>
          <div className="feature-card">
            <img src={require('../assets/maps/gps.png') }  height={80} width={100}/>
            <h3 className="feature-title">Geo-Fence Alerts</h3>
            <p className="feature-description">Set up virtual boundaries and receive instant alerts when vehicles enter or exit the defined areas.</p>
          </div>
          <div className="feature-card">
            <img src={require('../assets/maps/bar-graph.png') }  height={80} width={100}/>
            <h3 className="feature-title">Detailed Reports</h3>
            <p className="feature-description">Generate comprehensive reports on vehicle usage, routes, and driver behavior for analysis and optimization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

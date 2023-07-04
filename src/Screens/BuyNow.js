import React from 'react'

const BuyNow = () => {
  return (
    <div className="buyNowContainer">
    <div className="gpsImageContainer">
      <img
        src={require('../assets/maps/1.jpg') } // Replace with the actual path to your GPS image
        alt="GPS"
        className="gpsImage"
      />
    </div>
    <div className="contactDetailsContainer">
      <h2>Contact Details</h2>
      <p>
        NaviqPlus GPS Tracker with Airtel SIM
        2099+GST
      </p>
      <p>
        Phone: 123-456-7890 <br />
        Email: example@example.com
      </p>
    </div>
  </div>
  )
}

export default BuyNow
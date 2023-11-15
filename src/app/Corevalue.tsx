import * as React from "react";
import Image from 'next/image'


import Slider from "react-slick"; 

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings2 = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    autoplay:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [    
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

function Corevalue() {
   
    return (        
        <div>
<div className="head-part text-center noafter"><h2>Core Values</h2></div>
      <Slider {...settings2} className="deepsec04-a10 about-second-p ">
      <div className="item box">
      <Image
          src="/assets/webimages/about-ftrimg-n1.webp"
          alt="QUALITY RELATIONSHIP"
          className="img-responsive"
          width={250}
          height={257}
          priority
        /> 
        <div className="content">
            <h3>Quality Relationship</h3>                          
            <p>We believe in trust, loyalty & creating relationships with our customers, business partners, employees & other stakeholders.</p>
        </div>
      </div>
      <div className="item box">
      <Image
          src="/assets/webimages/about-ftrimg-n2.webp"
          alt="RELIABILITY"
          className="img-responsive"
          width={250}
          height={257}
          priority
        /> 
        <div className="content">
            <h3>Reliability </h3>                          
            <p>We go the extra mile to deliver on our commitments, and have the reputation of ‘Zero Rejection’ of our products till date.</p>
        </div>
      </div>
      <div className="item box">
      <Image
          src="/assets/webimages/about-ftrimg-n3.webp"
          alt="DISTINCTION"
          className="img-responsive"
          width={250}
          height={257}
          priority
        />         
        <div className="content">
         <h3>Distinction</h3>
         <p>We deliver unmatchable value through our stringent practices and world-class processes.</p>
        </div>        
      </div>
      <div className="item box">
      <Image
          src="/assets/webimages/about-ftrimg-n4.webp"
          alt="RELIABILITY"
          className="img-responsive"
          width={250}
          height={257}
          priority
        /> 
        <div className="content">
          <h3>Focus</h3>
          <p>We stand firm in our Vision to build a stronger and robust India.</p>
        </div>
      </div>
      <div className="item box">
      <Image
          src="/assets/webimages/about-ftrimg-n5.webp"
          alt="RELIABILITY"
          className="img-responsive"
          width={250}
          height={257}
          priority
        /> 
        <div className="content">
          <h3>Innovation</h3>
          <p>We constantly adopt new and transformative techniques to enhance our portfolio of offerings. </p>
        </div>
      </div>
      <div className="item box">
      <Image
          src="/assets/webimages/about-ftrimg-n2.webp"
          alt="RELIABILITY"
          className="img-responsive"
          width={250}
          height={257}
          priority
        /> 
        <div className="content">
            <h3>Reliability </h3>                          
            <p>We go the extra mile to deliver on our commitments, and have the reputation of ‘Zero Rejection’ of our products till date.</p>
        </div>
      </div>
      </Slider> <br/>
      </div>
)
}

export default Corevalue;
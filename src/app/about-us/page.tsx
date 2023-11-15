'use client'
import React from "react";
import Head from "next/head";




import Corevalue from '../Corevalue';

import Image from 'next/image'

import Slider from "react-slick"; 

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

var settings1 = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 500,
    autoplay:true,
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
 

function Aboutus() {
   
    return (        
        <div>
        <title>About - TitleMetaNextjs</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />


            <div className="inside-banner containerfluid aboutusbanner aboutusbannern" style={{marginBottom:'0'}}>
            
        <img
          src="/assets/images/x4th.webp"
          srcSet="/assets/images/about-mobile.jpg 680w, /assets/images/x4th.webp 1280w"
          sizes="(max-width: 680px) , 1280w"
          alt="Steel bar manufacture in hyderabad"
          className="img-responsive"
        />
        </div>
        <div className="ms-section-btm abput-wrap">
        
        <div className="container-fluid about-first-p madeofsteal about-top">
      
      <div className="row">
	 
          <div className="col-sm-7">
              <div className="colrightfl">
              <div className="colright">
                 
                    <div className="parat">
   
                    
                    <p>The Radha group, synonymous with excellence, is a testament to the visionary leadership of the Late Shri Radheshyam Ji Saraf, who founded the company in the 1960s. His legacy, marked by remarkable growth and success, was carried forward by his illustrious sons, Shri Sunil Saraf and Shri Suman Saraf, who took the company from strength to strength. The Radha group, now a pinnacle of achievement, is a true reflection of their unwavering commitment to excellence and dedication to upholding the highest standards of quality and innovation.<br/><br/>

Presently, the Radha group holds a distinguished position as a premier producer of top-notch infrastructural steel products, poised to meet the increasing demand of India's rapidly evolving markets. Operating from its cutting-edge plants, located in Shankarampet, Chegunta village in Medak district, the group caters to the infrastructure needs of South India with its high-quality steel products. <br/><br/>

Equipped with state-of-the-art steel melting induction furnaces, a fully automated high-speed steel rolling mill, Continuous Casting Machine (CCM), and world-class testing facilities, the manufacturing units are committed to producing superior primary steel, reflecting the group's persistent commitment to excellence and tireless pursuit of innovation.<br/><br/>

Radha TMT, the leading manufacturer of premium quality infrastructural steel products, offers two exceptional products- Radha 550D LRF and Rhino 600+. The former is designed to cater to the diverse needs of heavy-duty constructions such as buildings, hospitals, bridges, and complex structures. At the same time, the latter is tailored to meet the requirements of residential usage. <br/><br/>
Radha 550D LRF has superior bendability and seamless weldability, making it an ideal choice for large-scale construction projects requiring superior steel. On the other hand, Rhino 600+, with its exceptional strength and durability, is perfect for home usage, such as building houses, apartments, and other residential buildings. Whether it's the construction of towering skyscrapers or elegant residential structures, Radha TMT's exceptional products deliver unparalleled performance, quality, and reliability.
</p>
                    
                    <br/>
                  </div>
          </div>
          </div>
          </div>

	  
          <div className="col-sm-5">
          <Image
          src="/assets/images/abtbanner-01n-copy.webp"
          alt="best tmt bar manufacture in hyderabad"
          className="img-responsive"
          width={756}
          height={1073}
          priority
        />         
          </div>
		  
		  
        <br/>
    </div> 
    </div>
 
    <div className="container-fluid about-second-p wthhead-abtp about-second-part">
    <Corevalue/>

    </div>
    <div className="container-fluid about-second-p about-third-p wthhead-abtp">
      <div className="head-part text-center"><h2>Decades of excellence &amp; growth</h2></div>
    </div>

    <div className="container-fluid about-second-p about-third-p desktopaboutxyz">
	<div className="row"><div className="col-sm-12">
    <Image
          src="/assets/images/radhatmt_journeypage01-n.webp"
          alt="radha tmt journey"
          className="img-responsive"
          width={1920}
          height={1080}
          priority
        />   
     </div></div>
	</div>
    
    <div className="abt-team-section team-section wthhead-abtp">
    <div className="container">
    <div className="container-fluid about-second-p about-third-p wthhead-abtp">
    <div className="head-part text-center"><h2>Taking the Legacy forward</h2>
      <p>At Radha Steel, we place a strong emphasis on values and take pride in the legacy that we uphold.</p></div>
    </div>
    <div className="sdflexdiv">
    <Slider {...settings1} className="deepsec04-a10 about-second-p ">
    <div className="item teambox ">
    <Image
          src="/assets/images/person1.webp"
          alt="radha tmt journey"
          className="img-responsive tmimg"
          width={226}
          height={290}
          priority
        />   
        <div className="info">
        <h4>Sunil Saraf</h4>
        <p>Chairman</p>
        <small>Sunil Saraf, an accomplished businessman who transformed Radha Smelters from a moderately performing company into a leading steel conglomerate</small>
        <a href="#myModal1" className="btnbtn-primary knmore_link" data-toggle="modal" id="myBtn"><span>Know More</span></a>
        </div>
    </div>
    <div className="item teambox ">
    <Image
          src="/assets/images/person2.webp"
          alt="radha tmt journey"
          className="img-responsive tmimg"
          width={226}
          height={290}
          priority
        />   
        <div className="info">
        <h4>Sunil Saraf</h4>
        <p>Chairman</p>
        <small>Sunil Saraf, an accomplished businessman who transformed Radha Smelters from a moderately performing company into a leading steel conglomerate</small>
        <a href="#myModal1" className="btnbtn-primary knmore_link" data-toggle="modal" id="myBtn"><span>Know More</span></a>
        </div>
    </div>
    <div className="item teambox ">
    <Image
          src="/assets/images/person3.webp"
          alt="radha tmt journey"
          className="img-responsive tmimg"
          width={226}
          height={290}
          priority
        />   
        <div className="info">
        <h4>Sunil Saraf</h4>
        <p>Chairman</p>
        <small>Sunil Saraf, an accomplished businessman who transformed Radha Smelters from a moderately performing company into a leading steel conglomerate</small>
        <a href="#myModal1" className="btnbtn-primary knmore_link" data-toggle="modal" id="myBtn"><span>Know More</span></a>
        </div>
    </div>
    <div className="item teambox ">
    <Image
          src="/assets/images/person4.webp"
          alt="radha tmt journey"
          className="img-responsive tmimg"
          width={226}
          height={290}
          priority
        />   
        <div className="info">
        <h4>Sunil Saraf</h4>
        <p>Chairman</p>
        <small>Sunil Saraf, an accomplished businessman who transformed Radha Smelters from a moderately performing company into a leading steel conglomerate</small>
        <a href="#myModal1" className="btnbtn-primary knmore_link" data-toggle="modal" id="myBtn"><span>Know More</span></a>
        </div>
    </div>
    <div className="item teambox ">
    <Image
          src="/assets/images/person5.webp"
          alt="radha tmt journey"
          className="img-responsive tmimg"
          width={226}
          height={290}
          priority
        />   
        <div className="info">
        <h4>Sunil Saraf</h4>
        <p>Chairman</p>
        <small>Sunil Saraf, an accomplished businessman who transformed Radha Smelters from a moderately performing company into a leading steel conglomerate</small>
        <a href="#myModal1" className="btnbtn-primary knmore_link" data-toggle="modal" id="myBtn"><span>Know More</span></a>
        </div>
    </div>
    <div className="item teambox ">
    <Image
          src="/assets/images/person3.webp"
          alt="radha tmt journey"
          className="img-responsive tmimg"
          width={226}
          height={290}
          priority
        />   
        <div className="info">
        <h4>Sunil Saraf</h4>
        <p>Chairman</p>
        <small>Sunil Saraf, an accomplished businessman who transformed Radha Smelters from a moderately performing company into a leading steel conglomerate</small>
        <a href="#myModal1" className="btnbtn-primary knmore_link" data-toggle="modal" id="myBtn"><span>Know More</span></a>
        </div>
    </div>
    </Slider><br/>
    </div>
    </div>
    </div>

        </div>

        </div>    
    )
}
export default Aboutus
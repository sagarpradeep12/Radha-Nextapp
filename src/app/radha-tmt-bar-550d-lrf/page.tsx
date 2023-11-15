'use client'

import * as React from "react";



import Slider from "react-slick"; 

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from 'next/image'

var settings0 = {
  dots:false,
  arrows:false,
  infinite: true,
  speed: 500,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 1
};

var settings1 = {
  dots:false,
  arrows:false,
  infinite: true,
  speed: 500,
  autoplay:true,
  slidesToShow: 4,
  slidesToScroll: 1
};

function index() {
   
    return (        
        <div>
          <title>Radha-tmt-bar-550d-lrf - TitleMetaNextjs</title>
            <meta
              name="description"
              content="Meta description for the Radha-tmt-bar-550d-lrf  page"
            />

            <div className="inside-banner containerfluid aboutusbanner aboutusbannern" style={{marginBottom:'0'}}>
            <Image
          src="/assets/images/fe550-banner.jpg"
          alt="contact us"
          className="img-responsive"
          width={1920}
          height={296}
          priority
        /> 
        </div>
        <div className="producte-section container-fluid madeofsteal01" style={{minHeight:'auto', padding:'0'}}>
          <div className="row rown">
            <div className="col-sm-8">
          <div className="colsm8n">
          <h1 className="hheading">550 D LRF</h1>
          <p>TMT 550 D LRF, the first-of-its-kind infrastructural steel bar in South India manufactured using cutting-edge LRF technology, boasts excellent ductility, making it an ideal choice for infrastructural construction projects that require resistance to natural calamities and other disasters. The TMT bars are produced using virgin iron ore and undergo high-tech LRF and Thermax technology, resulting in superior quality 550D grade TMT Bars ranging from 8mm to 32 mm in diameter.</p>
          <p>Furthermore, the higher tensile strength of LRF 550D makes it an excellent option for various applications such as coastal and marine engineering and construction, bridge and tunnel building, high-rise structures, and reinforced concrete structures. With its exceptional strength and durability, LRF 550D provides reliable and long-lasting infrastructural solutions even in extreme conditions.</p>
            </div> </div>
          
        <div className="col-sm-4"><div className="proimg">
        <Image
          src="/assets/images/radha-550d-lrf.jpg"
          alt="tmt 550 steel price today hyderabad"
          className="img-responsive"
          width={614}
          height={454}
          priority
        />         
            </div> 
            </div>
          </div>
        </div>

        <div className="producte-section container-fluid madeofsteal02">
          <div className="row">
            <div className="col-sm-12"><h2>FEATURES </h2>  </div>
          </div>          
          <div className="row fe550row fe550rown">
          <div className="col-sm-4"><h2>Higher <br/> Ductility <br/> <span>As lower phosphorous <br/> reduces brittleness</span></h2></div>         
          <div className="col-sm-4"><h2>LOWER CARBON <br/>LEVEL<br/><span>Adds to ductility, corrosion resistance and toughness</span></h2></div>         
          <div className="col-sm-4"><h2>BETTER <br/>WELDABILITY <br/> <span>As lower sulphur improves heat resistance</span></h2></div>
          <div className="col-sm-4"><h2>HIGHER FIRE<br/> RESISTANCE<br/> <span>Makes it ideal for high-rise Constructions</span></h2></div> 
          <div className="col-sm-4"><h2>UPTO 18%<br/> ELONGATION<br/> <span>Makes it ideal for construction in seismic zones</span></h2></div> 
          </div>
        </div>

  

        </div>    
    )
}
export default index
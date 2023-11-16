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

function Technology() {
   
    return (        
        <div>
             <title>Technology - TitleMetaNextjs</title>
            <meta
              name="description"
              content="Meta description for the Technology  page"
            />

            <div className="inside-banner containerfluid aboutusbanner aboutusbannern" style={{marginBottom:'0'}}>
            <Image
          src="/assets/images/technology-banner.jpg"
          alt="contact us"
          className="img-responsive"
          width={1920}
          height={296}
          priority
        /> 
        </div>
        <div className="producte-section container-fluid technosec01" style={{minHeight: 'auto',overflow: 'hidden'}}>
          <div className="rowf">
          <div className="col-sm-6">
          <div className="technosec01-a">
              <h1 className="refining">LADLE REFINING FURNACE (LRF)</h1>            
            
                <p>Ladle Refining Furnace or LRF technology refines and purifies the steel by reducing Sulphur, Phosphorus, and dissolved gas levels as per BIS norms to provide strength and flexibility.</p>
            </div>
          </div>
          <div className="col-sm-6"><div className="technosec01-b">
          <Image
              src="/assets/images/technoban-03.jpg"
              alt="Ladle Refining Furnace or LRF technology refines"
              width={894}
              height={520}
              priority
            />            
          </div>
          </div>
          </div>
        </div>

        <div className="producte-section container-fluid technosec02" style={{minHeight: 'auto',overflow: 'hidden'}}>
        <div className="row">
        <div className="col-sm-6"><div className="technosec01-b">
        <Image
              src="/assets/images/radha-01-an.webp"
              alt="German-designed quenching and tempering technology- Thermex®"
              width={755}
              height={468}
              priority
            />          
        </div></div>
        <div className="col-sm-6">
        <div className="technosec01-a">
            <h2>Thermex Technology</h2>
            <p>German-designed quenching and tempering technology- Thermex® ensures uniformity in strength, toughness, ductility, and weldability in TMT bars. Thus, making them ideal for infrastructure and high-rise residential constructions.</p>
          </div>
        </div>	
        </div>
      </div>

      <div className="producte-section container-fluid technosec03" style={{minHeight: 'auto',overflow: 'hidden'}}>
        <div className="row">
        <div className="col-sm-6">
        <div className="technosec01-a">
            <h2>Automated steel rolling mill</h2>        
      <p>The automated steel rolling mill is a fully automated technology that provides a higher level of uniformity in quality to Radha TMT bars.<br/>
      Benefits include:<br/>
      Consistent ribs- ensures excellent bonding when mixed with concrete<br/>
      Uniform gauge- gives consistency to the weight and diameter<br/>
      Quenching and Thirsting- turns TMT bars extremely strong from the outside and ductile inside
      </p>
          </div>
        </div>
        <div className="col-sm-6"><div className="technosec01-b">
        <Image
              src="/assets/images/technoban-05.jpg"
              alt="Ladle Refining Furnace or LRF technology refines"
              width={894}
              height={520}
              priority
            />         
        </div></div>
        </div>
      </div>

      <div className="producte-section container-fluid technosec04" style={{minHeight: 'auto',overflow: 'hidden'}}>
      <h2>Manufacturing Process</h2>
  <div className="row">  
  

<div className="technosec04-a">
<Slider {...settings0} className="videosection">

            <div className="probox item">
            <div className="image">
            <Image
                  src="/assets/images/mowl-01-1.jpg"
                  alt="tmt bar manufacturing process"
                  className="img-responsive"
                  width= {497}
                  height={316}
                  priority
                />		
              <div className="wrpcontent">
              <p style={{color:'#fff', textAlign: 'center', marginTop:'10px'}}><small>Stage 1</small></p>
              <p>The casted hot Billets are then immediately rolled into the Automized Rolling Mill through hot Conveyor Belt. This avoids the reheating and changes in the chemical composition of the Billets.</p>
              </div></div>		
          
        </div>


            <div className="probox item">
            <div className="image">
            <Image
                  src="/assets/images/mowl-01-2.jpg"
                  alt="tmt bar manufacturing process"
                  className="img-responsive"
                  width= {497}
                  height={316}
                  priority
                /> 	
              <div className="wrpcontent">
              <p style={{color:'#fff', textAlign: 'center', marginTop:'10px'}}><small>Stage 2</small></p>
              <p>The casted hot Billets are then immediately rolled into the Automized Rolling Mill through hot Conveyor Belt. This avoids the reheating and changes in the chemical composition of the Billets.</p>
              </div></div>			
          
        </div>

      <div className="probox item">

            <div className="image">
            <Image
                  src="/assets/images/mowl-01-3.jpg"
                  alt="tmt bar manufacturing process"
                  className="img-responsive"
                  width= {497}
                  height={316}
                  priority
                /> 			
              <div className="wrpcontent">
              <p style={{color:'#fff', textAlign: 'center', marginTop:'10px'}}><small>Stage 3</small></p>
              <p>The casted hot Billets are then immediately rolled into the Automized Rolling Mill through hot Conveyor Belt. This avoids the reheating and changes in the chemical composition of the Billets.</p>
              </div>
              </div>	
        </div>

        <div className="probox item">

            <div className="image">
            <Image
                  src="/assets/images/mowl-01-4.jpg"
                  alt="tmt bar manufacturing process"
                  className="img-responsive"
                  width= {497}
                  height={316}
                  priority
                /> 				
              <div className="wrpcontent">
              <p style={{color:'#fff', textAlign: 'center', marginTop:'10px'}}><small>Stage 4</small></p>
              <p>The casted hot Billets are then immediately rolled into the Automized Rolling Mill through hot Conveyor Belt. This avoids the reheating and changes in the chemical composition of the Billets.</p>
              </div>
              </div>
        </div>

               
            
        </Slider>

  </div>
  </div>
  </div><br/>

  
<div className="madeofsteal qultyrow container-fluid technosec05">
<div className="row">
<div className="col-sm-12"><div className="technosec01-a">
<h2>QUALITY PROCESS <br/> MANAGEMENT</h2>
<p>Test conducted at 10 stages of the manufacturing process</p><br/>
</div>
</div>

<div className="col-sm-12">
<div className="technosec01-b">
<Slider {...settings1} className="homedemo5">
<div className="qultybox">
<div className="colsm6">
<Image
    src="/assets/images/img-q-01.png"
    alt="QUALITY PROCESS MANAGEMENT"
    className="img-responsive"
    width= {295}
    height={295}
    priority
  /> 
<small>Stage 6</small>
<h3>The Hardness Test</h3>
</div> 
</div>
<div className="qultybox">
<div className="colsm6">
<Image
    src="/assets/images/img-q-02.png"
    alt="QUALITY PROCESS MANAGEMENT"
    className="img-responsive"
    width= {295}
    height={295}
    priority
  /> 
<small>Stage 6</small>
<h3>The Hardness Test</h3>
</div> 
</div>
<div className="qultybox">
<div className="colsm6">
<Image
    src="/assets/images/img-q-03.png"
    alt="QUALITY PROCESS MANAGEMENT"
    className="img-responsive"
    width= {295}
    height={295}
    priority
  /> 
<small>Stage 6</small>
<h3>The Hardness Test</h3>
</div> 
</div>
<div className="qultybox">
<div className="colsm6">
<Image
    src="/assets/images/img-q-04.png"
    alt="QUALITY PROCESS MANAGEMENT"
    className="img-responsive"
    width= {295}
    height={295}
    priority
  /> 
<small>Stage 6</small>
<h3>The Hardness Test</h3>
</div> 
</div>
<div className="qultybox">
<div className="colsm6">
<Image
    src="/assets/images/img-q-05.png"
    alt="QUALITY PROCESS MANAGEMENT"
    className="img-responsive"
    width= {295}
    height={295}
    priority
  /> 
<small>Stage 6</small>
<h3>The Hardness Test</h3>
</div> 
</div>
</Slider>
</div>

</div>
</div>
</div>


        </div>    
    )
}
export default Technology
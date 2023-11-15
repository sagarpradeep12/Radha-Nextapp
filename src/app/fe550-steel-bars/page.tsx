'use client'

import * as React from "react";


import Image from 'next/image'

function index() {
   
    return (        
        <div>
            <title>Fe550-steel-bars - TitleMetaNextjs</title>
            <meta
              name="description"
              content="Meta description for the fe550-steel-bars page"
            />

            <div className="inside-banner containerfluid aboutusbanner aboutusbannern" style={{marginBottom:'0'}}>
            <Image
          src="/assets/images/fe550-steel-bars.webp"
          alt="rodimgc"
          className="img-responsive"
          width={1920}
          height={296}
          priority
        /> 
        </div>
        
        <div className="producte-section container-fluid madeofsteal">
          <div className="row">
            <div className="col-sm-5">
              <div className="proimg">
              <Image
                  src="/assets/images/rodimgc-n01.jpg"
                  alt="TMT FE 550 Steel Bar"
                  className="img-responsive"
                  width={756}
                  height={629}
                  priority
                /> 
            </div> 
            </div>
            <div className="col-sm-7">
          <div className="colsm8n">
          <h1 className="hheading"> Fe 550 Steel Bar </h1>
            <p>TMT 550 Steel Bar offers an excellent construction solution due to its versatility, durability, and high strength. It is manufactured with the state-of-the-art German Thermex technology and specially processed to make it resistant to corrosion. It is a chosen construction material for building underground constructions, water reservoirs, bridges, and more. </p>          
            </div> 
            </div>
          </div>
        </div>

        
        <div className="producte-section container-fluid madeofsteal02 madeofsteal02n">
          <div className="row">
            <div className="col-sm-12"><h2>FEATURES </h2>  </div>
           </div>	 
        <div className="row fe550row fe550rown fe550rown1">
        <div className="col-sm-4 "><h2>Easy working <br/> at site</h2></div> 
        <div className="col-sm-4"><h2>Resistant to<br/> Earthquake</h2></div> 
        <div className="col-sm-4"><h2>High Bonding<br/> Strength</h2></div>
        <div className="col-sm-4 col-md-6"><h2>High Durability <br/>and Malleability</h2></div> 
        <div className="col-sm-4 col-md-6"><h2>Resistant to<br/> corrosion and fire</h2></div> 
        </div>
        </div>


 
        </div>    
    )
}
export default index
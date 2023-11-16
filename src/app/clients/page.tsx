'use client'

import * as React from "react";

import Link from 'next/link';




import Image from 'next/image'


function ClientComp() {
   
    return (        
        <div>
          <title>Clients - TitleMetaNextjs</title>
            <meta
              name="description"
              content="Meta description for the Clients  page"
            />

            <div className="inside-banner containerfluid aboutusbanner aboutusbannern" style={{marginBottom:'0'}}>
            <Image
          src="/assets/images/clints-banner.jpg"
          alt="contact us"
          className="img-responsive"
          width={1920}
          height={296}
          priority
        /> 
        </div>

        <div className="ms-section-btm container client-logo-wrap clientsgh client001p" style={{marginTop:'0px'}}>
    
          <h1 className="headpart uppercase">Clients</h1>	 
          <div className="row clintstal">
              
            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/clt01.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div>  

            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/clt02.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div>  

            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/clt03.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div>  

            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/clt04.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div>  

            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/clt05.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div> 
            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/logos-5.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div> 
            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/logos-6.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div>  
            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/logos-7.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div> 
            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/logos-8.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div> 
            <div className="col-sm-3">
            <div className="client-logo">
            <Image
                          src="/assets/images/clients/logos-9.jpg"
                          alt="tmt bar manufacturing process"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                      
            </div>
            </div> 
      
    </div>

    

    <div className="producte-section container-fluid deepsec04v" style={{minHeight: 'auto'}}>
    <h2>Testimonials </h2> <br/><br/>
<div className="deepsec04-a0">
    
    <div className="row clintstaln">
        <div className="col-sm-4">
    		<div className="video-thumb">
    		    <Link className="video-container" href="https://www.youtube.com/watch?v=EzPzPWq9pgI"> 
            <Image
                          src="/assets/images/sddefault.jpg"
                          alt="vd"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                        <i className="fa fa-youtube-play" style={{position:'absolute',top:'50%',left:'50%',marginLeft: '-38px',marginTop:'-60px',color:'#d32622', fontSize: '76px'}}> </i>
                       
                </Link>
    		</div>
        </div>

        <div className="col-sm-4">
    		<div className="video-thumb">
    		    <Link className="video-container" href="https://www.youtube.com/watch?v=EzPzPWq9pgI"> 
            <Image
                          src="/assets/images/sddefault.jpg"
                          alt="vd"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                        <i className="fa fa-youtube-play" style={{position:'absolute',top:'50%',left:'50%',marginLeft: '-38px',marginTop:'-60px',color:'#d32622', fontSize: '76px'}}> </i>
                       
                </Link>
    		</div>
        </div>

        <div className="col-sm-4">
    		<div className="video-thumb">
    		    <Link className="video-container" href="https://www.youtube.com/watch?v=EzPzPWq9pgI"> 
            <Image
                          src="/assets/images/sddefault.jpg"
                          alt="vd"
                          className="img-responsive"
                          width= {497}
                          height={316}
                          priority
                        />
                        <i className="fa fa-youtube-play" style={{position:'absolute',top:'50%',left:'50%',marginLeft: '-38px',marginTop:'-60px',color:'#d32622', fontSize: '76px'}}> </i>
                       
                </Link>
    		</div>
        </div>
        
        
        
        
        
    </div>
    
    </div>
    </div>
    
    </div>

    

	
        </div>    
    )
}
export default ClientComp;
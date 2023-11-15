'use client'
import React from "react";
import Image from 'next/image'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function ClientSlider() { 
  var settings01 = {
    dots: true,
    arrows:false,
    infinite: true,
    margin:10,
    speed: 500,
    autoplay:true,
    slidesToShow: 8,
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
    return (   
           
      <div>
        <div className="ms-section-btm container client-logo-wrap clientsgh" style={{'background':'transparent'}}>
          <h2 className="headpart uppercase">Clients</h2>
        <Slider {...settings01} className="clintstal row">
      <div className="image">
          <Image
              src="/assets/images/clients/clt01.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/images/clients/clt02.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>    
      <div>
      <Image
              src="/assets/images/clients/clt03.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/images/clients/clt04.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/images/clients/clt05.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/images/clients/clt01.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/images/clients/clt06.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-2.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-4.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-5.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-26.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-45.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-4-0.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-4-1.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-4-2.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
      <div>
      <Image
              src="/assets/webimages/clients/logos-4-3.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
      </div>
    </Slider><br/>
     
     
     
     </div>
     </div>
     

    
    )
}
export default ClientSlider
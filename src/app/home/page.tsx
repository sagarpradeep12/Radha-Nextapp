'use client'

import * as React from "react";
import Image from 'next/image'
import Link from 'next/link';
import Corevalue from '../Corevalue';
import ClientSlider from '../clients'
import SimpleImageSlider from "react-simple-image-slider";
import Slider from "react-slick"; 

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





/*
const images = [
  { url: "/assets/images/banner1_desktop.webp" },
  { url: "/assets/images/banner2_desktop.webp" },
  { url: "/assets/images/banner3_desktop.webp" },
  { url: "/assets/images/banner4_desktop.webp" },
];*/

var settings0 = {
  dots:true,
  arrows:true,
  infinite: true,
  speed: 500,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1
};
var settings1 = {
  dots: false,
  arrows:true,
  infinite: true,
  speed: 500,
  autoplay:false,
  slidesToShow: 4,
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


var settings3 = {
  dots: true,
  arrows:true,
  infinite: true,
  speed: 500,
  autoplay:false,
  slidesToShow: 3,
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
var settings4 = {
  dots: true,
  arrows:false,
  infinite: true,
  speed: 500,
  autoplay:false,
  slidesToShow: 2,
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



function HomeComponent() { 
  
    return (   
           
      <div>
        <Slider {...settings0} className="video-section desktopvw ">
        <div className="item">
        <Image
              src="/assets/images/banner1_desktop.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width= {1921}
              height={501}
              priority
            />
        </div>
        <div className="item">
        <Image
              src="/assets/images/banner2_desktop.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width= {1921}
              height={501}
              priority
            />
        </div>
        <div className="item">
        <Image
              src="/assets/images/banner3_desktop.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width= {1921}
              height={501}
              priority
            />
        </div>
        <div className="item">
        <Image
              src="/assets/images/banner4_desktop.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width= {1921}
              height={501}
              priority
            />
        </div>
        </Slider>
      
    
    <style jsx>{`
        .producte-section,.producte-section.deepsec04 {
          min-height: auto
        }
       
      `}</style>
<div className="producte-section container-fluid deepsec01">
  <div className="row feat-top-part">
    <div className="col-sm-12">
        <div className="hm-about-part d-flex">
        <h1>India’s No.1 600+ TMT Steel Bar </h1>
        <div className="para">
            
            <p>Radha TMT is among the pioneers in manufacturing high-quality TMT bars by employing cutting-edge Ladle Refining Furnace (LRF) Technology. TMT bars lay a robust foundation and form the backbone of the structural integrity of your home.</p>
            <p>TMT bars have become incredibly stronger with the Rhino 600+ and remain the numero uno choice of all top engineer consultants. Rhino 600+ has superior strength, ductility, and corrosion resistance, making them ideal for infrastructure and building projects. It is the toughest TMT bar that comes with no crack guarantee to lay the cornerstone for your ideal dream home.</p>
            </div>
        <div className="image">
          <Image
              src="/assets/images/rana.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
            
            </div>
        </div>

        
    </div>

    

    
</div>
 
  
</div>

<div className="producte-section container-fluid deepsec01">           
<div className="rows manufac-feature ">
  
<Slider {...settings1} className="manufac-feature-sl">
        <div className="item forbox col-sm-3 ">
        <h3>Enhanced Bonding Strength</h3> 
        <p>Provides superior reinforcement to your structures with enhanced bonding strength. Its superior manufacturing process fuses concrete and steel to create a long-lasting bond, ensuring increased resistance to natural calamities such as earthquakes and heavy loads.</p>
        </div>
        <div className='item forbox col-sm-3 '>
        <h3>Impressive Bendability</h3> <p>Rhino 600+ offers exceptional bendability, making it a top choice for construction projects that require superior flexibility and strength. Its unique and innovative design allows for smooth and effortless bending without compromising its durability.</p>
        </div>              
        <div className='item forbox col-sm-3 '>
        <h3>Seamless Weldability</h3> <p>Rhino 600+ allows seamless weldability, making it ideal for construction projects requiring high precision and accuracy. This feature also saves time and reduces costs, allowing for efficient and easy welding without compromising quality.</p>
        </div> 
        <div className='item forbox col-sm-3 '>
        <h3>Top-Notch Fire Resistance</h3> <p>Shield your structures against fire hazards with Rhino 600+, the TMT bar that delivers top-notch fire resistance. This innovative construction material is designed to withstand extreme heat and prevent the spread of fire, providing your building with the highest level of protection.</p>
        </div>   
        <div className='item forbox col-sm-3 '>
        <h3>Impressive Bendability</h3> <p>Rhino 600+ offers exceptional bendability, making it a top choice for construction projects that require superior flexibility and strength. Its unique and innovative design allows for smooth and effortless bending without compromising its durability.</p>
        </div>  
        <div className='item forbox col-sm-3 '>
        <h3>Top-Notch Fire Resistance</h3> <p>Shield your structures against fire hazards with Rhino 600+, the TMT bar that delivers top-notch fire resistance. This innovative construction material is designed to withstand extreme heat and prevent the spread of fire, providing your building with the highest level of protection.</p>
        </div> 
    </Slider>       
</div> 
</div> 

    
<div className="producte-section container-fluid deepsec02" >
  <div className="row">
	<div className="col-sm-6">
    <div className="deepsec02-02">
      <h2 className="headpart uppercase">About </h2>
      <p >Radha group, synonymous with excellence, is a testament to the visionary leadership of the Late Shri Radheshyam Ji Saraf, who founded the company in the 1960s. His legacy, marked by remarkable growth and success, was carried forward by his illustrious sons, Shri Sunil Saraf and Shri Suman Saraf, who took the company from strength to strength. Radha group, now a pinnacle of achievement, is a true reflection of their unwavering commitment to excellence and dedication to upholding the highest standards of quality and innovation...  <br/><Link href="/about-us/"> read more...</Link>
      </p>
    </div>
  </div>
  <div className="col-sm-6">
  <Image
    src="/assets/images/roadimg05.webp"
    alt="best tmt bar companies in india"
    className="img-responsive"
    width={922}
    height={824}
    priority
  />          
  </div>
  </div>

  
 </div> 

 
 
 <div className="container-fluid about-second-p wthhead-abtp about-second-part about-second-part-hm">
      
        
 <Corevalue/>
        
  <div className="producte-section container-fluid deepsec04">
  
    <h2>Testimonials </h2>
        
    <Slider {...settings3} className="manufac-feature-sl deepsec04-a0">
      <div className="image">
          <Link className="video-container" href="https://www.youtube.com/watch?v=JYP4OACRhWI"> 
          <Image
              src="/assets/webimages/sridhar.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
            </Link>
            <p className="t-name"> Mr. Sridhar Gopisetty.</p>
      </div>
      <div className="image">
      <Link className="video-container" href="https://www.youtube.com/watch?v=76TNHO2-EeI&amp;rel=0"> 
          <Image
              src="/assets/webimages/muqid.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
            </Link>
            <p className="t-name"> Mr. Md Muqid.</p>
      </div>
      <div className="image">
      <Link className="video-container" href="https://www.youtube.com/watch?v=f4fTV2RfoGs&amp;rel=0"> 
          <Image
              src="/assets/webimages/dandapani.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
            </Link>
            <p className="t-name">Mr. Dandapani </p>
      </div>
      <div className="image">
      <Link className="video-container" href="https://www.youtube.com/watch?v=f4fTV2RfoGs&amp;rel=0"> 
          <Image
              src="/assets/webimages/lakshmikantha.webp"
              alt="best tmt bar companies in india"
              className="img-responsive"
              width={467}
              height={411}
              priority
            />
            </Link>
            <p className="t-name">Mr. Lakshmikantha Reddy</p>
      </div>
      </Slider> 
	
  </div>

  
<div className="madeofsteal container-fluid">
  <div className="row">
  
    <div className="col-sm-12">
	<div className="techsusbo">
	<br/>
      <h2>TECHNOLOGY AND SUSTAINABILITY</h2><br/>
      <Slider {...settings4} className="homedemo2">        
            <div className="probox">
              <Link className="" href="#"> 
                <div className="image">
                <Image
                src="/assets/webimages/radha-02-a1.webp"
                alt="lrf technology for suprerior quality"
                className="img-responsive"
                width={467}
                height={411}
                priority
              />
              </div>
              <p style={{marginTop:"20px"}}>LRF Technology For Superior Quality </p>
              </Link>
            </div>
            <div className="probox">
              <Link className="" href="#"> 
                <div className="image">
                <Image
                src="/assets/webimages/radha-01-an.webp"
                alt="german thermex technology for strenght and flexibility"
                className="img-responsive"
                width={467}
                height={411}
                priority
              />
              </div>
              <p style={{marginTop:"20px"}}>German THERMEX Technology For Strength & Flexibility </p>
              </Link>
            </div>
            <div className="probox">
              <Link className="" href="#"> 
                <div className="image">
                <Image
                src="/assets/webimages/radha-03-a.webp"
                alt="german thermex technology for strenght and flexibility"
                className="img-responsive"
                width={467}
                height={411}
                priority
              />
              </div>
              <p style={{marginTop:"20px"}}>Leveraging Technology For Constant Innovation </p>
              </Link>
            </div>
            <div className="probox">
              <Link className="" href="#"> 
                <div className="image">
                <Image
                src="/assets/webimages/radha-04-a.webp"
                alt="lrf technology for suprerior quality"
                className="img-responsive"
                width={467}
                height={411}
                priority
              />
              </div>
              <p style={{marginTop:"20px"}}>Sustainable & Environment Friendly </p>
              </Link>
            </div>
         </Slider>       
                
   
                
               
            </div>
            
           
        </div>
    </div> 
    </div>
    
  <ClientSlider></ClientSlider>


    </div>

   

 
            
    
  </div>
  
    
    )
}
export default HomeComponent
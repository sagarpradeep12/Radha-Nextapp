'use client'
import React from "react";





import Image from 'next/image'



function index() {
   
    return (        
        <div>
          <title>Contact - TitleMetaNextjs</title>
        <meta
          name="description"
          content="Meta description for the Contact page"
        />

            <div className="inside-banner containerfluid aboutusbanner aboutusbannern" style={{marginBottom:'0'}}>
            <Image
          src="/assets/images/contactus-banner.jpg"
          alt="contact us"
          className="img-responsive"
          width={1920}
          height={296}
          priority
        /> 
        </div>

        <div className="ms-section-btm container contact-wrap contactus">
  <div className="row">
      <div className="col-sm-4">
          <div className="colleft">
          <h1 className="contac">HEAD OFFICE</h1>
          <div className="address">
            Survey No. 43 and 44, 4th Floor,<br/>
            Plot No. 53, 54, 57 and 58, <br/>
			Mahaveer Radiance, Kauveri Hills,<br/>
            Hyderabad, Rangareddy, <br/>
			Telangana - 500081, India.
         </div><br/>
         <h2>CALL US</h2>
          <div className="phone">
          Phone: 91 91000 94000<br/>
            Office: +91 40-40142774
         </div><br/>
          <h2>EMAIL US</h2>
          <div className="phone">
          marketing@radhatmt.com<br/>
            sales@radhatmt.com<br/>
            careers@radhatmt.com
         </div>
      </div>
  </div>
  
  <div className="col-sm-8">
      <div className="colright">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d237.90244605909442!2d78.39701473306096!3d17.438683542996362!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1682665003665!5m2!1sen!2sus" width="100%" height="450" style={{border:'0'}} loading="lazy" ></iframe>
          </div>
  </div>
  </div>
  <br/>
  <hr/>
  <div className="contact-form text-letf">
      <section>
          <div>
            <div className="rowv">

                  <div className="col-sm-12">
                  

                        <div className="row">
                      <h2>ENQUIRE NOW</h2>
                    </div>
                    
                    <form action="#" className="form-horizontal" id="contactform"  method="post">                    
                    <div className="rowd">
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" placeholder="Name*" data-form-field="Name" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email*" data-form-field="Email" />
                      </div>
                      <div className="form-group">
                        <input type="text" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                      </div>
                      <div className="form-group">
                        <textarea className="form-control" name="message" placeholder="Message"  data-form-field="Message"></textarea>
                      </div>
                      <div>
                        <input type="submit" name="submit" value="CONTACT US" className="btn btn-lg btn-primary"/>
                      </div>
             

                                            </div>
                                            </form>
                  </div>
                </div>

          </div>
        </section>
  </div>
  <br/>
  
</div>

        </div>    
    )
}
export default index

import React from "react";
import Link from 'next/link';
import Image from 'next/image'






function FooterComponent() {
   
    return (        
        
        <div>
            <footer className="footer-section-btm container-fluid">
    
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row justify-content-center">
                            <div className="col-sm-5 btmborder" >
                            <Link className="logobrand" href="#">
                            <Image
                            src="/assets/images/footer-logo.png"
                            alt="best tmt bar companies in india"
                            className="img-responsive"
                            width= {302}
                            height={130}
                            priority
                            />
                            </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                <div className="row d-flex">
                <div className="col-sm-3">
                    <div className="footerbox">
                        <div className="footer-icon">
                        <Image
                            src="/assets/images/footericon1n.png"
                            alt="icon"
                            className="img-responsive"
                            width= {80}
                            height={87}
                            priority
                            />
                        </div>
                        
                        <div className="address">
                    <h3 className="headtop">ADDRESS</h3>
                    
            
            
            
                        Survey No. 43 and 44, 4th Floor, <br/> Plot No. 53, 54, 57 and 58, <br/>Mahaveer Radiance, Kauveri Hills, <br/> Hyderabad, Rangareddy, <br/>Telangana - 500081, India.
                        </div>
                        <div className="socialico">
                        <Link href="https://www.facebook.com/radhatmtofficial" target="_blank" rel="nofollow"><i className="fa fa-facebook"></i></Link>
                        <Link href="https://www.linkedin.com/company/radha-tmt/" target="_blank" rel="nofollow"><i className="fa fa-linkedin"></i></Link>
                        <Link href="https://twitter.com/Radha_TMT" target="_blank" rel="nofollow"><i className="fa fa-twitter"></i></Link>
                        <Link href="https://www.instagram.com/radhatmt/?hl=en" target="_blank" rel="nofollow"><i className="fa fa-instagram"></i></Link>
                        <Link href="https://www.youtube.com/channel/UCXWM_HZQ3l5o5TJyc_T7JeA/featured" target="_blank" rel="nofollow"><i className="fa fa-youtube"></i></Link>
                        </div>
                    </div>
                </div>
                
                
                <div className="col-sm-3">
                    <div className="footerbox">
                        <div className="footer-icon">
                        <Image
                            src="/assets/images/footericon2n.png"
                            alt="icon"
                            className="img-responsive"
                            width= {80}
                            height={87}
                            priority
                            />
                        </div>
                    <h3 className="headtop">CONTACT US</h3>
                    <ul>
                        <li><Link href="mailto:marketing@radhatmt.com"><span className="elementor-icon-list-text">marketing@radhatmt.com</span></Link></li>
                        <li><Link href="mailto:sales@radhatmt.com"><span className="elementor-icon-list-text">sales@radhatmt.com</span></Link></li>
                        <li><Link href="mailto:careers@radhatmt.com"><span className="elementor-icon-list-text">careers@radhatmt.com</span></Link></li>
                        <li><Link href="tel:+91%2091000%2094000"><span className="elementor-icon-list-text">Toll Free : 1800 3000 7500</span></Link></li>
                        <li><Link href="tel:+91%2040-40142774"><span className="elementor-icon-list-text">Office: +91 40-40142774</span></Link></li>
                    </ul>
                    </div>
                </div>
                
                <div className="col-sm-3">
                    <div className="footerbox">
                        <div className="footer-icon">
                        <Image
                            src="/assets/images/footericon5n.png"
                            alt="icon"
                            className="img-responsive"
                            width= {80}
                            height={87}
                            priority
                            />
                        </div>
                    <h3 className="headtop text-uppercase">Quick Links</h3>
                    <ul>
                        <li><Link href="/radha-tmt-bar-550d-lrf">Radha TMT 550D LRF</Link></li>            
                        <li><Link href="/fe550-steel-bars">Radha TMT 550</Link></li>
                        <li><Link href="/media"><span className="elementor-icon-list-text">Media</span></Link></li>
                        <li><Link href="/blog"><span className="elementor-icon-list-text">Blog</span></Link></li>
                        <li><Link href="/careers"><span className="elementor-icon-list-text">Careers</span></Link></li>
                        <li><Link href="/awards"><span className="elementor-icon-list-text">Awards</span></Link></li>
                        <li><Link href="/faq"><span className="elementor-icon-list-text">FAQs</span></Link></li>
                    </ul>
                    </div>
                </div>
                
                <div className="col-sm-3">
                    <div className="footerbox">
                    <div className="footer-icon">
                    <Image
                            src="/assets/images/footericon3n.png"
                            alt="icon"
                            className="img-responsive"
                            width= {80}
                            height={87}
                            priority
                            />
                    </div>		    
                    <h3 className="headtop">LEGAL</h3>
                    <ul className="elementor-icon-list-items">
                        <li><Link href="privacy-policy/"><span className="elementor-icon-list-text">Privacy Policy</span></Link></li>                        
                        <li><Link href="disclaimer/"><span className="elementor-icon-list-text">Disclaimer</span></Link></li>
                        
                    </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="footerbox">
                    <div className="footer-icon">
                    <Image
                            src="/assets/images/footericon4n.png"
                            alt="icon"
                            className="img-responsive"
                            width= {80}
                            height={87}
                            priority
                            />
                    </div>
                    <h3 className="headtop">SUBSCRIBE</h3>
                    <div className="newsltr">
                
                    <input type="email" placeholder="Your Mail" name="email" id="email"/>
                    <button id="newsletter-form"><i className="fa fa-location-arrow" aria-hidden="true"></i></button>
            
                    </div>
                    <div id="show_message" ></div>
                <span id="error" style={{display: "none", color:"red"}}></span>                    
                    
                    <p className="flwt">Follow our newsletter to stay updated on the industry’s latest trends.</p>
                    </div>
                </div>
                </div>
                
                <Link href="tel:+91 91000 94000" title="" className="tollf">
                <Image
                            src="/assets/images/toll-free.png"
                            alt="icon"
                            className="img-responsive"
                            width= {50}
                            height={53}
                            priority
                            />

                </Link>
                
                <Link href="#myPage" title="To Top" className="topicon">
                <i className="fa fa-chevron-up" aria-hidden="true"></i>
                </Link>
            </footer>
        </div>    
    )
}
export default FooterComponent
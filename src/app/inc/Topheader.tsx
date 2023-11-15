'use client'
import * as React from "react";

import Image from 'next/image'
//import logo01 from '../app/assets/images/logo01.jpg'
import Link from 'next/link';

function TopheaderComponent() {    
  
    return (        
        <div>
            <div className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>                        
                    </button>
                    <Link className="navbar-brand" href="/">
                    <Image
              src="/assets/images/logo01.jpg"
              alt="radhatmt logo"
              width={230}
              height={104}
              priority
            />
             
            </Link>
            </div>
                    <div className="header-box">
                        <div className="rightnavsec">
                        <div className="rightnav">
                        <ul>
                        <li><Link href="#"> Accreditations</Link></li>
                        <li><Link href="#">Price List</Link></li>
                        </ul>
                        
                        <div className="rightnav01">
                        <Link href="#" target="_blank" rel="nofollow">
                        <Image
              src="/assets/images/so-icon01.png"
              alt="facebook logo"
              width={39}
              height={37}
              priority
            />
            </Link>   

            <Link href="#" target="_blank" rel="nofollow">
            <Image
              src="/assets/images/so-icon02.png"
              alt="twitter logo"
              width={39}
              height={37}
              priority
            />
            </Link>
		  <Link href="#" target="_blank" rel="nofollow">
          <Image
              src="/assets/images/so-icon05.png"
              alt="instagram logo"
              width={39}
              height={37}
              priority
            />
          </Link>
		  <Link href="#" target="_blank" rel="nofollow">
          <Image
              src="/assets/images/so-icon03.png"
              alt="linkdin logo"
              width={39}
              height={37}
              priority
            />
          </Link>
		  <Link href="#" target="_blank" rel="nofollow">
          <Image
              src="/assets/images/so-icon04.png"
              alt="youtube logo"
              width={39}
              height={37}
              priority
            /></Link>         
                        </div>
                        
                        </div>
                        </div>
                        
                    </div>
                </div>
                </div>
        </div>    
    )
}
export default TopheaderComponent
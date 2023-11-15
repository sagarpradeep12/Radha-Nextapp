'use client';
import React, {useState, useEffect } from "react";
import Link from 'next/link';
import { parse } from "path";



function HeaderComponent() {
   //const elmId = document.querySelector("#myNavbar");
   /*const [text, setText] = useState('This is demo texts');
   const rmvClass = () =>{
    setText('This is real text');
   }*/





  var [isActive, setActive] = useState('false');

  const ToggleClass = () => {    
    setActive(!isActive);         
  };

    

    return (                
        <div>
            <nav className="navbar navbar-default">
                <div className='container'>   
                
                    <div  id="myNavbar" className={isActive ? "active" : "inactive"}>
                        <div className="cls"><button id="clsbtn" onClick={ToggleClass}>X</button></div>
                    <ul className="nav navbar-nav navbar-center">
                        <span id="logoId" style={{ display: 'none' }}></span>

                        
                        <li>                        
                            <Link href="/" replace>Home</Link>
                        </li>
                        <li>
                            <Link href="/about-us">About Us</Link>
                        </li>

                        <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Products <b className="caret"></b></a>
                        <ul className="dropdown-menu">                            
                            <li><Link href="/radha-tmt-bar-550d-lrf">Radha TMT 550D LRF</Link></li>            
                            <li><Link href="/fe550-steel-bars">Radha TMT 550</Link></li>
                        
                        </ul>
                        </li>
                        <li><Link href="/technology">Technology</Link></li>
                        
                        <li><Link href="clients/">Clients</Link></li>    
                          
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <span className="extranav">
                        <li><Link href="#"> Accreditations</Link></li>
                        <li><Link href="#">Price List</Link></li>
                        </span>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>    
    )
}
export default HeaderComponent
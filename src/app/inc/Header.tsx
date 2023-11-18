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

  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
  };    

  const [userName,setUserName] = useState("Sagar");
  function changeuserName(){
    setUserName("Pradeep");
  }

  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () =>{
    if(count>0){
      setCount(count - 1);  
    }    
  }
    
    return (                
        <div>
            <p>User Name: {userName}</p>
            
            <button onClick={changeuserName}>Change User Name</button><br/><br/>
            <button onClick={decrementCount}>-</button>
            <span>  {count} </span>        
            <button onClick={incrementCount}>+</button>
            <br/>
            <nav className="navbar navbar-default">
                <div className='container'>   
                
                    <div  id="myNavbar" className={isActive ? "active" : "inactive"}>
                        <div className="cls"><button id="clsbtn" onClick={handleClick} className={isActive ? 'active' : ''}>X</button></div>
                        <ul className="nav navbar-nav navbar-center">
                            <span id="logoId" style={{ display: 'none' }}></span>
                            <li><Link href="/home" >Home</Link></li>
                            <li><Link href="/about-us">About Us</Link></li>
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
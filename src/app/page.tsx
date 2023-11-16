'use client';  
//import Image from 'next/image'
//import styles from './page.module.css'


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeComponent from './home/page';
import Aboutus from './about-us/page';
import Radha550d from './radha-tmt-bar-550d-lrf/page';
import Fe550steelbars from './fe550-steel-bars/page';
import Technology from './technology/page';
import ClientComp from './clients/page';
import ContactComp from './contact-us/page';

export default function Home() {
  return (      
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/radha-tmt-bar-550d-lrf" element={<Radha550d />} />
        <Route path="/fe550-steel-bars" element={<Fe550steelbars />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/clients" element={<ClientComp />} />
        <Route path="/clients" element={<ContactComp />} />
      </Routes>
    </Router>
  );
}

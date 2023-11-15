import React from 'react'
//import Link from 'next/link';

import Script from 'next/script';
import './globals.css'
//import '../../public/assets/css/bootstrap.min.css'
//import '/assets/css/style01.css'
//import '../../public/assets/css/style.css'
//import '../../public/assets/css/style01.css'
//import '../../public/assets/css/responsive.css'
//import '../../public/assets/css/owl.carousel.min.css'

import TopheaderComponent from './inc/Topheader';
import HeaderComponent from './inc/Header';
import FooterComponent from './inc/Footer';

//import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

/*export const metadata: Metadata = {
  title: 'Radha TMT',
  description: 'Radha TMT',
}*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <head>
      <link href="/assets/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
      <link href="/assets/css/style.css" rel="stylesheet" type="text/css" />
      <link href="/assets/css/style01.css" rel="stylesheet" type="text/css" />
      <link href="/assets/css/responsive.css" rel="stylesheet" type="text/css" />
      <link href="/assets/css/owl.carousel.min.css" rel="stylesheet" type="text/css" />
      <link href="/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>


      <link rel="icon" href="/assets/images/favicon.jpg" sizes="any" />
      </head>
      <body id='myPage' data-spy="scroll" data-target=".navbar" data-offset="60" className={inter.className}>
        <TopheaderComponent/>
        <HeaderComponent/>
        {children}
        <FooterComponent/>  
      </body>

      
      <Script src="/assets/js/jquery.min.js"/>
      <Script src="/assets/js/bootstrap.min.js"/>
      <Script src="/assets/js/owl.carousel.min.js"/>
      <Script src="/assets/js/plyr.js"/>
      <Script src="/assets/js/dist/wow.js"/>
      
      
    </html>
  )
}

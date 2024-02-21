 import React from 'react';
 import SlideCards from './SlideCards.js';
 import backvideo from './videos/backvideo.mp4';
 import Profile from './Button.js';
import Footer from './Footer.js';
 function Home() {
   const videoSource = backvideo;
   const backgroundStyle = {
     position:'fixed',
     top: 0,
     left: 0,
     width: '100%',
     height: '100%',
     objectFit:'cover',
     zIndex: -1,
   };
    return (
     <>
     <div>
       <video autoPlay loop muted style={backgroundStyle}>
         <source src={videoSource} type="video/mp4" />
       </video>
       <div>
         <SlideCards/>
         <Profile/>
         <br/><br/><br/><br/><br/><br/><br/>
       </div>
       </div>
       <Footer/>
     </>

   );
 }
 
 export default Home;
 


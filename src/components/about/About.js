import React from 'react';
import NavButton from '../navigation/NavButton'
import './About.css'
 
const About = () => {
    return (
      <div className="Wrapper" >
         <div className="scene-grid">
            <div className="scene-container-contact">
               <NavButton/>
               <div className="button-container-about">
                     <div className="btn"><h2>HANNAH WENGER</h2></div>
                     <div className="btn">(COMING SOON)</div>
               </div>
            </div> 
         </div> 
      </div>
    );
}
 
export default About;
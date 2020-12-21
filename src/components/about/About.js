import React from 'react';
import NavButton from '../navigation/NavButton'
import './About.css'
import EmailButton from '../contact/EmailButton'
 
const About = () => {
    return (
      <div className="Wrapper" >
         <div className="scene-grid">
            <div className="scene-container-contact">
               <NavButton/>
               <div className="button-container-about">
                     <div className="about-btn">
                        <h1>Hello, </h1> 
                        <h4> my name is </h4>
                        <h2> Hannah Wenger.</h2>
                        <br></br><br></br>
                        <p>I'm a Full-Stack Developer with experience managing teams and complex databases.</p>
                     </div>
                     <div className="about-btn">
                        <p><span style={{textDecoration:"underline", textDecorationColor:"yellow", textDecorationThickness:".5em"}}><span style={{fontSize:"1.1em", fontWeight:"500"}}>M</span>y background</span> in customer-service, sales and marketing has helped inform my <span style={{color:"#010000", fontSize:"1.2em"}}>creative  </span> yet <span style={{color:"#010000", fontSize:"1.2em"}}>practical  </span>approach to web and software development.</p>
                        <p>Fueled by my passion for understanding the user, I chose a career in technology because it combines my deepest pleasures in life, learning, problem solving and building.</p>
                     </div>
                     <div className="about-btn">
                        <p>Growth-oriented,</p>
                        <p><span style={{color:"#010000", fontSize:"1.2em"}}>I love being part of a team</span>.</p>
                        <p>Nothing puts a bigger smile on my face than working towards a shared vision.</p>
                        <br></br>
                        <p>Unquenchable curiosity and determination mean that I'm <span style={{color:"#010000", fontSize:"1.2em"}}>constantly building</span> personal projects, <span style={{color:"#010000", fontSize:"1.2em"}}>developing skills</span> and researching; <span style={{color:"#010000", fontSize:"1.2em"}}>remaining current</span> within the industry.</p>
                     </div>
                     <div className="about-btn">
                        <p ><span style={{textDecoration:"underline", textDecorationColor:"yellow", textDecorationThickness:".5em"}}><span style={{fontSize:"1.1em", fontWeight:"500"}}>M</span>y most recent project</span>, <a href="https://vast-depths-13570.herokuapp.com/" style={{color:"#010000", fontSize:"1.2em", textDecorationColor:"#010000"}}>"Robert"</a>, is an experiment in virtual reality, speech synthesis and web-audio.</p>
                        <p>I believe it showcases my ability to not only learn and implement new technologies but also represents the guiding principal in my work and life,</p>
                        </div>
                     <div className="about-btn">
                        <q style={{fontStyle:"italic", border:".5em double yellow", padding:"2em 1em"}}>If it can be dreamt, it is possible and if it is possible, let's learn what's needed and make it a reality!</q>
                     </div>
                     <div className="about-btn">
                        <p>Currently looking to join an enthusiastic team as a Full-Stack | Front-End</p>
                        <p>Engineer | Developer.</p>
                        <EmailButton/>
                     </div>
               </div>
            </div> 
         </div> 
      </div>
    );
}
 
export default About;
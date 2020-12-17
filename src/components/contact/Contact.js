import React from 'react';
import './Contact.css'
import NavButton from '../navigation/NavButton'
import GithubButton from '../portfolio/GithubButton'
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';
import SpotifyButton from './SpotifyButton';
 
const Contact = () => {
    return (
      <div className="Wrapper" >
         <div className="scene-grid">
             <div className="scene-container-contact">
                 <NavButton/>
                 <div className="button-container-contact">
                     <button style={{backgroundColor:'transparent', cursor:'pointer', color: 'yellow', fontSize: '2em', border:'none'}}>
                         <GithubButton />
                     </button>
                     <button style={{backgroundColor:'transparent', cursor:'pointer', color: 'yellow', fontSize: '2em', border:'none'}}>
                         <LinkedInButton />
                     </button>
                     <button style={{backgroundColor:'transparent', cursor:'pointer', color: 'yellow', fontSize: '2em', border:'none'}}>
                         <EmailButton />
                     </button>
                     <button style={{backgroundColor:'transparent', cursor:'pointer', color: 'yellow', fontSize: '2em', border:'none'}}>
                         <SpotifyButton/>
                     </button>
                 </div>
             </div> 
         </div> 
      </div>
    );
}
 
export default Contact;
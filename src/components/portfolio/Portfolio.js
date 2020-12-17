import React, {useState} from 'react';
import "./Portfolio.css"
import Channels from './Channels'
import NavButton from '../navigation/NavButton'
import PortfolioDataDisplay from './PortfolioDataDisplay';
import GithubButton from './GithubButton';
 
const Portfolio = () => {

    const robert = `https://vast-depths-13570.herokuapp.com/`
    let linkArray = [robert]
    let linkState = linkArray[Math.floor(Math.random()*linkArray.length)];
    const [link, setLink] = useState(linkState);
    const [toggle, setToggle] = useState('on');
    const [channels, setChannels] = useState('hidden');

    function changeToggle() {
        if(toggle === 'on') {
            setToggle('off')
            setChannels('display')
        }
        if(toggle == 'off') {
            setToggle('on')
            setChannels('hidden')
            randomLink();
        }
    }
    function randomLink() {
        let randomLink = linkArray[Math.floor(Math.random()*linkArray.length)];
        setLink(randomLink);
    }
    function btnClick() {
        changeToggle();
    }
    return (
        <div className="Wrapper" >
            <div className="scene-grid">
                <div className="scene-container-portfolio">
                    <NavButton/>
                    <div className="tv-back">
                        <div className="tv-screen-animation tv-screen">
                            <PortfolioDataDisplay let channels ={channels} let link = {link}/>
                        </div>
                    </div>
                    <div className="button-container">
                        <button onClick={btnClick} style={{backgroundColor:'transparent', cursor:'pointer', color: 'yellow', fontSize: '2em', border:'none'}}>
                            <Channels let toggle = {toggle} />  
                        </button>
                        <button style={{backgroundColor:'transparent', cursor:'pointer', color: 'yellow', fontSize: '2em', border:'none'}}>
                            <GithubButton />
                        </button>
                    </div>
                </div> 
            </div> 
        </div>
    );
}
 
export default Portfolio;
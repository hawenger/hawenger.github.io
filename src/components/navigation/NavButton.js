import React, {useState} from 'react'
import Navigation from './Navigation'
import Arrows from './Arrows'

export default function NavButton() {
    
    const [message, setMessage] = useState(null)
    const [display, setDisplay]= useState(false);
    const [arrow, setArrow] = useState('left')
    function btnClick() {
        changeDisplayState();
        changeArrowState();
    }

    function changeMessage() {
        if(message === null && arrow === 'left') {
            setMessage('MENU')
        }
        if(message === null && arrow === 'right') {
            setMessage('X')
        }
        if(message === 'MENU') {
            setMessage(null)
        }
        if(message === 'X') {
            setMessage(null)
        }

    }

    function changeDisplayState() {
        if(display === true) {
            setDisplay(false)
        }
        if(display === false) {
            setDisplay(true)
        }
    } 
    function changeArrowState() {
        if(arrow === 'left') {
            setArrow('right');
        }
        if(arrow === 'right') {
            setArrow('left');
        }
    }
    return (
        <>
            <button onMouseEnter={changeMessage} onMouseLeave={changeMessage} onClick={btnClick} className="navbarbtn" style={{cursor:'pointer', color: 'yellow', fontSize: '2em', border:'none'}}>
            <p className="menu" style={{fontSize:'.4em', writingMode:'vertical-lr', textOrientation:'upright', transition:'linear, 0.3s', color:'#333'}}>{message}</p>
                <Arrows let arrow = { arrow } />
            </button>
            <Navigation let display ={ display } />
        </>
    )
}

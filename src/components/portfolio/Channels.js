import React from 'react'
import PortfolioDataDisplay from './PortfolioDataDisplay'

export default function Channels(props) {
    
    if(props.toggle === 'off')
    return (
        <>
            <i  style={{color:'yellow', fontSize:'2em', backgroundColor:'aliceblue', marginTop:'.5em', marginLeft:'1em', marginRight:'.5em', textShadow: '-3px -1px #d7d700, 2px -4px 2px #cece6b'}} className="fa fa-toggle-off" aria-hidden="true"></i>
            <PortfolioDataDisplay/>
        </>
    )
    return (
        <>
            <i style={{color:'yellow', fontSize:'2em', backgroundColor:'aliceblue', marginTop:'.5em', marginLeft:'1em', marginRight:'.5em',  textShadow: '-3px -1px #d7d700, 2px -4px 2px #cece6b'}} className="fa fa-toggle-on" aria-hidden="true"></i>
        </>
    )
}

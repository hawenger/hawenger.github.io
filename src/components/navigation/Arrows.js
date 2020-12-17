import React from 'react'

export default function Arrows(props) {
    if(props.arrow === 'left')
    return (
        <>
            <i style={{color:'yellow', fontSize:'3em'}} className="fa fa-arrow-left" aria-hidden="true"></i>
        </>
    )
    return (
        <>
            <i style={{color:'yellow', fontSize:'3em'}} className="fa fa-arrow-right" aria-hidden="true"></i>
        </>
    )
}

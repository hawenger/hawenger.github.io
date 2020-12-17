import React from 'react'

export default function ArrowLeft(props) {
    if(props.arrowLinks === 'visible')
    return (
        <>
            <i style={{color:'yellow', fontSize:'1em'}} className="fa fa-arrow-left" aria-hidden="true"></i>
        </>
    )
    return (
        <>
            <i style={{color:'yellow', fontSize:'1em', display:'none'}} className="fa fa-arrow-right" aria-hidden="true"></i>
        </>
    )
}

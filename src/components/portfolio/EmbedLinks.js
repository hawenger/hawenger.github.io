import React from 'react'

export default function EmbedLinks(props) {

    if(props.channels === 'hidden')
    return (
        <>
            <div style={{height:'100%', width:'100%'}}>
            <iframe style={{height:'100%', width:'100%'}} width="560" height="315" src="https://www.youtube.com/embed/PsLynyIBWSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )
    return(
        null
    )
}

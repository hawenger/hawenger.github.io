import React from 'react'

export default function EmbedLinks(props) {

    if(props.channels === 'hidden')
    return (
        <>
            <div style={{height:'100%', width:'100%'}}>
                <embed src={props.link} style={{height:'100%', width:'100%'}}>
                </embed>
            </div>
        </>
    )
    return(
        null
    )
}

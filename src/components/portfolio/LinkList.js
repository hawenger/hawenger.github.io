import React from 'react'
import AllLinks from './AllLinks'

export default function LinkList( { displayLinks } ) {
    return (
        
        displayLinks.map(allLinks => {
            return <AllLinks key={allLinks.name} allLinks={allLinks} />
        })
    )
}

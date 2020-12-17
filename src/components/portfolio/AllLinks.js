import React, {useState} from 'react'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'

export default function AllLinks( { allLinks } ) {

    const [arrowLinks, setArrowLinks] = useState('hidden');
    function triggerEnter() {
        if(arrowLinks !== 'visible') {
            setArrowLinks('visible')
        }
    }
    function triggerExit() {
        if(arrowLinks !== 'hidden') {
            setArrowLinks('hidden')
        }
    }

    return (
        <>
            <div>
                <ArrowLeft let arrowLinks = {arrowLinks}/>
                <a onMouseOver={triggerEnter} onMouseLeave={triggerExit} className="link" href={allLinks.link}>{allLinks.name}</a>
                <ArrowRight let arrowLinks = {arrowLinks} />
            </div>

        </>
    )
}

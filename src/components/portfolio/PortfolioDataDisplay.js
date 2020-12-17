import React, {useState} from 'react'
import EmbedLinks from './EmbedLinks'
import LinkList from './LinkList'

export default function PortfolioDataDisplay(props) {

    const linkData = [{link: `https://vast-depths-13570.herokuapp.com/`, name: `Robert`, img:'NA'}, {link: `http://se-7-en.herokuapp.com/`, name: `Se7en`, img:'NA'}, {link: `https://burgerpolice.herokuapp.com/`, name: `Burger Police`, img:'NA'}, {link: `https://hawenger.github.io/PasswordGenerator/`, name: `EyePass`, img:'NA'}, {link: `https://hawenger.github.io/ClickbaitQuiz/`, name: `Clickbait Quiz`, img:'NA'}, {link: `https://sbhwang23.github.io/Turnip-Da-Beet/`, name: `Turnip Da Beet`, img:'NA'}, {link: `https://moneybudgie.herokuapp.com/`, name: `Money Budgie`, img: 'NA'}, {link: `https://github.com/hawenger/happyManager`, name: `Happy Manager`, img: `NA`} ]
    
    const [displayLinks, setDisplayLinks] = useState(linkData);

    if(props.channels === 'display')
    return (
        <div className="PortfolioLinks">
            <LinkList displayLinks = {displayLinks} />
        </div>
    )
    return(
        <>
            <EmbedLinks {...props}/>
        </>
    )
}

import React, {useState, useEffect} from 'react';


import Rectangle from '../assets/svg/Background/Rectangle.svg'


import Fill1 from '../assets/svg/Background/Fill 1.svg'
import Fill2 from '../assets/svg/Background/Fill 2.svg'
import Fill3 from '../assets/svg/Background/Fill 3.svg'
import Fill4 from '../assets/svg/Background/Fill 4.svg'
import Fill5 from '../assets/svg/Background/Fill 5.svg'
import Fill6 from '../assets/svg/Background/Fill 6.svg'

import Mask from '../assets/img/Mask.png'


const SVG = () => {
    return (
        <div className="Background">
            <img src={Rectangle} className='Rectangle'/>

            <div className="Center">
                <div className='Rectangle1'></div>
                <div className='Rectangle2'></div>
                <div className='Rectangle3'></div>
                <div className='Rectangle4'></div>
            </div>

            <div className="Random">
                <img src={Fill1} className="Fill Fill1"/>
                <img src={Fill2} className="Fill Fill2"/>
                <img src={Fill3} className="Fill Fill3"/>
                <img src={Fill4} className="Fill Fill4"/>
                <img src={Fill5} className="Fill Fill5"/>
                <img src={Fill6} className="Fill Fill6"/>
            </div>

            <div className="Oval"></div>
        </div>
    )
}

const IMG = () => {
    return (<>
        <img src={Mask} id="Mask" className="Mask"/>
    </>)
}


export default function MainBackground() {
    return (
        <div className="MainBackground">
            <SVG/>
            <IMG/>
        </div>
    )
}


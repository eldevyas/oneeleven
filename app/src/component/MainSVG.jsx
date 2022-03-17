import React, {useState, useEffect} from 'react';
import BG from '../assets/svg/SVG.svg'
import Oval from '../assets/svg/Oval.svg'


const SVG = () => {
    return (
        <div className="Background">
            <img src={Oval} id="Oval"></img>
            <img src={BG} id="background"></img>
        </div>
    )
}


export default function MainSVG() {
    return (
        <div className="MainSVG">
            <SVG/>
        </div>
    )
}


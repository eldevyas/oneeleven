import React, {useState, useEffect} from 'react';


import Rectangle from '../assets/svg/Background/Rectangle.svg'


import Rectangle1 from '../assets/svg/Background/Rectangle 1.svg'
import Rectangle2 from '../assets/svg/Background/Rectangle 2.svg'
import Rectangle3 from '../assets/svg/Background/Rectangle 3.svg'
import Rectangle4 from '../assets/svg/Background/Rectangle 3.svg'

import Fill1 from '../assets/svg/Background/Fill 1.svg'
import Fill2 from '../assets/svg/Background/Fill 2.svg'
import Fill3 from '../assets/svg/Background/Fill 3.svg'
import Fill4 from '../assets/svg/Background/Fill 4.svg'
import Fill5 from '../assets/svg/Background/Fill 5.svg'
import Fill6 from '../assets/svg/Background/Fill 6.svg'




const SVG = () => {
    return (
        <div className="Background">
            <img src={Rectangle} id="Mask" className='Rectangle'/>

            <div className="Center">
                <img src={Rectangle1} className='Rectangle1'/>
                <img src={Rectangle2} className='Rectangle2'/>
                <img src={Rectangle3} className='Rectangle3'/>
                <img src={Rectangle4} className='Rectangle4'/>
            </div>

            <div className="Random">
                <img src={Fill1} className="Fill1"/>
                <img src={Fill2} className="Fill2"/>
                <img src={Fill3} className="Fill3"/>
                <img src={Fill4} className="Fill4"/>
                <img src={Fill5} className="Fill5"/>
                <img src={Fill6} className="Fill6"/>
            </div>

        </div>
    )
}


export default function MainBackground() {
    return (
        <div className="MainBackground">
            <SVG/>
        </div>
    )
}


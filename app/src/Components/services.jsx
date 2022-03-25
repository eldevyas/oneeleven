import React from "react";
import Fill1 from '../Assets/svg/Background/Fill 1.svg'
import Fill2 from '../Assets/svg/Background/Fill 2.svg'
import Fill3 from '../Assets/svg/Background/Fill 3.svg'
import Fill4 from '../Assets/svg/Background/Fill 4.svg'
import Fill5 from '../Assets/svg/Background/Fill 5.svg'
import Fill6 from '../Assets/svg/Background/Fill 6.svg'


const GraphicDesign = () => {
    return(
        <div className='Card GraphicDesign'>
            <div className="Texture">
                <img src={Fill1} className="Fill1"/>
                <img src={Fill2} className="Fill2"/>
                <img src={Fill3} className="Fill3"/>
                <img src={Fill4} className="Fill4"/>
                <img src={Fill5} className="Fill5"/>
                <img src={Fill6} className="Fill6"/>    
            </div>
            <div className="Text">
                <div className="Title">Graphic Design</div>
                <div className="Description">Need a designer for your project? Hire me or contact me by email & I will make mind-blowing graphics for you. </div>    
            </div>
        </div>    
    )
}

const WebDevelopement = () => {
    return(
        <div className='Card WebDevelopement'>
            <div className="Texture">
                <img src={Fill1} className="Fill1"/>
                <img src={Fill2} className="Fill2"/>
                <img src={Fill3} className="Fill3"/>
                <img src={Fill4} className="Fill4"/>
                <img src={Fill5} className="Fill5"/>
                <img src={Fill6} className="Fill6"/>    
            </div>
            <div className="Text">
                <div className="Title">Web Developement</div>
                <div className="Description">Looking for a developer for your website? You’re in the right place, we will create an outstanding website together!</div>    
            </div>
        </div>    
    )
}


export default function Services() {
    return(
        <div className="Services">
            <GraphicDesign/>
            <WebDevelopement/>    
        </div>
    )
}
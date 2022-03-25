import React from 'react';

const Texture = () => {
    return (
        <div className="Texture">
            <div className="Oval O-2"></div>
            <div className="Oval O-1"></div>
            <div className="Oval O1"></div>
            <div className="Oval O2"></div>
            <div className="Oval O3"></div>
            <div className="Oval O4"></div>
            <div className="Oval O5"></div>
            <div className="Oval O6"></div>
        </div>
    )
};

const Text = () => {
    return(
        <div className="Text">
            <div className="Title">Why a branded name?</div>
            <div className="Description">For new businesses, naming options can seem quite limited. Short domains are very expensive, yet longer multi-word names don’t inspire confidence.</div>

            <div className="Description">In 2022 many startups are choosing a short, branded name - a name that’s unique, memorable, and affordable.</div>
        </div>
    )
}

const Companies = () => {
    return(
        <div className='Companies'>
            <div className='Company Google' onClick={()=> window.open("https://www.google.com/", "_blank")}></div>
            <div className='Company Spotify' onClick={()=> window.open("https://www.spotify.com/ma-fr/", "_blank")}></div>
            <div className='Company Bitcoin' onClick={()=> window.open("https://bitcoin.org/en/", "_blank")}></div>
            <div className='Company Binance' onClick={()=> window.open("https://www.binance.com/en", "_blank")}></div>
            <div className='Company Fiverr' onClick={()=> window.open("https://www.fiverr.com/m", "_blank")}></div>
            <div className='Company Facebook' onClick={()=> window.open("https://www.facebook.com/", "_blank")}></div>
            <div className='Company Meta' onClick={()=> window.open("https://about.facebook.com/meta", "_blank")}></div>
            <div className='Company IQ-Option' onClick={()=> window.open("https://iqoption.com/en", "_blank")}></div>
            <div className='Company Instagram' onClick={()=> window.open("https://instagram.com", "_blank")}></div>
            <div className='Company Airbnb' onClick={()=> window.open("https://airbnb.com/en", "_blank")}></div>
        </div>
    )
}



export default function Purpose(){
    return(
        <div className="Purpose">
            <Texture/>
            <Text/>
            <Companies/>
        </div>
    )
}
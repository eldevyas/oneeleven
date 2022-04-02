import React from 'react';

import Airbnb from './../Assets/img/Companies/Airbnb.png'
import Binance from './../Assets/img/Companies/Binance.png'
import Bitcoin from './../Assets/img/Companies/Bitcoin.png'
import Facebook from './../Assets/img/Companies/Facebook.png'
import Fiverr from './../Assets/img/Companies/Fiverr.png'
import Google from './../Assets/img/Companies/Google.png'
import Instagram from './../Assets/img/Companies/Instagram.png'
import IQOption from './../Assets/img/Companies/IQ-Option.png'
import Meta from './../Assets/img/Companies/Meta.png'
import Spotify from './../Assets/img/Companies/Spotify.png'


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
            <div className='Company Google'  style={{ backgroundImage: `url(${Google})` }} onClick={()=> window.open("https://www.google.com/", "_blank")}></div>
            <div className='Company Spotify' style={{ backgroundImage: `url(${Spotify})` }} onClick={()=> window.open("https://www.spotify.com/ma-fr/", "_blank")}></div>
            <div className='Company Bitcoin' style={{ backgroundImage: `url(${Bitcoin})` }} onClick={()=> window.open("https://bitcoin.org/en/", "_blank")}></div>
            <div className='Company Binance' style={{ backgroundImage: `url(${Binance})` }} onClick={()=> window.open("https://www.binance.com/en", "_blank")}></div>
            <div className='Company Fiverr'  style={{ backgroundImage: `url(${Fiverr})` }} onClick={()=> window.open("https://www.fiverr.com/m", "_blank")}></div>
            <div className='Company Facebook' style={{ backgroundImage: `url(${Facebook})` }} onClick={()=> window.open("https://www.facebook.com/", "_blank")}></div>
            <div className='Company Meta' style={{ backgroundImage: `url(${Meta})` }} onClick={()=> window.open("https://about.facebook.com/meta", "_blank")}></div>
            <div className='Company IQ-Option' style={{ backgroundImage: `url(${IQOption})` }} onClick={()=> window.open("https://iqoption.com/en", "_blank")}></div>
            <div className='Company Instagram' style={{ backgroundImage: `url(${Instagram})` }} onClick={()=> window.open("https://instagram.com", "_blank")}></div>
            <div className='Company Airbnb' style={{ backgroundImage: `url(${Airbnb})` }} onClick={()=> window.open("https://airbnb.com/en", "_blank")}></div>
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
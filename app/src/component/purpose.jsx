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
            <div className='Center'>
                <div className='Company Google'></div>
            </div>
            <div className='Around'>
                <div className='Company Spotify'></div>
                <div className='Company Bitcoin'></div>
                <div className='Company Binance'></div>
                <div className='Company Fiverr'></div>
                <div className='Company Facebook'></div>
                <div className='Company Meta'></div>
                <div className='Company IQ-Option'></div>
                <div className='Company Instagram'></div>
                <div className='Company Airbnb'></div>
            </div>
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
import React from 'react';

const Texture = () => {
    return (
        <div className="Texture">
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



export default function Purpose(){
    return(
        <div className="Purpose">
            <Texture/>
            <Text/>
        </div>
    )
}
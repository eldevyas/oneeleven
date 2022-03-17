import React, {useState, useEffect} from 'react';


const Title = () => {
    return (
        <h1 className="title">Business Name <span>Generator</span></h1>
    )
};
    

const Description = () => {
    return (
        <p className="description">Generate a short, brandable business name using artificial intelligence</p>
    )
};


function Text(){
    return (
        <div className="Text">
            <Title/>
            <Description/>
        </div>
    )
}

const Input = () => {
    return (
        <input type="text" className="Input" placeholder="Enter keywords"/>
    )
} 

const KeywordsButton = () => {
    return (
        <>
            <button className="Button">Generate</button>
        </>
    )
} 



function Keywords() {
    return (
        <div className="Keywords">
            <Input/>
            <KeywordsButton/>
        </div>
    )
}

function Main() {
    return (
        <div className="container">
            <Text/>
            <Keywords/>
        </div>
    )
}

export default Main;
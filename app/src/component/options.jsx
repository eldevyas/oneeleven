import React, {useState, useEffect} from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

const Ideas = () => {
    return(
        <div className="Option Principal">
            <div className="Rank">01</div>
            <div className="Icon"><LightbulbOutlinedIcon/></div>
            <div className="Title">Get Name Ideas</div>
            <div className="Text">OneEleven generates short, catchy names. The more specific your keywords, the better the results.</div>
        </div>
    )
}

const Results = () => {
    return(
        <div className="Option">
            <div className="Rank">02</div>
            <div className="Icon"><FavoriteBorderOutlinedIcon/></div>
            <div className="Title">Filter Results</div>
            <div className="Text">Decide whether you prioritize a shorter name, having a specific keyword or domain extension</div>
        </div>
    )
}

const Names = () => {
    return(
        <div className="Option">
            <div className="Rank">03</div>
            <div className="Icon"><FilterAltOutlinedIcon/></div>
            <div className="Title">Save your names</div>
            <div className="Text">Our algorithm learns from the names you like, giving you better recommendations over time</div>
        </div>
    )
}

export default function Options(){
    return (
        <div className="Options">
            <Ideas/>
            <Results/>
            <Names/>
        </div>
    )
}




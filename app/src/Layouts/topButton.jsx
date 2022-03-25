import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


class TopButton extends React.Component{
    render(){
        return(
            <div className="TopButton" id='BtnTop'>
                <KeyboardDoubleArrowUpIcon id='Arrow'/>
            </div>
        )
    }
}

export default TopButton;
import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


class TopButton extends React.Component{
    render(){
        function GoToTop() {
            $("#BtnTop").click(function(event) {
                $('html, body').animate({
                    scrollTop: 0
                }, 300, function() {
                    window.scrollTo(0, 0)
                })
            });
        };

        return(
            <div className="TopButton" id='BtnTop' onClick={GoToTop}>
                <KeyboardDoubleArrowUpIcon id='Arrow'/>
            </div>
        )
    }
}

export default TopButton;
import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


class TopButton extends React.Component{
    render(){


        const scrollToTop = () => {
            const c = document.documentElement.scrollTop || document.body.scrollTop;
            
            if (c > 0) {
              window.requestAnimationFrame(scrollToTop);
              window.scrollTo(0, c - c / 10);
            }
        };

        return(
            <div className="TopButton" id='BtnTop' onClick={scrollToTop}>
                <KeyboardDoubleArrowUpIcon id='Arrow'/>
            </div>
        )
    }
}

export default TopButton;
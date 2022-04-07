import React from 'react'
import './../Dist/Pages/404.css'



const S404 = () => {
    return(
        <div className='S404'>
            <div className='Shape S1'>
                <div className='Parts P1'></div>
                <div className="Parts P2"></div>
                <div className="Parts P3"></div>
                <div className="Parts P4"></div>
            </div>

            <div className='Shape S2'>
                <div className='Parts P1'></div>
                <div className="Parts P2"></div>
                <div className="Parts P3"></div>
                <div className="Parts P4"></div>
                <div className="Parts P5"></div>
                <div className="Parts P6"></div>
            </div>


            <div className='Shape S3'>
                <div className='Parts P1'></div>
                <div className="Parts P2"></div>
                <div className="Parts P3"></div>
                <div className="Parts P4"></div>
            </div>
        </div>    
    )
}



export default class PageNotFound extends React.Component {
    render() {

        return(
            <div className = 'Page404'>
                <S404/>
            </div>
        )
    }
}
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './../Dist/Pages/404.css'
import Sky from './../assets/svg/Background/404/Sky.svg'
import Sun from './../assets/svg/Background/404/Sun.svg'
import Clouds from './../assets/svg/Background/404/Clouds.svg'
import Desert from './../assets/svg/Background/404/Desert.svg'
import Caravan from './../assets/svg/Background/404/Caravan.svg'


const A404 =  () => {
    return(
            <div className='A404'>
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

const Page404 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    function GoBack(){
        navigate(-1)
    }

    function GoHome(){
        navigate('/')
    }
    return(
        <div className='Page404'>
            <div className='Background'>
                <img className='Sky' src={Sky}/>
                <img className='Sun' src={Sun}/>
                <img className='Clouds' src={Clouds}/>
                <A404/>
                <img className='Desert' src={Desert}/>
                <img className='Caravan' src={Caravan}/>
            </div>

            <div className='Message'>
                <h1>Oops!</h1>
                <h3>The caravan is lost.</h3>
                <p>No path was found to {location.pathname}. <br/> we suggest you to go to the previous page or return to the main page.</p>
                <div className='Buttons'>
                    <div className='GoBack' onClick={GoBack}>Go Back</div>
                    <div className='GoHome' onClick={GoHome}>Go Home</div>
                </div>
            </div>
            
        </div>
    )
}



export default class PageNotFound extends React.Component {
    render() {

        return(
            <Page404/>
        )
    }
}
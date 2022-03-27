import React from 'react'
import '../Dist/register.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Facebook from './../assets/svg/Facebook.svg';
import Google from './../assets/svg/Google.svg';

import Fill1 from '../Assets/svg/Background/Fill 1.svg'
import Fill2 from '../Assets/svg/Background/Fill 2.svg'
import Fill3 from '../Assets/svg/Background/Fill 3.svg'
import Fill4 from '../Assets/svg/Background/Fill 4.svg'
import Fill5 from '../Assets/svg/Background/Fill 5.svg'
import Fill6 from '../Assets/svg/Background/Fill 6.svg'

import { useNavigate } from "react-router-dom";

const Background = () => {
    return(
        <div className="Background">
            <div className='Rectangle'></div>

            <div className="Random">
                <img src={Fill1} className="Fill Fill1"/>
                <img src={Fill2} className="Fill Fill2"/>
                <img src={Fill3} className="Fill Fill3"/>
                <img src={Fill5} className="Fill Fill4"/>
                <img src={Fill5} className="Fill Fill5"/>
                <img src={Fill6} className="Fill Fill6"/>
            </div>

            <div className="Oval"></div>
        </div>
    )
}




function Register() {

    let navigate = useNavigate(); 
    const Login = () => { 
        let path = `/login`; 
        navigate(path);
    }

    return (
        <div className="Register">
            <Background/>
            <div className='Register-Container'>
                <h1>Create a new account</h1>

                <form>
                    <label className='Username'>
                        <span><AccountCircleOutlinedIcon/></span>
                        <input type='text' placeholder='Username'/>
                    </label>

                    <label className='E-mail'>
                        <span><EmailOutlinedIcon/></span>
                        <input type='email' placeholder='E-mail'/>
                    </label>
 
                    <label className='Password'>
                        <span><LockOutlinedIcon/></span>
                        <input type='password' placeholder='Password'/>
                    </label>

                    <button type='button'>Sign in</button>
                </form>

                <div className='API'>
                    <div className='Continue'>
                        <hr/>
                        <p>or register with</p>
                        <hr/>
                    </div>

                    <div className='Choice'>
                        <div className='Company Facebook'>
                            <img src={Facebook}/>
                            <p>Facebook</p>
                        </div>

                        <div className='Company Google'>
                            <img src={Google}/>
                            <p>Google</p>
                        </div>
                    </div>
                </div>

                <div className='Sign-up'>
                    <p>Already have an account? <span onClick={Login}>Sign in</span></p>
                </div>

            </div>
        </div>
    )
}

export default Register;
import React, {useRef, useState} from 'react'
import {useAuth} from '../Contexts/AuthContext'
import '../Dist/Pages/login.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Facebook from './../assets/svg/Facebook.svg';
import Google from './../assets/svg/Google.svg';
import {auth, authentication} from '../firebase'
import { updateProfile, getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";


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

const Error = () => {
    return(
    <div className="Error">
    </div>
    )
}


function Login() {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState('')

    let navigate = useNavigate();
    const Register = () => { 
        let path = `/register`; 
        navigate(path);
    }

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to log in')
        }
        setLoading(false)

    }

    const SignInWithGoogle = () => {
        const Google = new GoogleAuthProvider();
        signInWithPopup(authentication, Google)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            return console.log(err)
        })

        navigate('/')
    }

    function SignInWithFacebook() {
        const Facebook = new FacebookAuthProvider();
        signInWithPopup(authentication, Facebook)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            return console.log(err)
        })

        navigate('/')
    }


    return (
        <div className="Login">
            <Background/>
            <div className='Login-Container'>
                <h1>Login to your account</h1>
                {error &&  alert(error)}
                <form onSubmit={handleSubmit}>
                    <label className='Username'>
                        <span><AccountCircleOutlinedIcon/></span>
                        <input type='email' placeholder='Username' ref={emailRef} required/>
                    </label>

                    <label className='Password'>
                        <span><LockOutlinedIcon/></span>
                        <input type='password' placeholder='Password' ref={passwordRef} required/>
                    </label>

                    <div className='RememberMe'>
                        <input type='checkbox'/>            
                        <label>Remember me</label>
                    </div>

                    <button type='submit'>Sign in</button>
                    <div className='Reset'>
                        <p>Forgot password? <span>Reset</span></p>
                    </div>
                </form>
                <div className='API'>
                    <div className='Continue'>
                        <hr/>
                        <p>or continue with</p>
                        <hr/>
                    </div>

                    <div className='Choice'>
                        <div className='Company Facebook' onClick={SignInWithFacebook}>
                            <img src={Facebook}/>
                            <p>Facebook</p>
                        </div>

                        <div className='Company Google' onClick={SignInWithGoogle}>
                            <img src={Google}/>
                            <p>Google</p>
                        </div>
                    </div>
                </div>

                <div className='Sign-up'>
                    <p>Don't have an account? <span onClick={Register}>Sign up</span></p>
                </div>

            </div>
        </div>
    )
}

export default Login;
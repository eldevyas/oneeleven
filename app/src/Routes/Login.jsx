import React from 'react'
import '../Dist/login.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Facebook from './../assets/svg/Facebook.svg';
import Google from './../assets/svg/Google.svg'

function Login() {
    return (
        <div class="Login">
            <div className='Login-Container'>
                <h1>Login to your account</h1>

                <form>
                    <label className='Username'>
                        <span><AccountCircleOutlinedIcon/></span>
                        <input type='text' placeholder='Username'/>
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
                        <p>or continue with</p>
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
                    <p>Don't have an account? <span>Sign up</span></p>
                </div>

            </div>
        </div>
    )
}

export default Login;
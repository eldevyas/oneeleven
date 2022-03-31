import React, { Component , useState } from 'react'

import '../Dist/Pages/index.css'
import Header from '../Layouts/header'
import Main from '../Components/main'
import MainBackground from '../Components/mainBackground';
import Options from '../Components/options'
import Purpose from '../Components/purpose'
import Algorithm from '../Components/algorithm'
import Services from '../Components/services'
import Mailing from '../Components/mailing'
import Footer from '../Layouts/footer'
import TopButton from '../Layouts/topButton'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';import {auth, authentication} from '../firebase'
import { updateProfile, getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";



class LoggedInAs extends React.Component {
  render() {

     var Name = this.props.Name;

     return (
        <div className="Push">
          <div className="Icon">
            <CheckCircleOutlineIcon fontSize='large'/>
          </div>
          <div className="Message">
            <h3>Success</h3>
            <p> Logged in as { Name }.</p>
          </div>

          <div className="Close">
            Close
          </div>
          
          
        </div>
     )
 }
}

const CheckIfLoggedIn = () => {
  const [isLoggedin, setIsLoggedIn] = React.useState(false);
  auth.onAuthStateChanged(function(user) {
    setIsLoggedIn(!!user);
  });
  return (
    <>
      {isLoggedin ? (<LoggedInAs Name={auth.currentUser.displayName} />) : (null)}
    </>
  )
}


function Home() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <div className="Main">
          <Header/>
          <Main/>
          <MainBackground/>
          <CheckIfLoggedIn/>
        </div>
        <div className="Content">
          <Options/>
          <Purpose/>
          <Algorithm/>
          <Services/>
          <Mailing/>
          <TopButton/>
        </div>
        <div className='Footer'>
          <Footer/>
        </div>
      </div>
  )
}

export default Home;
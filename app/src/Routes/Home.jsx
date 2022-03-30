import React, { Component , useState } from 'react'

import '../Dist/index.min.css'
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

import CheckIcon from '@mui/icons-material/Check';
import {auth, authentication} from '../firebase'
import { updateProfile, getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";



class LoggedInAs extends React.Component {
  render() {

     var Name = this.props.Name;

     return (
        <div className="Push">
          <CheckIcon/>
          <h1> Welcome back. { Name } ! </h1>
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
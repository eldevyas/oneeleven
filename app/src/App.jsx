import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'
import Register from './Routes/Register'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAg4AXsSJqO9MlQ90ejw5VyETYIE0gvi0",
  authDomain: "oneeleven-8b18d.firebaseapp.com",
  projectId: "oneeleven-8b18d",
  storageBucket: "oneeleven-8b18d.appspot.com",
  messagingSenderId: "473027161799",
  appId: "1:473027161799:web:f44ee8f4efa5a9b14c98e2",
  measurementId: "G-C8FCKZ372B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log(analytics)

function App() {
    return(
        <Router>
            <div className="App">
                <div className="Page">
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;
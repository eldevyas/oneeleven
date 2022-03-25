import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'
import Header from './Layouts/header'


function App() {
    return(
        <Router>
            <div className="App">
                <Header/>

                <div className="Page">
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;
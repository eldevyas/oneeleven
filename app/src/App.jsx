import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'


function App() {
    return(
        <Router>
            <div className="App">
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
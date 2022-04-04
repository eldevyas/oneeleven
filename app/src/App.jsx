import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'
import Register from './Routes/Register'
import Loader from './Layouts/loader';
import { AuthProvider } from './Contexts/AuthContext'

function App() {
    return(
        <AuthProvider>
            <Router>
                <div className="App">
                    <Loader/>
                    <div className="Page">
                        <Routes>
                            <Route exact path="/" element={<Home />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route path="/register" element={<Register />}></Route>
                        </Routes>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App;
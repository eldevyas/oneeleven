import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Routes/Home'
import Login from './Routes/Login'
import Register from './Routes/Register'
import { AuthProvider } from './Contexts/AuthContext'
import PageNotFound from './Routes/404'
import Users from './Routes/Users'






function App() {
    return(
        <AuthProvider>
            <Router>
                <div className="App">
                    <div className="Page">
                        <Routes>
                            <Route exact path="/" element={ <Home/> }/>
                            <Route path="/login" element={ <Login/> }/>
                            <Route path="/register" element={ <Register/> }/>
                            <Route path='/users' element={<Users/>}/>
                            <Route path='*' element={ <PageNotFound/> }/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    )
}

export default App;
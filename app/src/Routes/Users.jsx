import React, {Component, useState, useEffect} from 'react';
import './../Dist/Pages/Users.css'; 


function Users(){
    const [User, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const Result = await fetch('http://localhost:8888/OneEleven-Backend/user.json');
            const jsonResult = await Result.json()
            
            setUser(jsonResult)
        }

        fetchData()
    })

    return(
        <div className= 'UsersPage'>
            <h1>List of users on MySQL Database:</h1>

            <div className='Container'>
                <table>
                    <thead>
                        <tr className='Head'>
                            <th> Username</th>
                            <th> User Email</th>
                            <th> User Password</th>
                            <th> User Profile Picture</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        User.map(
                            User => 
                            <tr key = {User.id}>
                                    <td> { User.Username} </td>   
                                    <td> {User.Email}</td>
                                    <td> {User.Password}</td>
                                    <td> {User.ProfileImage}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;


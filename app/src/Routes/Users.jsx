import React, {Component, useState, useEffect} from 'react';
import './../Dist/Pages/Users.css'; 


class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Users: [{
                id: 1,
                Username: "Ramesh",
                Email: "ramesh@gmail.com",
                Password: "Fadatare",
                ProfileImage: null
            },
            {
                id: 2,
                Username: "Tom",
                Email: "tom@gmail.com",
                Password: "Cruise",
                ProfileImage: null
            },
            {
                id: 3,
                Username: "Tony",
                Email: "ramesh@gmail.com",
                Password: "Stark",
                ProfileImage: null
            },
            {
                id: 4,
                Username: "John",
                Email: "john@gmail.com",
                Password: "Cena",
                ProfileImage: null
            }]
        }
    }

    componentDidMount() {
        const fetchData = async () => {
            fetch('')
        }
    }



    render() {

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
                            this.state.Users.map(
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
    
}

export default Users;


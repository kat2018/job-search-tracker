import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { axios } from "axios"

class LogInPage extends Component {
    state = {
        users: []
    }

    getUserProfile = () => {
        axios.get('localhost:3001/api/users').then(res => {
            this.setState({users: res.data})
        })
    }

    render() {
        return (
            <div>
                <h1>Job Search Tracker</h1>
                <img src="#" alt="user profile image"/>
                <h3>
                    Welcome {this.state.users.map(user => {
                    return(<Link to={`/user/${jobSeeker._id}`}> {user.jobSeeker} </Link>  )
                })}
                </h3>
                <button type="submit">Enter</button>
            </div>
        )
    }
}

export default LogInPage
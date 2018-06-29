import React, { Component } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"

class LogInPage extends Component {
    state = {
        userName: ''
    }

    getUserProfile = () => {
        axios.get('localhost:3001/api/userName').then(res => {
            this.setState({userName: res.data})
        })
    }

    render() {
        return (
            <div>
                <h1>Job Search Tracker</h1>
                <img src="#" alt="user profile"/>
                <h3>
                    Welcome {this.props.users.map((user) => {
                    return(<Link key={user._id} to={`/user/${user._id}`}> {user.jobSeeker} </Link>  )
                })}
                </h3>
                <button type="submit">Enter</button>
            </div>
        )
    }
}

export default LogInPage
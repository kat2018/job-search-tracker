import React, { Component } from 'react'
import './App.css'
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from './components/HomePage'
import JobCardsPage from './components/JobCardsPage'
import LogInPage from './components/LogInPage'

class App extends Component {
  // state = {
  //   jobSeeker: []
  // }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/"> Home </Link>
            <h1>Page Title</h1>
            <input type="text" placeholder="Search..." />
            <Link to="/users">User</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" render={LogInPage} />
            <Route path="/user/:userId" component={JobCardsPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App

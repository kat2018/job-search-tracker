import React, { Component } from 'react'
import './App.css'
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Button } from "reactstrap";
import HomePage from './components/HomePage'
import JobCardsPage from './components/JobCardsPage'
import LogInPage from './components/LogInPage'



class App extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    state = {
        jobSeeker: []
    }

    componentDidMount() {
        axios.get('/users').then((res) => {
            this.setState({ users: res.data.users })
        }).catch((err) => {
            console.error(err)
        })
    }

    render() {
        return <div>
            <Navbar color="faded" light>
              <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

              <NavbarBrand href="/" className="mr-auto">
                Job Search Tracker
              </NavbarBrand>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/organizations/">Organizations of Interest</NavLink>
                    <NavLink href="/contacts/">Contacts</NavLink>
                    <NavLink href="/networking/">Networking Events</NavLink>
                    <NavLink href="/resources/">Resources</NavLink>
                    <NavLink href="/goals/">Weekly Goals</NavLink>
                    <NavLink href="/job_application/">Job Applications</NavLink>
                    <NavLink href="/interviews/">Interviews</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/kat2018/job-search-tracker">
                      My GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
    }

    
    
    
    
    // {
    //     return (
    //         <Router>
    //             <div>

    //                 <Switch>
    //                     <nav>
    //                         <Link to="/"> Home </Link>
    //                         <h1>Page Title</h1>
    //                         <input type="text" placeholder="Search..." />
    //                         <Link to="/users">User</Link>
    //                     </nav>
    //                     <Route exact path="/" component={HomePage} />
    //                     <Route path="/login" render={LogInPage} />
    //                     <Route path="/user/:userId" component={JobCardsPage} />
    //                 </Switch>
    //             </div>
    //         </Router>
    //     )
    // }
}

export default App
import React, { Component } from 'react'
import './App.css'
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import IoAndroidSearch from "react-icons/lib/io/android-search"
import IoHeart from "react-icons/lib/io/heart"
import IoAndroidMoreVertical from "react-icons/lib/io/android-more-vertical"






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
                <NavLink href="/search/"> <IoAndroidSearch /> </NavLink>
                <NavLink href="/favorites/"> <IoHeart /> </NavLink>
                <NavLink href="/more/"> <IoAndroidMoreVertical /> </NavLink>
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
}


export default App
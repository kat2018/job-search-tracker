import React, { Component } from 'react'
import './App.css'
import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom"
import axios from "axios"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import IoAndroidSearch from "react-icons/lib/io/android-search"
import IoHeart from "react-icons/lib/io/heart"
import IoAndroidMoreVertical from "react-icons/lib/io/android-more-vertical"


import { Button } from "reactstrap"
import HomePage from './components/HomePage'
import JobCardsPage from './components/JobCardsPage'
import LogInPage from './components/LogInPage'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle, Form, FormGroup, Label, Input, FormText
} from "reactstrap";
import IoToggleFilled from "react-icons/lib/io/toggle-filled";



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
            <div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Company Name</CardTitle>
                            <CardSubtitle>Contact Name</CardSubtitle>
                            <CardSubtitle>Experience <IoToggleFilled /> </CardSubtitle>
                            <CardSubtitle>Date Submitted</CardSubtitle>
                            <CardSubtitle>Job Title</CardSubtitle>
                            <FormGroup>
                                <Label for="exampleText">Comments</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
          </div>
    }
}


export default App
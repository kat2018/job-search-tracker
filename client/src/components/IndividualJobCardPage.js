import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardLink, CardTitle, CardSubtitle, Form, FormGroup, Label, Input, FormText} from "reactstrap";
import HomePage from './components/HomePage'
import JobCardsPage from './components/JobCardsPage'
import LogInPage from './components/LogInPage'
import IoToggleFilled from "react-icons/lib/io/toggle-filled";

class IndividualJobCardPage extends Component {
    render() {
        return <div>
            <div>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Company Name</CardTitle>
                  <CardSubtitle>Contact Name</CardSubtitle>
                  <CardSubtitle>
                    Experience <IoToggleFilled />{" "}
                  </CardSubtitle>
                  <CardSubtitle>Date Submitted</CardSubtitle>
                  <CardSubtitle>Job Title</CardSubtitle>
                  <FormGroup>
                    <Label for="exampleText">Comments</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                  </FormGroup>
                  <CardLink href="#">New</CardLink>                  
                  <CardLink href="#">Save</CardLink>
                  <CardLink href="#">Edit</CardLink>
                  <CardLink href="#" color="danger">Delete</CardLink>
                </CardBody>
              </Card>
            </div>
          </div>;
    }
}

export default IndividualJobCardPage;
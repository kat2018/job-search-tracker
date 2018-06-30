import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';

class IndividualJobCardPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Card>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Company Name</CardTitle>
                            <CardSubtitle>Contact Name</CardSubtitle>
                            <CardSubtitle>Experience <IoToggleFilled/> </CardSubtitle>
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
        )
    }
}

export default IndividualJobCardPage;
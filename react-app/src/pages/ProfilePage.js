import React, { Component } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup, Radio } from 'react-bootstrap'

class Profile extends Component {

    render() {
        return (
            <Form>
                <h1>Редактирование данных</h1>
                <FormGroup controlId="formFirstname">
                    <ControlLabel>Firstname</ControlLabel>
                    <FormControl type="text" placeholder="Jane" />
                </FormGroup>
                <FormGroup controlId="formLastname">
                    <ControlLabel>Lastname</ControlLabel>
                    <FormControl type="text" placeholder="Doe" />
                </FormGroup>
                <FormGroup controlId="formEmail">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" placeholder="jane.doe@example.com" />
                </FormGroup>
                <FormGroup controlId="formUsername">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl type="text" placeholder="Jane" />
                </FormGroup>
                <FormGroup controlId="formBirthday">
                    <ControlLabel>Date_of_birthday</ControlLabel>
                    <FormControl type="date" placeholder="11.10.2000" />
                </FormGroup>
                <FormGroup controlId="formPhone">
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl type="phone" placeholder="(xxx) xxx xxx xxx" />
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Sex</ControlLabel><br></br>
                    <Radio name="radioGroup" inline>male</Radio>
                    <Radio name="radioGroup" inline>female</Radio>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Family status</ControlLabel>
                    <FormControl componentClass="select" placeholder="Family status">
                        <option value="Married">Married</option>
                        <option value="Common Law Marriage">Common Law Marriage</option>
                        <option value="Single ">Single</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Legally Separated">Legally Separated</option>
                    </FormControl>
                </FormGroup>
                <Button type="submit">update</Button>
            </Form>
        );
    }
}


export default Profile;
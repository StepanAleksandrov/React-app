import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { registration} from '../actions/userAction';
import { Button, ControlLabel, Form, FormControl, FormGroup, Radio } from 'react-bootstrap'

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstname: '',
                lastname: '',
                email: '',
                dateOfBirthday: '',
                phone: '',
                familyStatus: '',
                username: '',
                password: '',
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        localStorage.setItem('username', user.username);
        localStorage.setItem('password', user.password);

        if (user.username && user.password) {
            dispatch(registration(user));
        }
    }


    render() {
        const { user, submitted} = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <h1>Регистрация</h1>
                <FormGroup controlId="formFirstname">
                    <ControlLabel>Firstname</ControlLabel>
                    <FormControl type="text" placeholder="Jane" name="firstname" value={user.firstname} onChange={this.handleChange} required/>
                </FormGroup>
                <FormGroup controlId="formLastname">
                    <ControlLabel>Lastname</ControlLabel>
                    <FormControl type="text" placeholder="Doe" name="lastname" value={user.lastname} onChange={this.handleChange} required/>
                </FormGroup>
                <FormGroup controlId="formEmail">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl type="email" placeholder="jane.doe@example.com" name="email" value={user.email} onChange={this.handleChange} required pattern="\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+"/>
                </FormGroup>
                <FormGroup controlId="formUsername">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl type="text" placeholder="Jane" name="username" value={user.username} onChange={this.handleChange} required/>
                </FormGroup>
                <FormGroup controlId="formPassword">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl type="password" placeholder="" pattern="(?=.*[0-9])(?=.*[!@#$%^&*]?)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}" name="password" value={user.password} onChange={this.handleChange} required />
                    {submitted && !user.password &&
                        <div className="help-block">Password is required</div>
                    }
                </FormGroup>
                <FormGroup controlId="formBirthday">
                    <ControlLabel>Date_of_birthday</ControlLabel>
                    <FormControl type="date" placeholder="11.10.2000" name="dateOfBirthday" value={user.dateOfBirthday} onChange={this.handleChange} required/>
                </FormGroup>
                <FormGroup controlId="formPhone">
                    <ControlLabel>Phone</ControlLabel>
                    <FormControl type="phone" placeholder="+38-XXX-XXX-XX-XX"  name="phone" value={user.phone} onChange={this.handleChange}/>
                </FormGroup>                                                                     
                <FormGroup>
                    <ControlLabel>Gender</ControlLabel><br></br>
                    <Radio name="radioGroup" inline>male</Radio>
                    <Radio name="radioGroup" inline>female</Radio>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Family status</ControlLabel>
                    <FormControl componentClass="select" placeholder="Family status" name="familyStatus" value={user.familyStatus} onChange={this.handleChange} required>
                        <option value="Married">Married</option>
                        <option value="Common Law Marriage">Common Law Marriage</option>
                        <option value="Single ">Single</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Legally Separated">Legally Separated</option>
                    </FormControl>
                </FormGroup>
                <Button type="submit">Submit</Button>
                <Link to="/login" className="btn btn-link">Cancel</Link>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const RegisterPage = connect(mapStateToProps)(Registration);
export default RegisterPage ;
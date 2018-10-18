import React, { Component } from 'react';
import { Button, ControlLabel, Col, Form, FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../actions/userAction';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(login(username, password));
    }
  }

  render() {

    const { username, password, submitted } = this.state;

    return (
      <Form horizontal bsClass='form' onSubmit={this.handleSubmit}>
        <h1>ВХОД</h1>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel}>
            Username
          </Col>
          <Col>
            <FormControl type="text" placeholder="username" name="username" value={username} onChange={this.handleChange}/>
          </Col>
          {submitted && !username &&
            <div className="help-block">Username is required</div>
          }
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel}>
            Password
          </Col>
          <Col>
            <FormControl type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange}/>
          </Col>
          {submitted && !password &&
            <div className="help-block">Password is required</div>
          }
        </FormGroup>

        <FormGroup>
          <Col>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
        <Link to='/registration'>Don't have an account?</Link>
      </Form>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.authentication.error
  }
}

const LoginPage = connect(mapStateToProps)(Login);

export default LoginPage; 

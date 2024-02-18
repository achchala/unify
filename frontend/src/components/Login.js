import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from './withRouter'; // Import the withRouter function


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to login');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful login (e.g., redirect to dashboard)
      this.props.history('/home');
      console.log('Login successful:', data);
    })
    .catch(error => {
      console.error('Login error:', error);
      this.setState({ error: 'Failed to login. Please check your credentials.' });
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>New user? <Link to="/signup">Sign up</Link></p>
      </div>
    );
  }
}
export default withRouter(Login); // Use withRouter to access history prop
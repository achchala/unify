import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      university: '',
      program: '',
      courses: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, password, university, program, courses } = this.state;
    const data = {
      name,
      email,
      password,
      university,
      program,
      courses: courses.split(',').map(course => course.trim())
    };
  
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to signup');
      }
      return response.json();
    })
    .then(responseData => {
      // Handle successful signup (if needed)
      console.log('Signup successful:', responseData);
      // Clear form fields
      this.setState({
        name: '',
        email: '',
        password: '',
        university: '',
        program: '',
        courses: ''
      });
    })
    .catch(error => {
      console.error('Signup error:', error);
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" required />
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" required />
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" required />
          <input type="text" name="university" value={this.state.university} onChange={this.handleChange} placeholder="University" required />
          <input type="text" name="program" value={this.state.program} onChange={this.handleChange} placeholder="Program" required />
          <input type="text" name="courses" value={this.state.courses} onChange={this.handleChange} placeholder="Courses (comma-separated)" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    );
  }
}

export default Signup;

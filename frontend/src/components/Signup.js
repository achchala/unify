import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MuiLink from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withRouter } from './withRouter'; // Import the withRouter function

const defaultTheme = createTheme();

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      university: '',
      program: '',
      courses: '',
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
      this.props.history('/login');
    })
    .catch(error => {
      console.error('Signup error:', error);
    });
  }

  render() {
    return (
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                value={this.state.name}
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                id="university"
                label="University"
                name="university"
                value={this.state.university}
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                id="program"
                label="Program"
                name="program"
                value={this.state.program}
                onChange={this.handleChange}
              />
              <TextField
                margin="normal"
                fullWidth
                id="courses"
                label="Courses"
                name="courses"
                value={this.state.courses}
                onChange={this.handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <MuiLink href="/login" variant="body2">
                    Already have an account? Sign in
                  </MuiLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

export default withRouter(SignUp); // Use withRouter to access history prop

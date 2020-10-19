import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import FormContainer from '../components/FormContainer';
import axios from 'axios';


const LoginPage = () => {
  
  const [user, setUser] = useState({
    name: '',
    password: ''
  });

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    setUser({ name: user.username, password: user.password });
    console.log(user);
    axios.post('http://localhost:5000/api/login', user)
        .then(response => {
          console.log(response)
        }).catch(error => console.log(error))

}, []);
    
    const submitHandler = (e) => {
        e.preventDefault()
    }
    
    return(
        <div>
            <FormContainer>
                <h1>Sign In</h1>
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='username'>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type='password'
                      placeholder='Enter password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Button type='submit' variant='primary'>
                    Sign In
                  </Button>
                </Form>
            </FormContainer>

        </div>
)}

export default LoginPage;
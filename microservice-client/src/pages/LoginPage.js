import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';


const LoginPage = () => {
  const [user, setUser] = useState({firstname: '', password: ''});

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
 
        
    const submitHandler = (e) => {
        e.preventDefault()
        setUser({firstname: username, password: password})
        // POST request using axios inside useEffect React hook
        axios.post(
          'http://localhost:3001/api/users/login', 
          {
          username: user.firstname, password: user.password
          })
            .then(response => {
              console.log(response.data.user)
            }).catch(error => console.log(error))
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
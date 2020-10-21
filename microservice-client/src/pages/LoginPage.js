import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';
import { useHistory } from 'react-router'
import { Link, Redirect, Route, Router, withRouter } from 'react-router-dom';

const LoginPage = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [data, setData] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  const history = useHistory();
 

    const submitHandler = (e) => {
        e.preventDefault()
        
        console.log(`data: ${data}`)
        // POST request using axios 
        axios.post(
          'http://localhost:5000/api/users/login', 
          {
          username: username, password: password
          })
            .then(response => {
              console.log(response)
              setLoggedIn(true);
              let user = {firstname: username}
              user.firstname ? alert(`welcome ${user.firstname}`) : alert('no user') && setData(user.firstname)
              setUsername('')
              setPassword('')
              history.push('/patch')
            }).catch(error => console.error(error))
          }
          
          useEffect(() => {
            console.log(loggedIn)
            
          });
    
          
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

// loggedIn ? history.push("/patch") : console.log('h')
export default LoginPage;
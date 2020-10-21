import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import axios from 'axios';


const PatchingPage = () => {
  const [username, setUsername] = useState('')
  const [jsonObject, setJsonObject] = useState('Johnny')
  const [jsonPatchObject, setJsonPatchObject] = useState('James')
 
        
    const submitHandler = (e) => {
        e.preventDefault()
        // PATCH user data 
        // setJsonObject({ "user": { "firstName": "John " } })
        setJsonPatchObject({"op": "replace", "path": "/user/firstName", "value": "Jane"})
        axios.patch(
          'http://localhost:5000/api/patch-object', 
          {
            jsonObject: setJsonObject([{ "user": { "firstName": "John " }}]),
            jsonPatchObject: setJsonPatchObject([{"op": "replace", "path": "/user/firstName", "value": "Jane"}])
          })
            .then(response => {
              console.log(response)
            }).catch(error => console.log(error))
    }

    return(
        <div>
            <FormContainer>
                <h1>Patch Data</h1>
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId='username'>
                    <Form.Label>User: {jsonObject}</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter new name'
                      value={jsonPatchObject}
                      onChange={(e) => setUsername(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <Button type='submit' variant='primary'>
                    Patch User?
                  </Button>
                </Form>
            </FormContainer>
        </div>
)}

export default PatchingPage
  ;

const { expect } = require('chai')
const request = require('supertest')

const app = require('../app')


describe('HackerBay Stateless Microservice', () => {

  // Create dummy login data
  const loginDetails = { username: 'someone', password: 'awesome' }
  
  // Create token variable to save user token
  let token
  
  // Set various variables to be used in the application
  const jsonObject = '{ "user": { "firstName": "John", "lastName": "Doe" } }'
  const jsonPatchObject = '[{"op": "replace", "path": "/user/firstName", "value": "Jane"}, {"op": "replace", "path": "/user/lastName", "value": "Doris"}]'

  // Mock user authentication
  describe('Mock Authentication', () => {
    it('it should not log user in if username and password do not meet requirements', (done) => {
      request.agent(app)
        .post('/api/users/login')
        .send({ username: 'someone', password: '' })
        .end((err, res) => {
          expect(res.statusCode).to.equal(400)
        })
      done()
    })

    it('it should accept a username/password and return a signed JWT', (done) => {
      request.agent(app)
        .post('/api/users/login')
        .send(loginDetails)
        .end((err, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body.authorized).to.equal(true)
          token = res.body.token
          done()
        })
    })
  })

  describe('Patch object', () => {
    it('it should patch object A with object B', (done) => {
      request.agent(app)
        .patch('/api/patch-object')
        .set('token', token)
        .send({ jsonObject, jsonPatchObject })
        .end((err, res) => {
          expect(res.statusCode).to.equal(200)
          done()
        })
    })

    it('it should not patch if token is invalid', (done) => {
      request.agent(app)
        .patch('/api/patch-object')
        .set('token', 'randomewwrongtoken')
        .send({ jsonObject, jsonPatchObject })
        .end((err, res) => {
          expect(res.statusCode).to.equal(401)
          expect(res.body.authorized).to.equal(false)
        })
      done()
    })

    it('it should not patch if token is not available', (done) => {
      request.agent(app)
        .patch('/api/patch-object')
        .set('token', '')
        .send({ jsonObject, jsonPatchObject })
        .end((err, res) => {
          expect(res.statusCode).to.equal(403)
          expect(res.body.authorized).to.equal(false)
        })
      done()
    })
  })
})

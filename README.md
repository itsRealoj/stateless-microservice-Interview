# Microservice App Client Setup

Frontend has been built in ``REACTJS``
![](./mircoservice-client/public/frontend.png)

### Please checkout the ``user Stories`` here:
https://github.com/itsRealoj/stateless-microservice-Interview/projects/1

This frontend of the app has two pages -

 * Login page
 * Patching page


## Setup

## Kanbans Project Flow available here:
https://github.com/itsRealoj/stateless-microservice-Interview/projects/1

In the project directory, you can run:

## Available Scripts

After cloning the project to your computer, cd to the project directory, microservice-client and run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

Your app is ready to be deployed!



# Microservice App Server Setup

A simple stateless microservice in Nodejs, with two major functionalities -

 * Authentication
 * JSON patching


## Setup

The API requires:
 * [Node.js](https://nodejs.org/en/download/)
 * [Express](https://expressjs.com/)
 * [Mocha](https://mochajs.org/) - For testing

To get up and running: 

**1.** Clone the git@github.com:itsRealoj/stateless-microservice-Interview.git
```
git clone git@github.com:itsRealoj/stateless-microservice-Interview.git
```

**2.**  ```cd``` into repo. Use the same directory name(below) if you do not change it.
```
cd stateless-microservice
```

**3.**  use npm to set up the dependencies of the application by using the command below
```
npm install
```

**4.**  The app gets up and running on port 5000 with ```npm start```.

**5.**  **Important** Create a ```.env``` file and set ```jwtSecret``` to any secret phrase you want.
 

## Testing the API routes.

You can use [Postman](https://www.getpostman.com/) to test the routes, but I have added a working ReactJS frontend to provide the UI for PATCH function and Login interface.

### Authentication
You can pass in any username or password to login.
 1. Set the request to **POST** and the url to _/api/users/login_. 
 2. In the **Body** for the Postman request, select **x-www-form-urlencoded**.
 3. You will be setting 2 keys (for username and password). Set the ```username``` key to any name. Set ```password``` to any password (minimum of 6 characters).
 4. Hit ```Send```. You will get a result in this format:
 ```
 {
    "user": "John",
    "authorized": true,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1vaSIsImlhdCI6MTUzMjAwNDkwMSwiZXhwIjoxNTMyMDI2NTAxfQ.sonItbpZ_yKsRLDXNfDqwN6yN5VbdMVDhgKAMxDmPFY"
}
 ```


 ### JSON patching
Apply json patch to a json object, and return the resulting json object.
 1. Set the request to **PATCH** and the url to _/api/patch-object_.
 2. Set the key ```jsonObject``` to an object you would like to patch. Set the key ```jsonPatchObject``` to the object you want to use to patch the ```jsonObject```.
 ```
 Examples:
 jsonObject
 { "user": { "firstName": "John ", "lastName": "Doe" } }

 jsonPatchObject
 [{"op": "replace", "path": "/user/firstName", "value": "Jane"}, {"op": "replace", "path": "/user/lastName", "value": "Mary"}]
 ```
 3. Since this is a secure route, for testing, you will have to set the token in the ```Header```. Set key as ```token``` and value as token you received from **Authentication**.
 4. Expected result should be:
 ```
 { "user": { "firstName": "Jane", "lastName": "Mary" } }
 ```


## Unit Testing

Unit testing is done using Mocha (https://mochajs.org).

Run ```npm test``` from the application's root directory.

I used nyc to add coverage to mocha tests by following the Quick Start at (https://istanbul.js.org/)

This is what you will do to add coverage to the mocha tests:

$ npm install --save-dev nyc

Now, simply place the command nyc in front of your existing test command in package.json, for example:

{
  "scripts": {
    "test": "nyc mocha"
  }
}

## Logging

All logs are saved in ```hackerbay.log``` in the application's root.


## Built With

 * [Node.js](https://nodejs.org)
 * [Express](https://expressjs.com/)
 * [Mocha](https://mochajs.org/) - For tests


## Results

 1. Test: All tests specified in test.js with [Mocha](https://mochajs.org/) are running well (use: npm test)
 
 2. Istanbul_ coverage is working using nyc at https://istanbul.js.org/ to generate code test coverage reports.


 
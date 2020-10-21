import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/LoginPage';
import Header from './components/Header'
import Footer from './components/Footer'
import PatchingPage from './pages/PatchingPage';
import Switch from 'react-bootstrap/esm/Switch';

function App() {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>
            <Switch>
            <Route exact path='/patch' component={PatchingPage} />
            <Route exact path='/' component={LoginPage} />
            </Switch>
            {/* <LoginPage/> */}
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;

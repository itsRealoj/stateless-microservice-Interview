import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css';
import LoginPage from './pages/LoginComponent';
import Header from './components/Header'
import Footer from './components/Footer'
import PatchingPage from './pages/PatchingComponent';

function App() {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>
          <Route path='/patch' component={PatchingPage} />
            <LoginPage/>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;

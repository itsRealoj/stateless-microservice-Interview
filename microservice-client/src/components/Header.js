import React from 'react'
import { Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

const Header = () => {

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Microservice App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

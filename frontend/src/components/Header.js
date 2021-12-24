import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
      <Container fluid>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img src='./image/acmegrade.png' alt='Acmegrade' id='imgnav' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav className='m-auto'>
            <LinkContainer to='/home'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/classroom'>
              <Nav.Link>Live Classroom</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/leaderboard'>
              <Nav.Link>Leaderboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/achieve'>
              <Nav.Link>Achievements</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/course'>
              <Nav.Link>Explore Course</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

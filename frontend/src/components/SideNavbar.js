import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const SideNavbar = () => {
  return (
    <Navbar bg='primary' variant='dark' className='SideNavbar2'>
      <Nav defaultActiveKey='/home' className='flex-column SideNavbar1 mb-auto'>
        <LinkContainer to='/'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <Nav.Link>Features</Nav.Link>
        <Nav.Link>Pricing</Nav.Link>
        <hr />
        <LinkContainer to='/'>
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <Nav.Link>Features</Nav.Link>
        <Nav.Link>Pricing</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default SideNavbar

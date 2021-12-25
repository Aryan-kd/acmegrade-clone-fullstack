import React from 'react'
import './SideNavbar.css'
// import { Nav, Navbar } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap'

const SideNavbar = () => {
  return (
    // <Navbar bg='primary' variant='dark' className='SideNavbar2'>
    //   <Nav defaultActiveKey='/home' className='flex-column SideNavbar1 mb-auto'>
    //     <LinkContainer to='/'>
    //       <Nav.Link>Home</Nav.Link>
    //     </LinkContainer>
    //     <Nav.Link>Features</Nav.Link>
    //     <Nav.Link>Pricing</Nav.Link>
    //     <hr />
    //     <LinkContainer to='/'>
    //       <Nav.Link>Home</Nav.Link>
    //     </LinkContainer>
    //     <Nav.Link>Features</Nav.Link>
    //     <Nav.Link>Pricing</Nav.Link>
    //   </Nav>
    // </Navbar>
    <div className='main-menu'>
      <ul>
        <section id='home'>
          <li className='menu-item'>
            <i className='fa fa-home'></i> Home
          </li>
          <li className='menu-item'>
            <i className='fa fa-bell'></i> Notification
          </li>
          <li className='menu-item'>
            <i className='fa fa-paper-plane'></i> Messages
          </li>
        </section>
        <section id='other'>
          <li className='menu-item'>
            <i className='fa fa-code'></i> Programming
          </li>
          <li className='menu-item'>
            <i className='fa fa-globe'></i> Blogging
          </li>
          <li className='menu-item'>
            <i className='fa fa-gamepad'></i> Gaming
          </li>
          <li className='menu-item'>
            <i className='fa fa-music'></i> Art & Music
          </li>
          <li className='menu-item'>
            <i className='fa fa-book'></i> Books
          </li>
          <li className='menu-item'>
            <i className='fa fa-motorcycle'></i> Travel
          </li>
          <li className='menu-item'>
            <i className='fa fa-wrench'></i> Technology
          </li>
          <li className='menu-item'>
            <i className='fab fa-facebook'></i> Facebook
          </li>
          <li className='menu-item'>
            <i className='fab fa-instagram'></i> Instagram
          </li>
          <li className='menu-item'>
            <i className='fab fa-github'></i> Github
          </li>
        </section>
      </ul>
    </div>
  )
}

export default SideNavbar

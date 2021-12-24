import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className='bg-dark text-white'>
      <Container>
        <Row>
          <Col className='text-center py-2'>
            Copyright &copy; 2022 Acmegrade by ARYAN KODINYA{' '}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'

const HomeScreen = () => {
  return (
    <Container>
      <h1 className='text-center my-3'>Your Courses</h1>
      <Row>
        <Col sm={10} md={6} lg={4} xl={3}>
          <LinkContainer to='/content/1'>
            <Card className='my-2 rounded mx-auto text-center'>
              <Card.Text className='p-2 my-0 d-flex'>
                <span className='me-auto'>Days left: 111</span>
                <span className='ml-auto text-success'>Completed</span>
              </Card.Text>
              <Link to='/content/1'>
                <Card.Img
                  className='imgcard'
                  variant='top'
                  src='./image/ai.jpg'
                />
              </Link>
              <Card.Body>
                <Card.Title>
                  Course: <strong>Artificial Intelligence</strong>
                </Card.Title>
              </Card.Body>
              <Rating value={4} />
            </Card>
          </LinkContainer>
        </Col>
        <Col sm={10} md={6} lg={4} xl={3}>
          <LinkContainer to='/content/1'>
            <Card className='my-2 rounded mx-auto text-center'>
              <Card.Text className='p-2 my-0 d-flex'>
                <span className='me-auto'>Days left: 111</span>
                <span className='ml-auto text-danger'>Not Completed</span>
              </Card.Text>
              <Link to='/content/1'>
                <Card.Img
                  className='imgcard'
                  variant='top'
                  src='./image/webdev.jpg'
                />
              </Link>
              <Card.Body>
                <Card.Title>
                  Course: <strong>Web Devlopment</strong>
                </Card.Title>
              </Card.Body>
              <Rating value={4} />
            </Card>
          </LinkContainer>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen

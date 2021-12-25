import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const MainScreen = () => {
  return (
    <Container fluid>
      <h1 className='text-center p-3 my-3'>Welcome to Acmegrade</h1>
      <h3 className='text-center p-3 my-3'>Tell us About your expirence</h3>
      <Container className='my-3 p-3 bg-light w-75'>
        <Form>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Aryan Kodinya' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Feedback</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              placeholder='Type your feedback'
            />
          </Form.Group>
          <Form.Group controlId='formFileMultiple' className='mb-3'>
            <Form.Label>Final Project Screenshoot/Folder</Form.Label>
            <Form.Control type='file' multiple />
          </Form.Group>
          <br />
          <Button
            as='input'
            variant='outline-warning'
            type='submit'
            value='Submit'
          />
          {'  '}
          <Button
            as='input'
            variant='outline-danger'
            type='reset'
            value='Reset'
          />
        </Form>
      </Container>
    </Container>
  )
}

export default MainScreen

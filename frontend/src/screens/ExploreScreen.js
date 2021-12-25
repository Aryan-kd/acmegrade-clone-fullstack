import React from 'react'
import { Alert, Container } from 'react-bootstrap'

const ExploreScreen = () => {
  return (
    <Container className='my-3 text-center'>
      <Alert key='danger' variant='danger'>
        Opps No course Available!!!
      </Alert>
    </Container>
  )
}

export default ExploreScreen

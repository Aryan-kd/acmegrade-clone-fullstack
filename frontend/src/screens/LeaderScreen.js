import React from 'react'
import { Button, ButtonGroup, Container, Table } from 'react-bootstrap'
import Tabledata from '../components/Tabledata'

const ClassroomScreen = () => {
  return (
    <Container className='my-3 text-center'>
      <ButtonGroup className='mb-3 w-75'>
        <Button variant='outline-primary'>My Brance</Button>
        <Button variant='outline-primary'>My Batch</Button>
        <Button variant='outline-primary'>My Department</Button>
      </ButtonGroup>
      <p className='text-decoration-underline mb-4'>
        Your rank is 8 out of 10 players
      </p>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Rank</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {Tabledata.map((product) => (
            <tr>
              <td>
                {product.id}
                <span className='malechild'>
                  <img src={product.img} alt='child' />
                </span>
              </td>
              <td className='text-decoration-underline'>{product.first}</td>
              <td className='text-decoration-underline'>{product.last}</td>
              <td>{product.points}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default ClassroomScreen

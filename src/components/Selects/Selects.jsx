import React from 'react'
import './Selects.css'
import { Form } from 'react-bootstrap'

function Selects() {
  return (
    <section>
      <Form.Select aria-label='Default select example'>
        <option>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Form.Select>

      <Form.Select aria-label='Default select example'>
        <option>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Form.Select>

      <Form.Select aria-label='Default select example'>
        <option>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Form.Select>
    </section>
  )
}

export default Selects

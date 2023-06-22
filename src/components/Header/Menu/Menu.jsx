import React, { useState } from 'react'
import { Button, Offcanvas } from 'react-bootstrap'
import './Menu.css'

function Menu() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <img
        alt='Menu'
        src='imgs/menu-outline.svg'
        onClick={handleShow}
        className='menu-icon hover-scale'
      />

      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='offcanvas-body'>
        <div className='menu-badge'>User name <span className='bullet'></span></div>
        <Button variant='primary' onClick={() => alert('Sales report')}>Sales report</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Menu

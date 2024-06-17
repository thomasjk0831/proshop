import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, Fauser } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
        <Navbar bg ="dark" variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Proshop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </Container>
        </Navbar>
    </header>
  )
}

export default Header
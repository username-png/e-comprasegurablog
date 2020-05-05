import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

const Header = () => (

      <Navbar bg="light" expand="sm" collapseOnSelect>
        <Navbar.Brand href="/">E-CompraSegura</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">Sobre</Nav.Link>
            <Nav.Link href="/blog">Dicas</Nav.Link>
            <Nav.Link href="/securitypages">Sites Seguros</Nav.Link>
            <Nav.Link href="/falsepages">Sites Inseguros</Nav.Link>
            <Nav.Link href="/contact">Cadastro</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

export default Header

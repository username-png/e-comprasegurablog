import React from 'react'
import { Link } from 'gatsby'
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

      /**
       * <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu }
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                Sobre
              </Link>
              <Link className="navbar-item" to="/blog">
                Dicas
              </Link>
              <Link className="navbar-item" to="/securitypages">
                Sites Seguros
              </Link>
              <Link className="navbar-item" to="/falsepages">
                Sites Fraudulentos
              </Link>
              <Link className="navbar-item" to="/contact">
                Cadastro
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav> 
      */
    )

export default Header

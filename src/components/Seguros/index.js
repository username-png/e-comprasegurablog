import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Link} from 'gatsby'
import './index.css'

const Seguros = () => (
  <Jumbotron className='segurosMain'>
      <h1>
        Sites seguros - Top 5
      </h1>
      <hr />
      <h1 className='segurosH1'> 1. https://www.google.com</h1>
      <h1 className='segurosH1'> 2. https://www.google.com</h1>
      <h1 className='segurosH1'> 3. https://www.google.com</h1>
      <h1 className='segurosH1'> 4. https://www.google.com</h1>
      <h1 className='segurosH1'> 5. https://www.google.com</h1>
      
      <h1>
      <Link
          to="/SitesSeguros/"
          className='segurosLista'          
        >Veja Lista Completa
        </Link>
      </h1>
    </Jumbotron>
)

export default Seguros
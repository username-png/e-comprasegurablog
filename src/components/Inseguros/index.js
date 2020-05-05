import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Link} from 'gatsby'
import './index.css'

const Inseguros = () => (
  <Jumbotron className='insegurosMain'>
      <h1>
        Sites Inseguros - Top 5
      </h1>
      <hr />
      <p className='segurosH1'> 1. https://luadishop.com.br</p>
      <p className='segurosH1'> 2. https://offthewall.com.br</p>
      <p className='segurosH1'> 3. https://pneusdrive.com.br</p>
      <p className='segurosH1'> 4. https://logusapostilas.com</p>
      <p className='segurosH1'> 5. https://tenisrun.com.br</p>
      
      <p>
      <Link
          to="/falsepages/"
          className='segurosLista'
          
        >Veja Lista Completa
        </Link>
      </p>
    </Jumbotron>
)

export default Inseguros
import React from 'react'
import {Jumbotron,Col} from 'react-bootstrap'
import {Link} from 'gatsby'
import './index.css'

const Seguros = () => (
  <Jumbotron className='segurosMain'>
      <h1>
        Sites seguros - Top 5
      </h1>
      <hr />
      <Col>
      <p className='segurosH1'> 1. https://www.mercadolivre.com.br/</p>
      <p className='segurosH1'> 2. https://www.americanas.com.br/</p>
      <p className='segurosH1'> 3. https://www.buscape.com.br/</p>
      <p className='segurosH1'> 4. https://www.netshoes.com.br/</p>
      <p className='segurosH1'> 5. https://www.big.com.br/</p>
      
      <p>
      <Link
          to="/securitypages/"
          className='segurosLista'          
        >Veja Lista Completa
        </Link>
      </p>
      </Col>
    </Jumbotron>
)

export default Seguros
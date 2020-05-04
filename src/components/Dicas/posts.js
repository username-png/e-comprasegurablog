import React from "react"
import {Container,Row,Col,Card,CardDeck,Button} from 'react-bootstrap'
import './index.css'

const Posts = () => (
<Container className="postContainer">
  <Row>
    <Col sm={9}>
    <CardDeck>
  <Card className='postCard' >
    <Card.Img variant="top" src='https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg' />
    <Card.Body>
      <Card.Title className='postText' >Card title</Card.Title>
      <Card.Text className='postText'>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text className='postText'>
       15 de Agosto de 2020
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className='postCard' >
    <Card.Img variant="top" src='https://img.freepik.com/fotos-gratis/gotas-de-oleo-na-imagem-abstrata-padrao-psicodelico-de-agua_23-2148290141.jpg?size=626&ext=jpg' />
    <Card.Body>
      <Card.Title className='postText' >Card title</Card.Title>
      <Card.Text className='postText'>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
      <Card.Text className='postText'>
       15 de Agosto de 2020
      </Card.Text>
    </Card.Body>
  </Card>
  </CardDeck>
    </Col>
    <Col sm={3}>
    
    </Col>
  </Row>
  
</Container>
)

export default Posts
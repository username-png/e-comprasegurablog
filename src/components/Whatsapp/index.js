import React from "react"
import {Jumbotron, Form,Col,Button} from 'react-bootstrap'
import './index.css'

const Whatsapp = () => (
  <Jumbotron className='whatsappMain'>
      <h1>Cadastre para receber noticias pelo WhatsApp </h1>
      <Form.Group>
  <Form.Row className='whatsappRow'>
    <Form.Label column="lg" lg={1}>
      Nome:
    </Form.Label>
    <Col>
      <Form.Control className='whatsappInput'type="text" placeholder="" />
    </Col>
  </Form.Row>
  <Form.Row className='whatsappRow'>
    <Form.Label column="lg" lg={1}>
      WhatsApp:
    </Form.Label>
    <Col>
      <Form.Control className='whatsappInput' type="text" placeholder="" />
    </Col>
  </Form.Row>
  </Form.Group>
  <Button variant="outline-info" size="lg">Cadastrar</Button>
    </Jumbotron>
)

export default Whatsapp
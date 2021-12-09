import React from 'react';
import {Button, Form, Container, Row} from 'react-bootstrap';


const Page10 = () => {
  return <div>
<Container className="mb-1 col-4 p-5 text-align-center">
  <h3>Formulario para actualizar avances</h3>
</Container>

      <Container className="mb-3 col-8 p-2">
        <Form>
          <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre del proyecto</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu nombre completo" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripción del avance</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu número de identificación" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
  
    </Row>
    <Button variant="primary" type="submit">
    Guardar
      </Button>
  </Form>
</Container>  
  </div>;

};

export default Page10;

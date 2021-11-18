import React from 'react';
import {Button, Form, Container, Row} from 'react-bootstrap';


const Index = () => {
  return (
    <div>
     {/*  <div className='bg-blue-300 h-10'>Iniciar Sesión</div>
      <div className='h-96'>Inicio </div> */}

<Container className="mb-1 col-3 p-5 text-align-center">
  <h3>Iniciar Sesión</h3>
</Container>

      <Container className="mb-3 col-8 p-2">
        
        <Form>
          <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Usuario/Correo</Form.Label>
            <Form.Control type="email" placeholder="Escribe tu usuario o correo" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contraseña</Form.Label>
    <Form.Control type="password" placeholder="Ingresa tu contraseña" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Recordar mis datos" />
  </Form.Group>
  
    </Row><Button variant="primary" type="submit">
    Ingresar
      </Button>
  </Form>
</Container>      
      
      
      {/* <div className='h-96'>Inicio</div> */}
    </div>
  );
};

export default Index;

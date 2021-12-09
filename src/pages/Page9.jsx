import React from 'react';
import {Button, Form, Container, Row } from 'react-bootstrap';

const Page9 = () => {
  return <div>
<Container className="mb-1 col-4 p-5 text-align-center">
  <h3>Actualizar un proyecto</h3>
</Container>

      <Container className="mb-3 col-8 p-2">
        <Form>
          <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombres del proyecto</Form.Label>
            <Form.Control type="email" placeholder="Ingresa el nombre del proyecto" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Objetivo general</Form.Label>
            <Form.Control type="email" placeholder="Ingresa el objetivo general" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Objetivos específicos</Form.Label>
            <Form.Control type="email" placeholder="Ingresa el primer objetivo específico" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Objetivos específicos</Form.Label>
            <Form.Control type="email" placeholder="Ingresa el segundo objetivo específico" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Objetivos específicos</Form.Label>
            <Form.Control type="email" placeholder="Ingresa el tercer objetivo específico" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Presupuesto</Form.Label>
            <Form.Control type="password" placeholder="Escribe el presupuesto del proyecto" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre del lider</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu nombre" />
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Documento del lider</Form.Label>
            <Form.Control type="password" placeholder="Ingresa tu documento" />
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Estado del proyecto</Form.Label>
            <Form.Control type="password" placeholder="Ingresa el estado del proyecto" />
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fase del proyecto</Form.Label>
            <Form.Control type="password" placeholder="Ingresa la fase del proyecto" />
          </Form.Group>

    </Row>
    <Button variant="primary" type="submit">
    Guardar
      </Button>
  </Form>
</Container>  
  </div>;
};

export default Page9;

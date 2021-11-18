import React from 'react';
import {Button, Form, Container, Row} from 'react-bootstrap';

const Page8 = () => {
  return <div>
<Container className="mb-1 col-4 p-5 text-align-center">
  <h3>Actualizar Datos</h3>
</Container>

      <Container className="mb-3 col-8 p-2">
        <Form>
          <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombres y Apellidos</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu nombre completo" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu correo" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Tipo de Documento</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Selecciona el tipo de documento</option>
            <option value="1">Cédula</option>
            <option value="2">Tarjeta de Identidad</option>
            <option value="3">Cédula de extrajería</option>
          </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Número de Identificación</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu número de identificación" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rol</Form.Label>
          <Form.Select aria-label="Default select example">
            <option className="controlId="floatingSelect>Selecciona tu Rol</option>
            <option value="1">Estudiante</option>
            <option value="2">Líder</option>
            <option value="3">Administrador</option>
          </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Actualizar Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Escribe tu contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirma tu Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Confirma tu contraseña" />
          </Form.Group>
  
    </Row>
    <Button variant="primary" type="submit">
    Guardar
      </Button>
  </Form>
</Container>  
  </div>;
};

export default Page8;

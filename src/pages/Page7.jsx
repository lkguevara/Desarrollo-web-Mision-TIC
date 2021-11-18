import React from 'react';
import {Button, Table, Container } from 'react-bootstrap';

const Page7 = () => {
  return <div>
<Container className="mb-1 col-5 p-5 text-align-center">
  <h3>Maestro de Inscripciones</h3>
</Container>

  <Container className="mb-3 col-8 p-2">
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>N°</th>
      <th>Nombre de Proyecto</th>
      <th>Estudiante</th>
      <th>Estado </th>
      <th>Fecha de Ingreso</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
    <tr>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
      <td>---</td>
    </tr>
  </tbody>
</Table>
        




    <Button variant="primary" type="submit">
      Editar Registros
    </Button>

  </Container>  
  </div>;
};

export default Page7;

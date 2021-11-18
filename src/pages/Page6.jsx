import React from 'react';
import {Button, Table, Container } from 'react-bootstrap';

const Page6 = () => {
  return <div>
<Container className="mb-1 col-4 p-5 text-align-center">
  <h3>Maestro de Usuarios</h3>
</Container>

  <Container className="mb-3 col-8 p-2">
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>N°</th>
      <th>Nombre Usuario</th>
      <th>Documento</th>
      <th>Rol</th>
      <th>Estado</th>
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

export default Page6;

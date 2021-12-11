import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import {Button, Table, Container} from 'react-bootstrap';



const IndexUsuarios = () => {
    const {data, error, loading } = useQuery (GET_USUARIOS);

    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);


    return (

        <div>
           <Container className="mb-1 col-4 p-5 text-align-center">
  <h3>Maestro de Usuarios</h3>
</Container>

  <Container className="mb-3 col-8 p-2">
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Correo</th>
      <th>Identificación</th>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Rol</th>
      <th>Estado</th>
    </tr>
  </thead>
  <tbody>
      {data &&
      data.users.map((u) => {
          return (
              <tr key = {u._id}>
                  <td>{u.correo}</td>
                  <td>{u.identificacion}</td>
                  <td>{u.nombre}</td>
                  <td>{u.apellido}</td>
                  <td>{u.rol}</td>
                  <td>{u.estado}</td>

              </tr>

          );
      })};
      </tbody>

 
</Table>
    
    <Button variant="primary" type="submit">
      Editar Registros
    </Button>

  </Container> 

 
        </div>
    )
}

export default IndexUsuarios;
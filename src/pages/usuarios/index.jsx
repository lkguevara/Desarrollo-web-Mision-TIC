import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';
import {Button, Table, Container} from 'react-bootstrap';
import {toast} from 'react-toastify';
import { Link } from 'react-router-dom';


const IndexUsuarios = () => {
    const {data, error, loading } = useQuery (GET_USUARIOS);

    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);

    useEffect(() => {
        if(error){
            toast.error('Error consultando usuarios');
        }
    }, [error]); 

    if (loading) return <div>Cargando...</div>;

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
                  <td>
                      <Link to = {`/usuarios/editar/$(u._id)`}>
                          <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                      </Link>
                  </td>
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
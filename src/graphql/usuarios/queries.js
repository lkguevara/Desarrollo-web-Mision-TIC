import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query users {
    users {
        _id
        correo
        identificacion
        nombre
        apellido
        rol
        estado
    }
}
`;

const GET_USUARIO = gql`
query Usuario ($id: String!) {
    Usuario(_id: $id) {
        _id
        correo
        identificacion
        nombre
        apellido
        rol
        estado
    }
}
`;




export {GET_USUARIOS, GET_USUARIO};
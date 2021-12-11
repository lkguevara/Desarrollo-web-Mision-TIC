import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query Usuarios {
    Usuarios {
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
export {GET_USUARIOS};
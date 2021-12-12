import { gql } from '@apollo/client';

const GET_INSCRIPCIONES = gql`
  query Inscripciones {
    Inscripciones {
      _id
      estado
      estudiante {
        _id
  
      }
      proyecto {
        _id
      }
    }
  }
`;

export { GET_INSCRIPCIONES };
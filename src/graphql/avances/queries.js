import { gql } from '@apollo/client';

const GET_AVANCES = gql`
  query Avances {
    Avances {
      _id
      descripcion
      fecha
      observaciones
      proyecto {
        nombre
      }
    }
    Inscripciones {
      _id
    }
  }
`;

export { GET_AVANCES };
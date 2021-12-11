import React, {useEffect} from 'react';
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from 'graphql/usuarios/queries';



const IndexUsuarios = () => {
    const {data, error, loading } = useQuery (GET_USUARIOS);

    useEffect(() => {
        console.log('data servidor', data);
    }, [data]);
    return (
        <div>
            Todos los usuarios
        </div>
    )
}

export default IndexUsuarios;
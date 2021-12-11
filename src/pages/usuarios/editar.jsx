import React from 'react';
import { useParams } from 'react-router-dom';

const EditarUsuario = () => {
    const { _id } = useParams();
    return <div>Editar Usuario {_id} </div>;
};

export default EditarUsuario;
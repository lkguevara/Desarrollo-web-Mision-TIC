import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import IndexUsuarios from 'pages/usuarios';
import EditarUsuario from 'pages/usuarios/editar';
import Home from 'pages/Home';
import Perfil from 'pages/Perfil';
import AuthLayout from 'layouts/AuthLayout';
import Register from 'pages/auth/register';
import Login from 'pages/auth/login';
import { AuthContext } from 'context/authContext';
import jwt_decode from 'jwt-decode';
import 'styles/globals.css';
import 'styles/tabla.css';
import NuevoProyecto from 'pages/proyectos/NuevoProyecto';
import IndexInscripciones from 'pages/inscripciones';
import IndexAvance from 'pages/avances';
import IndexProyectos from 'pages/proyectos/Index';
import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/globals.css';
import 'styles/tabla.css';
// import PrivateRoute from 'components/PrivateRoute';


const httpLink = createHttpLink({
  uri: 'https://fenix-projects.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
        foto: decoded.foto,
      });
    }
  }, [authToken]);

  return (

    <ApolloProvider client = {client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Home />} />
              <Route path='/usuarios' element={<IndexUsuarios/>} />
              <Route path='/usuarios/editar/:_id' element={<EditarUsuario/>} />
              <Route path='/proyectos' element={<IndexProyectos />} />
              <Route path='/proyectos/nuevo' element={<NuevoProyecto />} />
              <Route path='/inscripciones' element={<IndexInscripciones />} />
              <Route path='/avances' element={<IndexAvance />} />
              <Route path='/perfil' element={<Perfil/>} />
              <Route path='category1' element={<IndexCategory1 />} />
              <Route path='category1/page1' element={<Category1 />} />
            </Route>
            <Route path='/auth' element={<AuthLayout />}>
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
  
}


export default App;
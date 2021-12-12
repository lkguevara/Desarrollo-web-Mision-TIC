import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import Index from 'pages/Index';
import Page4 from 'pages/Page4';
// import Page5 from 'pages/Page5';
import Page6 from 'pages/Page6';
import Page7 from 'pages/Page7';
import Page8 from 'pages/Page8';
import Page9 from 'pages/Page9';
import Page10 from 'pages/Page10';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import IndexUsuarios from 'pages/usuarios';
import IndexProyectos from 'pages/proyectos/Index';
import IndexInscripciones from 'pages/inscripciones';
import NuevoProyecto from 'pages/proyectos/NuevoProyecto';
import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditarUsuario from 'pages/usuarios/editar';
import 'styles/globals.css';
import 'styles/tabla.css';

// import PrivateRoute from 'components/PrivateRoute';
// const httpLink = createHttpLink ({
//   uri: 'https://fenix-projects.herokuapp.com/graphql' ,
// });


const client = new ApolloClient ({
  uri: 'https://fenix-projects.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  const [userData, setUserData] = useState({});

  return (

    <ApolloProvider client = {client}>

      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Index />} />
              <Route path='/usuarios' element={<IndexUsuarios/>} />
              <Route path='/usuarios/editar/:_id' element={<EditarUsuario/>} />
              <Route path='/proyectos' element={<IndexProyectos />} />
              <Route path='/proyectos/nuevo' element={<NuevoProyecto />} />
              <Route path='/inscripciones' element={<IndexInscripciones />} />
              <Route path='page4' element={<Page4 />} />
              {/* <Route path='page5' element={<Page5 />} /> */}
              <Route path='page6' element={<Page6 />} />
              <Route path='page7' element={<Page7 />} />
              <Route path='page8' element={<Page8 />} />
              <Route path='page9' element={<Page9 />} />
              <Route path='page10' element={<Page10 />} />
              <Route path='category1' element={<IndexCategory1 />} />
              <Route path='category1/page1' element={<Category1 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>

    </ApolloProvider>
  );
  
}


export default App;

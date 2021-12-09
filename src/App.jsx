import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import Page3 from 'pages/Page3';
import Page4 from 'pages/Page4';
import Page5 from 'pages/Page5';
import Page6 from 'pages/Page6';
import Page7 from 'pages/Page7';
import Page8 from 'pages/Page8';
import Page9 from 'pages/Page9';
import Page10 from 'pages/Page10';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import 'styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (


    <Auth0Provider
      domain='misiontic-concesionario.us.auth0.com'
      clientId='WsdhjjQzDLIZEHA6ouuxXGxFONFGAQ4g'
      redirectUri='http://localhost:3000/admin'
      audience='api-autenticacion-concesionario-mintic'
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout />}>
              <Route path='' element={<Index />} />
              <Route path='page2' element={<Page2 />} />
              <Route path='page3' element={<Page3 />} />
              <Route path='page4' element={<Page4 />} />
              <Route path='page5' element={<Page5 />} />
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
    </Auth0Provider>
  );
  
}


export default App;

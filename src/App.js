import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { UserProvider } from './UserContext';

function App() {
  return (
          <UserProvider>
            <div className='app'>
              <Routes>
                {publicRoutes.map((route, index) => {
                  const Layout = route.layout || DefaultLayout;
                  const Page = route.component;
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page />
                        </Layout>
                      }
                    />
                  )
                })}
            
                {privateRoutes.map((route, index) => {
                  const Layout = route.layout || DefaultLayout;
                  const Page = route.component;
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page />
                        </Layout>
                      }
                    />
                  )
                }
                )}
              </Routes>
            </div>
          </UserProvider>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { publicRoutes, adminRoutes, staffRoutes, trainerRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { ProtectedAdminRoute, ProtectedStaffRoute, ProtectedTrainerRoute } from './routes/ProtectedRoutes';

function App() {
  return (
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

          {adminRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedAdminRoute>
                    <Layout>
                      <Page />
                    </Layout>
                  </ProtectedAdminRoute>
                }
              />
            )
          })}
          {staffRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedStaffRoute>
                    <Layout>
                      <Page />
                    </Layout>
                  </ProtectedStaffRoute>
                }
              />
            )
          })}
          {trainerRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <ProtectedTrainerRoute>
                    <Layout>
                      <Page />
                    </Layout>
                  </ProtectedTrainerRoute>
                }
              />
            )
          })}
        </Routes>
      </div>
  );
}

export default App;

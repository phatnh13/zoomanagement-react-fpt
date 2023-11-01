import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { publicRoutes, adminRoutes, staffRoutes, trainerRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { UserProvider } from './UserContext';
import { ProtectedAdminRoute, ProtectedStaffRoute, ProtectedTrainerRoute } from './routes/ProtectedRoutes';

function App() {
  const isLoggedIn = localStorage.getItem("loginUser") ? true : false;
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
    </UserProvider>
  );
}

export default App;

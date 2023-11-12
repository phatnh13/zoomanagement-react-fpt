import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { publicRoutes, adminRoutes, staffRoutes, trainerRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { ProtectedAdminRoute, ProtectedStaffRoute, ProtectedTrainerRoute, ProtectedRoute } from './routes/ProtectedRoutes';
import Login from './components/AuthenticationPages/Login';
import ProfilePage from './components/AuthenticationPages/ProfilePage';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { DateHelper } from './components/DateHelper';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAxlLBF0UWs2qXzWlnim7N7moHogiNP50",
  authDomain: "zoo-management-application.firebaseapp.com",
  projectId: "zoo-management-application",
  storageBucket: "zoo-management-application.appspot.com",
  messagingSenderId: "1093221325408",
  appId: "1:1093221325408:web:54a73f28b3060d3db34105",
  measurementId: "G-D7XKGZGTYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  const emptyUser = {
    userId: 0,
    userName: "",
    email: "",
    role: "",
    token: "",
    expiration: ""
  };
  if (!localStorage.getItem("loginUser")) {
    localStorage.setItem("loginUser", JSON.stringify(emptyUser));
  };
  const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
  if (!localStorage.getItem("isLoggedIn")) {
    localStorage.setItem("isLoggedIn", "false");
  };
  
    if (DateHelper.isExpired(expirationDate)) {
      localStorage.setItem("isLoggedIn", "false");
    }
  return (
      <div className='app'>
        <Routes>
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/user/profile'
            element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}
          />
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

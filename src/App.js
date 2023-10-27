import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';
import { UserContext } from './UserContext';

function App() {
  const [user, setUser] = useState();
  return (
    
      <UserContext.Provider value={{user, setUser}}>
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
      </UserContext.Provider>
    
  );
}

export default App;

import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Footer from './components/Footer/Footer';
import NoPage from './components/NoPage';
import BuyingTicket from './components/Ticket/BuyingTicket';
import ViewCart from "./components/Ticket/ViewCart";
import BillingAddress from './components/Ticket/BillingAddress';
import PaymentMethod from './components/Ticket/PaymentMethod';
import Summary from './components/Ticket/Summary';
import Welcome from './components/Home/Welcome';
import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './components/Layout';

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
    
  );
}

export default App;

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

function App() {
  return (
    <div className='app'>
      <Layout />
      <Routes>
        {/* format for <Route path="/something" element={<something />} />
          Home page: "/"
          Login page: "/login"
          Ticket page: "/ticket"
          Admin page: "/admin", "/admin/animals", "/admin/animals/add", 
          "/admin/animals/edit", "/admin/animals/delete", "/admin/animals/sort"
          Staff page: "/staff", "/staff/animals", "/staff/animals/add",
          "/staff/animals/edit", "/staff/animals/delete", "/staff/animals/sort"
        
          */}

        <Route index element={<Home />} />

        <Route path="*" element={<NoPage />} />

        <Route path="/buyingticket" element={<BuyingTicket />} />

        <Route path="/viewcart" element={<ViewCart />} />

        <Route path="/billingaddress" element={<BillingAddress />} />

        <Route path="/paymentmethod" element={<PaymentMethod />} />

      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

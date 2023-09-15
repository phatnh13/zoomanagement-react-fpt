import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Layout />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Register from './components/Register';
import Footer from './components/Footer/Footer';
import NoPage from './components/NoPage';

function App() {
  return (
    <div className='app'>
      <Layout />
      <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import NoPage from './components/NoPage';
import Login from './components/InputPages/Login';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className='app'>
      
      <Routes>
          {/* format for <Route path="/something" element={<something />} />
          Home page: "/"
          Login page: "/login"
          Ticket page: "/ticket"
          Admin page: "/admin", "/admin/species", "/admin/species/add", 
          "/admin/species/edit", "/admin/species/delete", "/admin/species/sort"
          Staff page: "/staff", "/staff/animals", "/staff/animals/add",
          "/staff/animals/edit", "/staff/animals/delete", "/staff/animals/sort"
        
          */}
          
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
      
    </div>
  );
}

export default App;

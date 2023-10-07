import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Layout from "./components/Layout";
import Footer from './components/Footer/Footer';
import NoPage from './components/NoPage';
import News from "./components/News/News";
import Hours from "./components/Hours/Hours";
import Map from "./components/Map/Map";

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
          <Route path="/news" element={<News />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/map" element={<Map />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

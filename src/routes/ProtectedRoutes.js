import { Navigate } from 'react-router-dom';
import { DateHelper } from '../components/DateHelper';
  
  const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    // const role = JSON.parse(localStorage.getItem("loginUser")).role;
    const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
    
  
    if (DateHelper.isExpired(expirationDate)) {
      localStorage.setItem("isLoggedIn", "false");
    }
    if (isLoggedIn === "false" ) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  const ProtectedAdminRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
    const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
    
  
    if (DateHelper.isExpired(expirationDate)) {
      localStorage.setItem("isLoggedIn", "false");
    }
    if (isLoggedIn === "false" || role !== "Admin" ) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
  const ProtectedStaffRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
    const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
  
    if (DateHelper.isExpired(expirationDate)) {
      localStorage.setItem("isLoggedIn", "false");
    }
    if (isLoggedIn === "false" || role !== "OfficeStaff" ) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  const ProtectedTrainerRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
    const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
  
    if (DateHelper.isExpired(expirationDate)) {
      localStorage.setItem("isLoggedIn", "false");
    }
    if (isLoggedIn === "false" || role !== "ZooTrainner" ) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

    export {ProtectedAdminRoute, ProtectedStaffRoute, ProtectedTrainerRoute, ProtectedRoute};

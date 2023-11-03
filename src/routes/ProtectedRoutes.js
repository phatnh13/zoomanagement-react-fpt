import { Navigate } from 'react-router-dom';
import { DateHelper } from '../components/DateHelper';
  
  const ProtectedAdminRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginUser") ? true : false;
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
    const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
  
    if (!isLoggedIn || role !== "Admin" || DateHelper.isExpired(expirationDate)) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
  const ProtectedStaffRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginUser") ? true : false;
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
    const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
  
    if (!isLoggedIn || role !== "OfficeStaff" || DateHelper.isExpired(expirationDate)) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  const ProtectedTrainerRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginUser") ? true : false;
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
    const expirationDate = JSON.parse(localStorage.getItem("loginUser")).expiration;
  
    if (!isLoggedIn || role !== "ZooTrainer" || DateHelper.isExpired(expirationDate)) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

    export {ProtectedAdminRoute, ProtectedStaffRoute, ProtectedTrainerRoute};

import {
    Navigate,
  } from 'react-router-dom';
  
  const ProtectedAdminRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginUser") ? true : false;
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
  
    if (!isLoggedIn || role !== "Admin") {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  
  const ProtectedStaffRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginUser") ? true : false;
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
  
    if (!isLoggedIn || role !== "OfficeStaff") {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };
  const ProtectedTrainerRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem("loginUser") ? true : false;
    const role = JSON.parse(localStorage.getItem("loginUser")).role;
  
    if (!isLoggedIn || role !== "ZooTrainer") {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };

    export {ProtectedAdminRoute, ProtectedStaffRoute, ProtectedTrainerRoute};

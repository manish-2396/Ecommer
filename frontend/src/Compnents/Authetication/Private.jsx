
import { Navigate, useLocation } from "react-router-dom";

// const jwt = require('jsonwebtoken')

function PrivateRoute({ children }) {
  const { pathname } = useLocation();
  // QpwL5tke4Pnpja7X4

  let { isAuth } = JSON.parse(sessionStorage.getItem("user")) || {
    isAuth: false,
  };

  if (isAuth) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: pathname }} replace />;
}

export default PrivateRoute;

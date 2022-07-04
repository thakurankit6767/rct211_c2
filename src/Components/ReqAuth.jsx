
//Create the HOC for protected Routes
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const ReqAuth = () => {
    const auth = useSelector((state) => state.authReducer.isAuth);
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;

};

export default ReqAuth;

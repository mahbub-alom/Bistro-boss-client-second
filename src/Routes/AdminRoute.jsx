import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { users, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if(loading || isAdminLoading){
    return <progress className="progress w-56"></progress>;
  }
  
  if(users && isAdmin){
    return children;
  }

  return <Navigate to="/" state={{from:location}} replace></Navigate>

};

export default AdminRoute;

import { Navigate, Outlet } from "react-router-dom";
import { useGetLoginUserQuery } from "../Services/userApi";

// for user
export const ForUserPrivateRoute = ({ roles }) => {
  const { data } = useGetLoginUserQuery();
  let protect = roles.includes(data?.data?.role);
  // if(!protect){
  //   protect = true
  // }
  // if(roles[0] === 'admin'){
  //   console.log(roles)
  //   protect = false
  // }
  // console.log("user",protect)
  return protect ? <Outlet /> :  <Navigate to="/dashboard" />;
};
// for admin
export const ForAdminPrivateRoute = ({ roles }) => {
  const { data } = useGetLoginUserQuery();
  let protect = roles.includes(data?.data?.role);
  // if(!protect){
  //   protect = true
  // }
  // if(roles[0] === 'user'){
  //   console.log(roles)
  //     protect = false
  //   }
  //   console.log("admin",protect)
  return protect ? <Outlet /> : <Navigate to="/dashboard" />;
};

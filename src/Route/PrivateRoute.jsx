import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const { user ,loading} =useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>

    }

    if(user){
        return children;
    }
    return <Navigate to='/order'></Navigate>
};

export default PrivateRoute;

import useAuth from "../../hook/useAuth"
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouteUser = ({ Component }) => {

    const { user } = useAuth();
    const location = useLocation();



    if (user.email) {
        return <Component />;
    }
    
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
}

export default PrivateRouteUser
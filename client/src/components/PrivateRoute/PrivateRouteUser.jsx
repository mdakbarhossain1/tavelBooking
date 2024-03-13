import { useEffect } from "react";
import useAuth from "../../hook/useAuth"
import { useNavigate } from "react-router-dom";

const PrivateRouteUser = ({ Component }) => {

    const navigate = useNavigate();

    const {user} = useAuth();

    useEffect(()=>{
        if(!user.email){
            navigate('/login')
        }
    })
    return (
        <>
hi            <Component />

        </>
    )
}

export default PrivateRouteUser
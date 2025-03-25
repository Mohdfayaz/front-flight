import { useEffect } from "react";
import { toast } from "react-toastify";
import authServices from "../services/authServices";
import { useNavigate } from "react-router";

const Logout = () => {
  
  const navigate = useNavigate();

    const logoutUser = async () => {
        try {
            const response = await authServices.logout();
            
            if (response.status === 200) {
                toast.success(response.data.message);

                setTimeout(() => {
                    navigate("/");
                }, 500);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }

        }
 

    useEffect(() => {
        logoutUser();
    }, []);
 
 
    return (
    <div>Logging Out...</div>
  )
}

export default Logout;
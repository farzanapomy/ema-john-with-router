import { useContext } from "react"
import { AuthContext } from "../components/Context/AuthPorvider";

const useAuth=()=>{
    return useContext(AuthContext);
}

export default useAuth;
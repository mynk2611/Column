import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"

export const useDeleteColumn = () => {
    const navigate = useNavigate();
    
    const deleteColumn = (id: string) => {
        const token = JSON.parse(localStorage.getItem("token") || "{}");
        axios.delete(`${BACKEND_URL}/api/v1/column/${id}`, {
            headers: {
                Authorization: token
            }
        })
        .then((response) => {
            console.log(response.data);
            navigate('/bulk'); 
        })
        .catch((error) => {
            console.log(`Error while deleting column`, error);
        });
    };

    return deleteColumn;
};

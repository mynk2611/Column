import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface uniCol {
    "content" : string;
    "title" : string;
    "user" : {
        "name" : string;
        "bio" : string;
    }
    "id" : string; 
}


export const useFetchUniqueCol = ({id} : {id : string})=>{
    const [loading, setLoading] = useState(true);
    const [uniCol, setUniCol] = useState<uniCol>()

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token") || "{}") 
        axios.get(`${BACKEND_URL}/api/v1/column/${id}`,
        {
            headers : {
                Authorization : token
            }
        })
            .then((response)=>{
                setUniCol(response.data.column);
                setLoading(false);
            })

            .catch((error)=>{
                console.log(`Error while fetching:` + error)
                setLoading(true)
            })
    },[id])


    return( {loading, uniCol}   )
}
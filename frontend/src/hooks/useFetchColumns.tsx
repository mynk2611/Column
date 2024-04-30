import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface column {
    id : string;
    title : string;
    content : string;
    user : {
        name : string;
    }
}

export interface myInfoGen {
    "id" : string;
    "name" : string;
    "bio" : string;
    "email" : string;
}

export const useFetchColumns = ()=>{

    const [loading, setLoading] = useState(true);
    const [columns, setColumns] = useState<column[]>([])
    const [myInfo, setMyInfo] = useState<myInfoGen | undefined>();

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token") || "{}");
        axios.get(`${BACKEND_URL}/api/v1/column/bulk`,{
            headers: {
                Authorization : token
            }
        })

            .then((Response)=>{
                setColumns(Response.data.columns);
                setMyInfo(Response.data.myInfo);
                setLoading(false)
            })

            .catch((error)=>{
                console.log(`error while fetching`, error);
                setLoading(false);
            })
    },[])
    return({loading, columns, myInfo})
}
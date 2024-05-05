import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

interface MyInfo {
    id : string;
    name : string;
    email : string;
    bio : string;
}

export const useFetchMyInfo = ()=>{
    const [myInfo, setMyInfo] = useState<MyInfo>();

    useEffect(()=>{
        const token  = JSON.parse(localStorage.getItem("token") || "{}");
        axios.get(`${BACKEND_URL}/api/v1/column/my-data`,{
            headers : {
                Authorization : token,
            }
        })

            .then((Response)=>{
                setMyInfo(Response.data.myInfo)
            })

            .catch((error)=>{
                console.log(`Error while fetching myInfo`, error);
            })
    },[])
    return myInfo
}
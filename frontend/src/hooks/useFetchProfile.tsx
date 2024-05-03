import axios from "axios";
import { useEffect, useState} from "react"
import { BACKEND_URL } from "../config";
import { myInfoGen } from "./useFetchColumns";

export interface myColumnsGen{
    id : string;
    title : string;
    content : string;
    user : {
        name : string;
    }
}

export const useFetchProfile = ()=>{
    const [loading, setLoading] = useState(true);
    const [ myColumns, setMyColumns] = useState<myColumnsGen[]>([]);
    const [myInfo, setMyInfo] = useState<myInfoGen>()

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token") || "{}");
        axios.get(`${BACKEND_URL}/api/v1/column/my-profile`,{
            headers : {
                Authorization : token,
            }
        })

        .then((Response)=>{
            setMyColumns(Response.data.myColumns);
            setMyInfo(Response.data.myInfo)
            setLoading(false);
        })

        .catch((error)=>{
            console.log(`Error while fetching`, error)
            setLoading(false)
        })
    
    },[])
    
    return( {loading, myColumns, myInfo  })
}
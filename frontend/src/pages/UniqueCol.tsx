import { useParams } from "react-router-dom"
import { useFetchUniqueCol } from "../hooks/useFetchUniqueCol";
import { SpecificColumn } from "../components/SpecificColumn";

export const UniqueCol = ()=>{
    const {id} = useParams();
    const {loading, uniCol} = useFetchUniqueCol({
        id : String(id || "")
    })

    if(loading){
    <div>
        loading...
    </div>
    }

    if(!uniCol){
        return (
        <div>
            no data found
        </div>
        )
    }

    return(
    <div>
        <SpecificColumn 
            column={uniCol}
        />
    </div>
    )
}
import { useParams } from "react-router-dom"
import { useFetchUniqueCol } from "../hooks/useFetchUniqueCol";
import { SpecificColumn } from "../components/SpecificColumn";
import { AppBar } from "../components/AppBar";
import { SpecificColumnSkeleton } from "../skeletons/SpecificColumnSkeleton";

export const UniqueCol = ()=>{
    const {id} = useParams();
    const {loading, uniCol} = useFetchUniqueCol({
        id : String(id || "")
    })

    if(loading){
        return(
    <div>
        <AppBar/>
        <div>
            <SpecificColumnSkeleton />
        </div>
    </div>
    )
    }

    if(!uniCol){
        return (
            <div>
            <AppBar/>
            <div>
                <SpecificColumnSkeleton />
            </div>
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
import { AppBar } from "../components/AppBar"
import { Column } from "../components/ColumnCard"
import { useFetchColumns } from "../hooks/useFetchColumns"

export const Columns = () => {
    const {loading, columns } = useFetchColumns();

    if(loading){
        return(
        <div>
            Loading...
        </div>
        )
    }

    return (
        <div>
            <div>
                <AppBar />
            </div>
            <div>
                {columns.map(column => 
                    <Column
                        author_name={column.user.name}
                        title={column.title}
                        content={column.content}
                        id = {column.id}
                    />
                    )}   
            </div>
        </div>
    )
}
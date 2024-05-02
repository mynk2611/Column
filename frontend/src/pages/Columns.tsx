import { useState } from "react";
import { AppBar } from "../components/AppBar"
import { Column } from "../components/ColumnCard"
import { useFetchColumns } from "../hooks/useFetchColumns"

export const Columns = () => {
    const { loading, columns, myInfo } = useFetchColumns();
    const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);

    const handleDropdownToggle = (id: string) => {
        setActiveDropdownId(activeDropdownId === id ? null : id);
    };

    if (loading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <div>
            {myInfo ? (
                <div>
                    <AppBar  />
                    <div>
                        {columns.map(column =>
                            <Column
                                author_name={column.user.name}
                                title={column.title}
                                content={column.content}
                                id={column.id}
                                isDropdownOpen={activeDropdownId === column.id}
                                onDropdownToggle={handleDropdownToggle}
                            /> 
                        )}
                    </div>
                </div>
            ) : (
                <div>No user info available</div>
            )}
        </div>
    )
}
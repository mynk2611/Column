import { Link } from "react-router-dom"
import { myColumnsGen } from "../hooks/useFetchProfile"
import { myInfoGen } from "../hooks/useFetchColumns";
import { ProfileColumnCard } from "./ProfileColumnCard";
import { useState } from "react";

interface MyColumnProp {
    myColumns : myColumnsGen[];
    myInfo : myInfoGen;
}

export const MyColumns = ({myColumns, myInfo}: MyColumnProp) => {
    const [activeDropdownId, setActiveDropdownId] = useState<string | null>(null);
    
    const handleDropdownToggle = (id: string) =>{
        setActiveDropdownId( activeDropdownId === id ? null : id);
    }

    return (
        <div className="mt-10">
            <div className="flex justify-normal border-b border-gray-200">
                <div className="py-2 mx-2 border-b-2 border-black">
                    <Link to={"/my-profile"}>
                        Columns
                    </Link>
                </div>

                <div className="py-2 mx-2">
                    <Link to={"/my-profile/about"}>
                        Bio
                    </Link>
                </div>
            </div>

            <div className="mt-10">
                {myColumns.map(myColumn=>(
                    <ProfileColumnCard  
                    myColumn={myColumn} 
                    myInfo={myInfo}
                    isDropdownOpen={activeDropdownId===myColumn.id}
                    onDropdownToggle={handleDropdownToggle}
                    />
                ))}
            </div>

            <div className="border-b border-gray-200 mt-10">

            </div>
        </div>
    )
}
import { Link } from "react-router-dom"
import { myColumnsGen } from "../hooks/useFetchProfile"
import { myInfoGen } from "../hooks/useFetchColumns";
import { ProfileColumnCard } from "./ProfileColumnCard";

interface MyColumnProp {
    myColumns : myColumnsGen[];
    myInfo : myInfoGen;
}

export const MyColumns = ({myColumns, myInfo}: MyColumnProp) => {
    return (
        <div className="mt-10">
            <div className="flex justify-normal border-b border-gray-100">
                <div className="py-5 mx-2 border-b-2 border-black">
                    <Link to={"/my-profile"}>
                        Columns
                    </Link>
                </div>

                <div className="py-5 mx-2">
                    <Link to={"/my-profile/about"}>
                        Bio
                    </Link>
                </div>
            </div>

            <div>
                {myColumns.map(myColumn=>(
                    <ProfileColumnCard  myColumn={myColumn} myInfo={myInfo}/>
                ))}
            </div>

            <div className="border-b border-gray-200 mt-10">

            </div>
        </div>
    )
}
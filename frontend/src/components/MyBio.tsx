import { Link } from "react-router-dom";
import { myInfoGen } from "../hooks/useFetchColumns";

interface MyBioProp {
    myInfo : myInfoGen
}

export const MyBio = ({myInfo}: MyBioProp ) => {

    return (
        <div className="mt-10">
        <div className="flex justify-normal border-b border-gray-200">
            <div className="py-2 mx-2 ">
                <Link to={"/my-profile"}>
                    Columns
                </Link>
            </div>

            <div className="py-2 mx-4 border-b-2 border-black">
                <Link to={"/my-profile/about"}>
                    Bio
                </Link>
            </div>
        </div>

        <div className="p-32 bg-gray-200 mt-10">
            {myInfo.bio}
        </div>

        <div className="border-b border-gray-200 mt-10">

        </div>
    </div>
    )
}
import { Spinner } from "./Spinner"

export const MyBioSkeleton = ()=>{
    return(
    <div role="status" className="animate-pulse">

<div className="mt-10">
        <div className="flex justify-normal border-b border-gray-200">
            <div className="py-2 mx-2 ">
                    Columns
            </div>

            <div className="py-2 mx-4 border-b-2 border-black">
                    Bio
            </div>
        </div>

        <div className="p-32 bg-gray-200 mt-10 flex justify-center">
            <Spinner/>
        </div>

        <div className="border-b border-gray-200 mt-10">

        </div>
    </div>

    </div>
    )
}
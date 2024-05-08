import { ProfileColumnCardSkeleton } from "./ProfileColumnCardSkeleton"

export const MyColumnsSkeleton = ()=>{
    return(
    <div className="animation-pulse" role="status">

<div className="mt-10">
            <div className="flex justify-normal border-b border-gray-200">
                <div className="py-2 mx-2 border-b-2 border-black">
                        Columns
                </div>

                <div className="py-2 mx-2">
                        Bio
                </div>
            </div>

            <div className="mt-10">
                <ProfileColumnCardSkeleton/>
                <ProfileColumnCardSkeleton/>
                <ProfileColumnCardSkeleton/>
            </div>

            <div className="border-b border-gray-200 mt-10">

            </div>
        </div>

    </div>
    )
}
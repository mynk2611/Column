import { MyColumnsSkeleton } from "./MyColumnsSkeleton"
import { MyNameSkeleton } from "./MyNameSkeleton"

export const MyprofileSkeleton = ()=>{
    return(
    <div role="status" className="animate-pulse">

<div className="grid grid-cols-12">
                    <div className="col-span-8 border-r border-gray-100 py-10 px-32">

                            <MyNameSkeleton/>

                            <MyColumnsSkeleton />
                    </div>

                    <div className="m-10">
                            <div className="flex flex-col justify-center">
                                <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-5xl font-medium cursor-pointer">
                                    <div className=" bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                                </div>

                                <div className="text-lg font-medium mt-3 ml-2 min-w-80">
                                    <div className="h-5 w-40 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                                </div>
                            </div>
                    </div>
                </div>
        
    </div>
    )
}
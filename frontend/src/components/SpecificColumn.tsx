import { uniCol } from "../hooks/useFetchUniqueCol"
import { AppBar } from "./AppBar"

export const SpecificColumn = ({ column }: { column: uniCol }) => {
    return (
        <div>
            <AppBar author_name={column.user.name}/>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-5 mt-9 max-w-screen-xl">
                        <div className="col-span-8 ">
                                <div className="text-5xl font-black " >
                                    {column.title}
                                </div>

                                <div className=" text-slate-800 font-extralight py-3">
                                    Posted on 26 Nov 2002
                                </div>

                                <div className="text-lg font-medium text-gray-600 py-1">
                                    {column.content}
                                </div>
                        </div>

                        <div className="col-span-4 pl-10 pt-3 ">
                            <div >
                                Author
                            </div>

                            <div className="flex justify-normal mt-3">
                                <div className="flex flex-col justify-center">
                                    <div className="w-6 h-6 rounded-full bg-gray-200">
                                            {/* pointer */}
                                    </div>
                                </div>

                                <div className="ml-4">
                                        <div className="text-xl font-bold">
                                            {column.user.name}
                                        </div>
                                        <div className="text-sm font-medium text-gray-600">
                                            {column.user.bio}
                                        </div>
                                </div>
                           </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
import { uniCol } from "../hooks/useFetchUniqueCol"
import { AppBar } from "./AppBar"

export const SpecificColumn = ({ column }: { column: uniCol }) => {
    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 mt-8 max-w-screen-xl">
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

                        <div className="col-span-4 pl-7 pt-3 ">
                            hi there
                        </div>
                </div>
            </div>
        </div>
    )
}
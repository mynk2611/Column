import { Link } from "react-router-dom";
import { myInfoGen } from "../hooks/useFetchColumns";
import { myColumnsGen } from "../hooks/useFetchProfile"

interface ProfileColumnCardProp {
    myColumn : myColumnsGen;
    myInfo : myInfoGen
}

export const ProfileColumnCard = ({myColumn, myInfo}: ProfileColumnCardProp )=>{
    return(
    <div className="mt-6">
        <div className="w-full p-4 border-b border-gray-200 shadow shadow-gray-500/50">
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-200">
                            {myInfo.name[0]}
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="font-light text-sm pl-3">
                                {myInfo.name}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="w-1 h-1 bg-gray-400 rounded-full ml-2 ">
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-gray-500 font-medium text-sm pl-3">
                                Dec 3.2023
                            </div>
                        </div>
                    </div>

                    <div>
                        <button 
                            onClick={()=>{}} className="p-2  hover:bg-gray-100 rounded-full transition-colors duration-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-6 h-6 stroke-current text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                        </button>
                    </div>
                </div>

                <Link to={`/column/${myColumn.id}`}>
                    <div className="text-xl font-bold mt-2">
                        {myColumn.title}
                    </div>
                    <div className="text-gray-600 font-light text-base mt-1">
                        {myColumn.content.slice(0, 300) + "..."}
                    </div>
                    <div className="text-sm font-light mt-3">
                        {`${Math.ceil(myColumn.content.length / 150)} min read`}
                    </div>
                </Link>
            </div>
    </div>
    )
}
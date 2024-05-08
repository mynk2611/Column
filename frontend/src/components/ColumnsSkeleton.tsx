
export const ColumnSkeleton = () => {
    return (

        <div role="status" className="animate-pulse">
                <div className="flex justify-center">
            <div className="w-full max-w-4xl p-4 border-b border-gray-200 shadow-md shadow-gray-500/50">
                
                    <div className="flex justify-between">
                        <div className="flex">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-200">
                                <div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>

                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="font-light text-sm pl-3">
                                <div className="h-3 w-24 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="w-1 h-1 bg-gray-400 rounded-full ml-2 ">
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="text-gray-400 font-light text-sm pl-3">
                                <div className="h-3 w-16 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <button
                                onClick={()=>{}} className="p-2  hover:bg-gray-100 rounded-full transition-colors duration-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-6 h-6 stroke-current text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                            </button>
                            
                        </div>
                    </div>


                    <div className="text-2xl font-bold mt-2">
                    <div className="h-5 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
                    </div>
                    <div className="text-gray-600 font-light text-base mt-1">
                    <div className="h-4 bg-gray-200 rounded-full w-full mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full mb-2.5"></div>
                    <div className="h-4 bg-gray-200 rounded-full w-full mb-2.5"></div>
                    </div>
                    <div className="text-sm font-light mt-5">
                    <div className="h-2 bg-gray-200 rounded-full w-10 mb-2.5"></div>
                    </div>              
            </div>

        </div>
            
            
        </div>
    )
}
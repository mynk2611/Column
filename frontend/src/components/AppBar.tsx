export const AppBar = () => {
    return (
        <div className="border-b border-gray-300 mb-4">
            <div className="flex justify-between mt-5 mb-3">

                <div className="flex flex-col justify-center">
                    <div className="ml-12 text-3xl font-light">
                        Column
                    </div>
                </div>

                <div className="flex justify-normal mr-20">
                    <div className="flex flex-col justify-center">
                        <button className="flex items-center justify-center bg-white hover:text-gray-900 text-gray-500  mr-7 ">
                            <span className="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </span>
                            Write
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-medium cursor-pointer">
                            M
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
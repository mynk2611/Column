// import { AppBar } from "../components/AppBar"

export const Publish = () => {
    return (
        <div>
            {/* <AppBar /> */}

            <div className="flex justify-center">
                <div className="w-full ">
                    <div className="flex justify-center">
                        <div className="w-1/3 mx-5">
                            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" />
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <div className="w-2/3">
                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                                <div className=" bg-white rounded-t-lg">
                                    <textarea className="w-full px-4 py-2 text-sm text-gray-900 bg-white border-0" placeholder="Enter your story" required ></textarea>
                                </div>
                            </div>

                            <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800">
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { AppBar } from "../components/AppBar"
import { useFetchProfile } from "../hooks/useFetchProfile"
import { MyName } from "../components/MyName";
import { MyColumns } from "../components/MyColumns";

export const MyProfileColumn = () => {
    const { loading, myColumns, myInfo } = useFetchProfile();

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <AppBar />

            {myInfo ? (
                <div className="grid grid-cols-12">
                    <div className="col-span-8 border-r border-gray-100 py-10 px-32">

                            <MyName name={myInfo.name} />

                            <MyColumns myColumns={myColumns} myInfo={myInfo}/>
                    </div>

                    <div className="m-10">
                            <div className="flex flex-col justify-center">
                                <div className="w-28 h-28 bg-gray-300 rounded-full flex items-center justify-center text-5xl font-medium cursor-pointer">
                                {myInfo.name[0]}
                                </div>

                                <div className="text-lg font-medium mt-3 ml-2 min-w-80">
                                    {myInfo.name}
                                </div>
                            </div>
                    </div>
                </div>

            ) : (
                <div>no info available</div>
            )}

        </div>
    )
}


{/* {
    myInfo?(
        <div>
        <div>
        {myColumns.map(myColumn =>(
            <SpecificProfile myInfo={myInfo} myColumn={myColumn}/>
            ))}
            </div>
            </div >
        ): (
            <div>no info available</div>
        )}
        </div> */}

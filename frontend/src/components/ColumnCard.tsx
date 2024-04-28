import { Link } from "react-router-dom";

interface columnThing {
    author_name: string;
    title: string;
    content: string;
    id: string;
}

export const Column = ({ author_name, title, content, id }: columnThing) => {
    return (
        <div className="flex justify-center ">
            <Link to={`/Column/${id}`}>
            <div className="w-full max-w-4xl p-4 border-b border-gray-200 shadow-md shadow-gray-500/50">
                <div className="flex ">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-200">
                        {author_name[0]}
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="font-light text-sm pl-3">
                            {author_name}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full ml-2 ">

                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-gray-400 font-light text-sm pl-3">
                            Dec 3.2023
                        </div>
                    </div>

                </div>

                <div className="text-2xl font-bold mt-2">
                    {title}
                </div>

                <div className="text-gray-600 font-light text-base mt-1">
                    {content.slice(0,300)+"..."}
                </div>

                <div className="text-sm font-light mt-3">
                    {`${Math.ceil(content.length/150)} min read`}
                </div>
        </div>

            </Link>
        </div>
    )
}
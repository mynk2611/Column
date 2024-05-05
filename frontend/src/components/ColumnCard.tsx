import { Link } from "react-router-dom";

interface columnThing {
    author_name: string;
    title: string;
    content: string;
    id: string;
    isDropdownOpen: boolean;
    onDropdownToggle: (id: string) => void;
}

export const Column : React.FC<columnThing> = ({ author_name, title, content, id, isDropdownOpen, onDropdownToggle }) => {
    
    const handleButtonClick = (event : React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        onDropdownToggle(id);
    }

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-4xl p-4 border-b border-gray-200 shadow-md shadow-gray-500/50">
            <Link to={`/column/${id}`}>
                <div className="flex justify-between">
                    <div className="flex">
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

                    <div>
                        <button 
                            onClick={handleButtonClick} className="p-2  hover:bg-gray-100 rounded-full transition-colors duration-300 focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" className="w-6 h-6 stroke-current text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => console.log('Delete this')}>
                                    Follow Author
                                </button>
                                <button className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100" onClick={() => console.log('Not interested')}>
                                    Not interested
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                
                    <div className="text-2xl font-bold mt-2">
                        {title}
                    </div>
                    <div className="text-gray-600 font-light text-base mt-1">
                        {content.slice(0, 300) + "..."}
                    </div>
                    <div className="text-sm font-light mt-3">
                        {`${Math.ceil(content.length / 150)} min read`}
                    </div>
                </Link>
            </div>
        </div>
    );
};
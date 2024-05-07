import { Link, useNavigate } from "react-router-dom"
import { useAuthor } from "../contexts/AuthorContext"
import { useToggleFunction } from "../hooks/useToggleFunction";


export const AppBar = () => {
    const { authorName } = useAuthor();
    const navigate = useNavigate();
    const { activeDropdownStatus, handleDropdownToggle } = useToggleFunction();

    const Logout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div className="border-b border-gray-100 mb-4">
            <div className="flex justify-between mt-5 mb-3">

                <div className="flex flex-col justify-center">
                    <div className="ml-12 text-3xl font-light">
                        <Link to={`/bulk`}>
                            Column
                        </Link>
                    </div>
                </div>

                <div className="relative flex justify-normal mr-20">
                    <div className="flex flex-col justify-center">
                        <Link to={`/publish`}>
                            <button className="flex items-center justify-center bg-white hover:text-gray-900 text-gray-500  mr-7 ">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </span>
                                Write
                            </button>
                        </Link>
                    </div>

                    <div className="flex flex-col justify-center">
                        <Link to={`/my-profile`}>
                            <button className="flex items-center justify-center bg-white hover:text-gray-900 text-gray-500  mr-7 ">
                                <span className="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                            </button>
                        </Link>
                    </div>

                    <button className="" onClick={handleDropdownToggle}>
                        <div className="flex flex-col justify-center">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl font-medium cursor-pointer">
                                {authorName[0]}
                            </div>
                        </div>
                    </button>
                    {
                        activeDropdownStatus && (
                            <>
                            <div className="absolute top-10 h-3 w-3 left-44 translate-y-2 rotate-45 bg-white shadow-[rgba(0,0,15,0.5)_-1px_1px_20px_1px] " />
                            
                            <div className="absolute top-14 left-16 -translate-y-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                

                                <button role="menuitem" onClick={Logout}
                                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                                            fill="#90A4AE"></path>
                                    </svg>
                                    <p className="block font-sans text-sm antialiased font-medium leading-normal text-inherit">
                                        Sign Out
                                    </p>
                                </button>
                            </div>
                            </>
                        )
                    }

                </div>

            </div>
        </div>
    )
}
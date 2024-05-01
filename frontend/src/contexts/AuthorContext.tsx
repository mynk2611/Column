import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useFetchColumns } from "../hooks/useFetchColumns";

type AuthorContextType = {
    authorName : string;
    setAuthorName : (name:string) => void;
}

const authorContext = createContext<AuthorContextType | undefined>(undefined);

export const useAuthor = ()=>{
    const context = useContext(authorContext);
    if(!context) throw new Error('useAuthor must be used within a AuthorProvider');
    return context;
}

export const AuthorProvider = ({children} : {children : ReactNode})=>{
    const {myInfo} = useFetchColumns();
    const [authorName, setAuthorName] = useState<string>('');

    useEffect(() => {
        if (myInfo) {
            setAuthorName(myInfo.name);
        } else {
            console.error("User information couldn't be fetched.");
            }
    }, [myInfo]);
    
    return (
    <authorContext.Provider value={{authorName, setAuthorName}}>
        {children}
    </authorContext.Provider>
    );
}
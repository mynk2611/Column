interface buttonInput {
    title : string;
    onclick : ()=>void
}

export const Button = ({title, onclick}: buttonInput)=>{
    return(
    <div className="w-full mt-4">
        <button onClick={onclick} type="button" className="outline-none  text-white bg-green-700 hover:bg-green-800  font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 w-full">
                {title}
        </button>

    </div>
    )
}
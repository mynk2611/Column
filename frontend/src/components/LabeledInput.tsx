import { ChangeEvent } from "react";

interface labelInput {
    title : string;
    placeholder : string;
    onChange : (e : ChangeEvent<HTMLInputElement>)=>void
}

export const LabeledInput = ({title, placeholder, onChange}: labelInput) => {
    return (
        <div className="w-full mt-4">
            <label className="block mb-1 text-sm font-medium text-gray-900">
                 {title}
            </label>
            <input 
            onChange={onChange}
            type="text" 
            id="first_name" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            placeholder={placeholder} required />
        </div>
    )
}
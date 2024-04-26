import { Link, useNavigate } from "react-router-dom"
import { LabeledInput } from "./LabeledInput"
import { Button } from "./Button"
import { useState } from "react"
import { LoginInput } from "@mame_26_11/column-common"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const AuthLogin = () => {
    const navigation = useNavigate();
    const [loginInput, setLoginInput] = useState<LoginInput>({
        email: "",
        password: ""
    })
    return (
        <div>
            <div className="flex flex-col h-screen justify-center">
                <div className="flex justify-center">
                    <div className=" max-w-md min-w-96">
                        <div className="text-4xl font-normal text-center">
                            Welcome back!
                        </div>
                        <div className="text-center text-gray-600 mt-2 font-medium">
                            No account?
                            <Link className="ml-2 underline text-green-700 hover:text-green-800 font-extrabold" to={"/signup"}>
                                Sinup
                            </Link>
                        </div>
                        <LabeledInput title="Email" placeholder="abc@exmaple.com" onChange={(e)=>{
                            setLoginInput({
                                ...loginInput,
                                email : e.target.value,
                            })
                        }}/>
                        <LabeledInput title="Password" placeholder="Enter your passowrd" onChange={(e)=>{
                            setLoginInput({
                                ...loginInput,
                                password : e.target.value,
                            })
                        }}/>
                        <Button onclick={async()=>{
                            const responce = await axios.post(`${BACKEND_URL}/api/v1/user/login`, loginInput)
                                const { token} = responce.data;
                                localStorage.setItem("token", JSON.stringify(token))
                                navigation("/bulk")                               
                        }} 
                        title="Login"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
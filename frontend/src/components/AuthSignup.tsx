import { Link, useNavigate } from "react-router-dom"
import { LabeledInput } from "./LabeledInput"
import { Button } from "./Button"
import { useState } from "react"
import { SignupInput } from "@mame_26_11/column-common"
import axios from "axios"
import { BACKEND_URL } from "../config"

export const AuthSignup = () => {
    const navigate = useNavigate()
    const [signupInput, setSignupInput] = useState<SignupInput>({
        name: "",
        email: "",
        password: "",
        bio: "",
    })    

    return (
        <div className="flex flex-col h-screen justify-center">
            <div className="flex justify-center">
                <div className=" max-w-md min-w-96 shadow-md shadow-gray-500/50 p-5">
                    <div className="text-4xl font-normal text-center">
                        Join Column!
                    </div>
                    <div className="text-center text-gray-600 mt-2 font-medium">
                        Already have an account?
                        <Link className="ml-2 underline text-green-700 hover:text-green-800 font-extrabold" to={"/login"}>
                            Login
                        </Link>
                    </div>
                    <LabeledInput title="Name" placeholder="Enter your name " onChange={(e) => {
                        setSignupInput({
                            ...signupInput,
                            name: e.target.value
                        })
                    }
                    } />
                    <LabeledInput title="Email" placeholder="abc@example.com" onChange={(e) => {
                        setSignupInput({
                            ...signupInput,
                            email: e.target.value
                        })
                    }
                    } />
                    <LabeledInput title="Password" placeholder="Enter strong password" onChange={(e) => {
                        setSignupInput({
                            ...signupInput,
                            password: e.target.value
                        })
                    }
                    } />
                    <LabeledInput title="Bio" placeholder="About yourself" onChange={(e) => {
                        setSignupInput({
                            ...signupInput,
                            bio: e.target.value
                        })
                    }
                    } />
                    <Button onclick={async()=>{
                        try{

                        const responce = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,signupInput)
                            const { token } = responce.data;
                            localStorage.setItem("token", JSON.stringify(token))
                            navigate("/bulk")                      
                        }
                        catch(error){
                            console.log("Error while sending signup request", error)
                            alert("request failed");
                        }
                    }}
                    title="Signup" />
                </div>
            </div>
        </div>
    )
}
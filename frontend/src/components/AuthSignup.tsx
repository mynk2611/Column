import { Link } from "react-router-dom"
import { LabeledInput } from "./LabeledInput"
import { Button } from "./Button"

export const AuthSignup = ()=>{
    return(
    <div className="flex flex-col h-screen justify-center">
        <div className="flex justify-center">
            <div className=" max-w-md min-w-96">
                    <div className="text-4xl font-normal text-center">
                        Join Us!
                    </div>
                    <div className="text-center text-gray-600 mt-2">
                        Already have an account? 
                        <Link className="ml-2 underline text-green-700 hover:text-green-800 font-medium" to={"/login"}>
                            Login
                        </Link>
                    </div>
                    <LabeledInput title="Name" placeholder="Enter your name"/>
                    <LabeledInput title="Email" placeholder="abc@example.com"/>
                    <LabeledInput title="Password" placeholder="Enter strong password"/>
                    <LabeledInput title="Bio" placeholder="About yourself"/>
                    <Button title="Signup"/>
            </div>
        </div>
    </div>
    )
}
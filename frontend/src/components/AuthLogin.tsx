import { Link } from "react-router-dom"
import { LabeledInput } from "./LabeledInput"
import { Button } from "./Button"

export const AuthLogin = () => {
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
                        <LabeledInput title="Email" placeholder="abc@exmaple.com"/>
                        <LabeledInput title="Password" placeholder="Enter your passowrd"/>
                        <Button title="Login"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
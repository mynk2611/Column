import { AuthLogin } from "../components/AuthLogin"
import { Quote } from "../components/Quote"

export const Login = ()=>{
    return(
    <div className="grid grid-cols-2">
        <div>
            <Quote/>
        </div>
        <div>
            <AuthLogin/>
        </div>
    </div>
    )
}
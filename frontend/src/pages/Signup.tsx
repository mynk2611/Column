import { AuthSignup } from "../components/AuthSignup"
import { Quote } from "../components/Quote"

export const Signup = ()=>{
    return(
    <div className="grid grid-cols-2">
        <div>
            <Quote/>
        </div>
        <div>
            <AuthSignup/>
        </div>
    </div>
    )

}
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Bulk } from "./pages/Bulk"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/sinup" element={<Signup />}/>
            <Route path="/signin" element={<Login />}/>
            <Route path="/bulk" element={<Bulk />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

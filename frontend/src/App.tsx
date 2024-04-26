import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Columns } from "./pages/Columns"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/bulk" element={<Columns />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

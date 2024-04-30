import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Columns } from "./pages/Columns"
import { UniqueCol } from "./pages/UniqueCol"
import { Publish } from "./pages/Publish"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/bulk" element={<Columns />}/>
            <Route path="/column/:id" element={<UniqueCol/>} />
            <Route path="/publish" element={<Publish />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

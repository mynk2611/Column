import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Columns } from "./pages/Columns"
import { UniqueCol } from "./pages/UniqueCol"
import { Publish } from "./pages/Publish"
import { MyProfile } from "./pages/MyProfile"


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/bulk" element={<Columns />}/>
            <Route path="/column/:id" element={<UniqueCol/>} />
            <Route path="/publish" element={<Publish />} />
            <Route path="/my-profile" element={<MyProfile/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

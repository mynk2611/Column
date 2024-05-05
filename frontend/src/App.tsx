import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Signup } from "./pages/Signup"
import { Login } from "./pages/Login"
import { Columns } from "./pages/Columns"
import { UniqueCol } from "./pages/UniqueCol"
import { Publish } from "./pages/Publish"
import { MyProfileColumn } from "./pages/MyProfileColumn"
import { MyProfileAbout } from "./pages/MyProfileAbout"
import { AuthorProvider } from "./contexts/AuthorContext"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bulk" element={
          <AuthorProvider>
            <Columns />
          </AuthorProvider>
        } />
        <Route path="/column/:id" element={
          <AuthorProvider>
            <UniqueCol />
          </AuthorProvider>
        } />
        <Route path="/publish" element={
          <AuthorProvider>
            <Publish />
          </AuthorProvider>
        } />
        <Route path="/my-profile" element={
          <AuthorProvider>
            <MyProfileColumn />
          </AuthorProvider>
        } />
        <Route path="/my-profile/about" element={
          <AuthorProvider>
            <MyProfileAbout />
          </AuthorProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App

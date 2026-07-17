
import { useEffect, useState } from "react"

import NavBar from "./components/NavBar.tsx"
import LandingPage from "./pages/LandingPage.tsx"
import About from "./pages/About.tsx"
import Contact from "./pages/Contact.tsx"
import Footer from "./components/footer.tsx"

import PortalForStudents from "./pages/portals/PortalForStudents.tsx"
import PortalForTeacher from "./pages/portals/PortalForTeacher.tsx"

import MyTeacherProfile from "./pages/myProfile/MyTeacherProfile.tsx"
import MyStudentProfile from "./pages/myProfile/MyStudentProfile.tsx"

import { Routes, Route, Navigate } from "react-router-dom"


import axios from "axios"
import EditMyStudentProfilr from "./pages/editProfile/EditMyStudentProfilr.tsx"
import EditMyTeacherProfile from "./pages/editProfile/EditMyTeacherProfile.tsx"

function App() {

  const [user, setUser] = useState<any>(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(()=>{
    axios.get(`/api/user`)
      .then(data => {setUser(data.data); console.log(data.data)})
      .catch(error => console.error('Error fetching user data:', error))
      .finally(() => setAuthLoading(false))
    },[])
  

  return (
    <>
      <NavBar user = {user}/>
      <Routes>
        <Route path="/" element={<LandingPage user = {user}/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />

        <Route
          path="/portal"
          element={
            authLoading ? (
              <div className="min-h-[40vh] flex items-center justify-center text-gray-500">
                Loading user...
              </div>
            ) : !user ? (
              <Navigate to="/login" />
            ): user.role === "student" ? (
              <PortalForStudents />
            ):(
              <PortalForTeacher />
            )
            
          }
        />

        <Route
          path="/profile"
          element= {
            authLoading ? (
              <div className="min-h-[40vh] flex items-center justify-center text-gray-500">
                Loading user...
              </div>
            ) :
             !user ? (
              <Navigate to="/login" />
            ): user.role === "student" ? (
              <MyStudentProfile {...user}/>
            ):(
              <MyTeacherProfile {...user}/>
            )
          }/>

        <Route
          path="/edit-profile"
          element= {
            authLoading ? (
              <div className="min-h-[40vh] flex items-center justify-center text-gray-500">
                Loading user...
              </div>
            ) :
             !user ? (
              <Navigate to="/login" />
            ): user.role === "student" ? (
              <EditMyStudentProfilr {...user}/>
            ):(
              <EditMyTeacherProfile {...user}/>
            )
          }/>





      </Routes>
      <Footer/>
    </>
  )
}


export default App
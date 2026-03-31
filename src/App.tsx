import { BrowserRouter, Route, Routes } from "react-router-dom"
import { API_BASE_URL } from "./assets/constants.ts"
import axios from "axios"
import { useEffect, useState } from "react" 


import Home from "./pages/Home.tsx"
import Navbar from "./Components/Navbar.tsx"
import Portal from "./pages/Portal.tsx"
import Login from "./pages/Login.tsx"
import TeacherProfile from "./pages/TeacherProfile.tsx"


function App() {
  
  const [user, setUser] = useState<{ fullName: string, profile?: string, email:string, role:'teacher'|'student' } | null>({ fullName: "string", email:"string", role:'student' } )

  
  // useEffect(()=>{
  //   axios.get(`${API_BASE_URL}/get-user`)
  //   .then(res => setUser(res.data))
  //   .catch(() => setUser(null))
  // },[])
  

  return (
    <BrowserRouter>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home user={user}/>}/>
        <Route path="/portal" element={user?<Portal/>:<Login/>}/>
        <Route path="/teacher/:teacherid" element={user?<TeacherProfile/>:<Login/>}/>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App

import NavBar from "./components/NavBar.tsx"
import LandingPage from "./pages/LandingPage.tsx"
import About from "./pages/About.tsx"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  )
}

export default App
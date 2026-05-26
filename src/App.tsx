import NavBar from "./components/NavBar.tsx"
import LandingPage from "./pages/LandingPage.tsx"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </>
  )
}

export default App
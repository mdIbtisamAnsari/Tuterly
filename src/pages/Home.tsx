import type React from "react"
import Hero from "../Components/Hero.tsx"
type NavbarProps = {
    user: { fullName: string; profile?: string; email: string, role:'teacher'|'student' } | null;
};
const Home:React.FC<NavbarProps> = ({user})=> {
  return (
    <div><Hero user = {user}/></div>
  )
}

export default Home
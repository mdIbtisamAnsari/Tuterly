// import { useEffect, useState, createContext, createElement, useMemo, type ReactNode, use } from "react"
// import axios from "axios"

// // type User = { name: string }



// export const UserContext = createContext<{ user: any }>({ user: null })

// export const UserProvider = ({ children }: { children: ReactNode }) => {

//   const [user, setUser] = useState<any>(null)

  

//   useEffect(() => {
//     axios.get(`http://localhost:3000/api/user`)
//       .then(data => {setUser(data.data); console.log(data.data)})
//       .catch(error => console.error('Error fetching user data:', error))
 
      
//   },[])

//   const value = useMemo(() => ({ user }), [user])
//   return createElement(UserContext.Provider, { value }, children)
// }
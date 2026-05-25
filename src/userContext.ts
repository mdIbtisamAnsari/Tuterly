import { useEffect, useState, createContext, createElement, type ReactNode } from "react"
import axios from "axios"

// type User = { name: string }

export const UserContext = createContext<{ user: any }>({ user: null })

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    axios.get('https://randomuser.me/api/?format=json')
      .then(data => {setUser(data.data); console.log(data)})
      .catch(error => console.error('Error fetching user data:', error))
  }, [])

  return createElement(UserContext.Provider, { value: { user } }, children)
}
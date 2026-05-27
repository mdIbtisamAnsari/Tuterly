import { useEffect, useState, createContext, createElement, type ReactNode } from "react"
import axios from "axios"

// type User = { name: string }

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? `${window.location.protocol}//${window.location.hostname}:3000`

export const UserContext = createContext<{ user: any }>({ user: null })

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/user`)
      .then(data => {setUser(data.data); console.log(data.data)})
      .catch(error => console.error('Error fetching user data:', error))
  }, [])

  return createElement(UserContext.Provider, { value: { user } }, children)
}
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [name, setName] = useState([])

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(
        'https://api-todo-sigma.vercel.app/agendamentos'
      )
      setName({ data })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <GlobalContext.Provider value={name}>{children}</GlobalContext.Provider>
  )
}

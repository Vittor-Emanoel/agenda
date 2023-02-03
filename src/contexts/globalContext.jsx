import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext({
  dados: [],
})

export const GlobalProvider = ({ children }) => {
  const [dados, setDados] = useState([])

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(
        'https://api-todo-sigma.vercel.app/agendamentos'
      )
      console.log(data)
      setDados(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <GlobalContext.Provider value={{ dados, setDados }}>
      {children}
    </GlobalContext.Provider>
  )
}

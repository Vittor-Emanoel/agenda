import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext({
  dados: [],
  name: String,
  date: String,
  description: [],
  fetchApi: () => {},
  handleClick: () => {},
  setDados: () => {},
})

export const GlobalProvider = ({ children }) => {
  const [dados, setDados] = useState([])

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(
        'https://api-todo-sigma.vercel.app/agendamentos'
      )
      setDados(data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async (id) => {
    try {
      const response = await axios.delete(
        `https://api-todo-sigma.vercel.app/agendamentos/${id}`
      )
      await fetchApi()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        setDados,
        dados,

        handleClick,
        fetchApi,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext({
  dados: [],
  name: String,
  date: String,
  description: [],
  isLoading: Boolean,
  fetchApi: () => {},
  handleClick: () => {},
  setDados: () => {},
  setLoading: () => {},
})

export const GlobalProvider = ({ children }) => {
  const [dados, setDados] = useState([])
  const [isLoading, setLoading] = useState(false)

  const fetchApi = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get(
        'https://api-todo-sigma.vercel.app/agendamentos'
      )
      setDados(data)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
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
        isLoading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

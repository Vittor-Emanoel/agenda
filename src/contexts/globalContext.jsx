import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext({
  dados: [],
  name: String,
  date: String,
  description: [],
  handlePost: () => {},
  handleClick: () => {},
})

export const GlobalProvider = ({ children }) => {
  const [dados, setDados] = useState([])
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

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

  const handlePost = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://api-todo-sigma.vercel.app/agendamentos', {
        name: name,
        date: date,
        description: description,
      })
      await hoToBack()
    } catch (error) {
      console.log(error)
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
        date,
        setName,
        setDate,
        setDescription,
        description,
        name,
        handlePost,
        handleClick,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

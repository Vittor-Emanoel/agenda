import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EditPage() {
  const { id } = useParams()
  const [dados, setDados] = useState([])

  const findById = async (id) => {
    try {
      const response = await axios.get(
        `https://api-todo-sigma.vercel.app/agendamentos/${id}`
      )
      setDados(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findById(id)
  }, [id])
  return <></>
}

export default EditPage

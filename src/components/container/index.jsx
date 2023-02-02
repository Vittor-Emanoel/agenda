import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import Cliente from '../cliente'

function Container() {
  const [dados, setDados] = useState([])
  const [alert, setAlert] = useState(false)

  const navigate = useNavigate()

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(
        'https://api-todo-sigma.vercel.app/agendamentos'
      )
      setDados(data)
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

  const handleEdit = async (id) => {
    navigate(`/editar/${id}`)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="w-full max-h-min flex  justify-center ">
      <div className="flex w-1/3 h-64 mt-2 flex-col gap-6 overflow-auto">
        {dados.map((cliente) => (
          <Cliente
            key={cliente._id}
            nome={cliente.name}
            data={moment(cliente.date).format('DD/MM/YYYY HH:mm:ss')}
            description={cliente.description}
            handleClick={() => handleClick(cliente._id)}
            handleEdit={() => handleEdit(cliente._id)}
          />
        ))}
      </div>
      {/* <AlertComponent /> */}
    </div>
  )
}

export default Container

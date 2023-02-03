import moment from 'moment'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../../contexts/globalContext'
import Schedules from '../schedules'

function Container() {
  const { dados, handleClick } = useContext(GlobalContext)

  // const fetchApi = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       'https://api-todo-sigma.vercel.app/agendamentos'
  //     )
  //     setDados(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleClick = async (id) => {
  //   try {
  //     const response = await axios.delete(
  //       `https://api-todo-sigma.vercel.app/agendamentos/${id}`
  //     )
  //     await fetchApi()
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleEdit = async (id) => {
  //   navigate(`/edit/${id}`)
  // }

  // useEffect(() => {
  //   fetchApi()
  // }, [])

  return (
    <div className="w-full max-h-min flex  justify-center ">
      <div className="flex w-1/3 h-64 mt-2 flex-col gap-6 overflow-auto">
        {dados.map((cliente) => (
          <Schedules
            key={cliente._id}
            nome={cliente.name}
            data={moment.utc(cliente.date).format('DD/MM/YYYY HH:mm')}
            description={cliente.description}
            handleClick={() => handleClick(cliente._id)}
            handleEdit={() => handleEdit(cliente._id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Container

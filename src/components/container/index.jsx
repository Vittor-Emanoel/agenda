import moment from 'moment'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/globalContext'
import Schedules from '../schedules'

function Container() {
  const { dados, handleClick } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }
  return (
    <div className="w-full max-h-min flex  justify-center ">
      <div className="flex w-1/3 h-64 mt-2 flex-col gap-6 overflow-auto">
        {dados.map((cliente) => (
          <Schedules
            key={cliente._id}
            nome={cliente.name}
            data={moment.utc(cliente.date).format('DD/MM/YYYY HH:mm:ss')}
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

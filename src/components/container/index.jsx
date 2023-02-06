import moment from 'moment'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../contexts/globalContext'
import Loading from '../loading'
import Schedules from '../schedules'

function Container() {
  const { dados, handleClick, fetchApi, isLoading } = useContext(GlobalContext)
  const navigate = useNavigate()

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="w-full max-h-min flex  justify-center mt-5  ">
      <div className="flex w-1/3 h-80 mt-2 flex-col gap-6  max-sm:w-4/5 ">
        {isLoading && <Loading />}

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

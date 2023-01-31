import axios from 'axios'
import moment from 'moment'
import { useEffect, useState } from 'react'
import Cliente from '../cliente'

function Container() {
  const [dados, setDados] = useState([])

  const fetchApi = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/agendamentos')
      setDados(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className="w-full max-h-min flex  justify-center">
      <div className="flex w-1/3 mt-2 flex-col gap-6">
        {dados.map((cliente) => (
          <Cliente
            key={cliente._id}
            nome={cliente.name}
            data={moment(cliente.date).format('DD/MM/YYYY HH:mm:ss')}
          />
        ))}
      </div>
    </div>
  )
}

export default Container

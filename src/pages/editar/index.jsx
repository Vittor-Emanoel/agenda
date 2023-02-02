import { useState } from 'react'
import { useParams } from 'react-router-dom'

function Editar() {
  const { id } = useParams()
  const [dados, setDados] = useState([])

  // useEffect(() => {
  //   axios.
  // }, [id])

  return <p></p>
}

export default Editar

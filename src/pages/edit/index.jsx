import axios from 'axios'
import moment from 'moment/moment'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Loading from '../../components/loading'
import { GlobalContext } from '../../contexts/globalContext'

function EditPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isLoading } = useContext(GlobalContext)

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const [isFetch, setIsFetch] = useState(false)

  const fetch = async () => {
    try {
      setIsFetch(true)
      const { data } = await axios.get(
        `https://api-todo-sigma.vercel.app/agendamentos/${id}`
      )
      setName(data.name)
      setDate(data.date)
      setDescription(data.description)
    } catch (error) {
      console.log(error)
    } finally {
      setIsFetch(false)
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      // {
      //   isLoading && <Loading />
      // }
      const { data } = await axios.patch(
        `https://api-todo-sigma.vercel.app/agendamentos/${id}`,
        {
          name: name,
          date: date,
          description: description,
        }
      )
      await homeToBack()
    } catch (err) {
      console.log(err)
    }
  }

  const homeToBack = () => {
    navigate('/')
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <div className="w-1/3 flex flex-col m-auto mt-16 max-sm:w-4/5  ">
      <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text text-center mb-5 ">
        Editar Cadastro
      </h1>
      {isFetch && <Loading />}

      <form method="PATCH" className="flex flex-col">
        <label htmlFor="">Nome</label>

        <input
          className="w-full p-2 mt-2 mb-5 bg-slate-100 border"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Data/Horário</label>
        <input
          className="w-full p-2 mt-2 mb-5 bg-slate-100 border"
          type="datetime-local"
          value={moment.utc(date).format('YYYY-MM-DDTHH:mm')}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* <small role="alert" className="text-red-500">
        {' '}
        campo obrigatório
      </small> */}

        <label htmlFor="">Descrição</label>
        <textarea
          className="border bg-slate-100 p-2"
          cols="30"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-12  p-2 bg-button text-white rounded-lg text-lg max-sm:text-lg"
          onClick={handleEdit}
        >
          Salvar
        </button>

        <Link to="/" className="text-center mt-2 text-lg max-sm:text-lg">
          voltar
        </Link>
      </form>
    </div>
  )
}

export default EditPage

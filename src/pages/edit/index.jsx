import axios from 'axios'
import moment from 'moment/moment'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function EditPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const fetch = async () => {
    try {
      const { data } = await axios.get(
        `https://api-todo-sigma.vercel.app/agendamentos/${id}`
      )
      setName(data.name)
      setDate(data.date)
      setDescription(data.description)
    } catch (error) {
      console.log(error)
    }
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
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
    <div className="w-1/3 flex flex-col m-auto mt-16 ">
      <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text text-center mb-5">
        Cadastrar novo
      </h1>

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
          value={moment.utc(date).format('YYYY-MM-DDTHH:mm:ss')}
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
          className="mt-4  p-2 bg-button text-white"
          onClick={handleEdit}
        >
          Salvar
        </button>

        <Link to="/" className="text-center mt-2">
          voltar
        </Link>
      </form>
    </div>
  )
}

export default EditPage

import axios from 'axios'
import moment from 'moment'
import { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CustomInput from '../../components/input-component'
import { GlobalContext } from '../../contexts/globalContext'

function EditPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const { date, name, description, setName, setDate, setDescription } =
    useContext(GlobalContext)

  const findById = async (id) => {
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
  const hoToBack = () => {
    navigate('/')
  }

  const handleEditPost = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.put(
        `https://api-todo-sigma.vercel.app/agendamentos/${id}`
      )
      console.log(response)
      await hoToBack()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    findById(id)
  }, [id])
  return (
    <div className="w-1/3 flex flex-col m-auto mt-16 ">
      <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text text-center mb-5">
        Editar Cadastro
      </h1>

      <form className="flex flex-col">
        <label htmlFor="">Nome</label>
        {/* 
      <small role="alert" className="text-red-500">
        campo obrigatório
      </small> */}

        <CustomInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* <small role="alert" className="text-red-500">
        {' '}
        campo obrigatório
      </small> */}

        <label htmlFor="">Data/Horário</label>
        <CustomInput
          type={'datetime-local'}
          value={moment(date).format('YYYY-MM-DDTHH:mm')}
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
          onClick={handleEditPost}
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

import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from '../../components/input-component'

function New() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const hoToBack = () => {
    navigate('/')
  }

  const handlePost = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://api-todo-sigma.vercel.app/agendamentos', {
        name: name,
        date: date,
        description: description,
      })
      await hoToBack()
    } catch (error) {
      setError('input', {
        type: 'required',
      })
    }
  }

  return (
    <div className="w-1/3 flex flex-col m-auto mt-16 ">
      <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text text-center mb-5">
        Novo cadastro
      </h1>

      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col">
        <label htmlFor="">Nome</label>
        {errors.input?.type === 'required' && (
          <small role="alert" className="text-red-500">
            campo obrigatório
          </small>
        )}
        <CustomInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {errors.input?.type === 'required' && (
          <small role="alert" className="text-red-500">
            {' '}
            campo obrigatório
          </small>
        )}
        <label htmlFor="">Data/Horário</label>
        <CustomInput
          type={'datetime-local'}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        {errors.input?.type === 'required' && (
          <small role="alert" className="text-red-500">
            {' '}
            campo obrigatório
          </small>
        )}
        <label htmlFor="">Descrição</label>
        <textarea
          className="border bg-slate-100 p-2"
          cols="30"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="mt-4  p-2 bg-button text-white" onClick={handlePost}>
          Salvar
        </button>

        <Link to="/" className="text-center mt-2">
          voltar
        </Link>
      </form>
    </div>
  )
}

export default New
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function New() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

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
      console.log(error)
    }
  }

  return (
    <div className="w-1/3 flex flex-col m-auto mt-16  max-sm:w-4/5 ">
      <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text text-center mb-5">
        Cadastrar novo
      </h1>

      <form method="POST" className="flex flex-col">
        <label htmlFor="">Nome</label>
        {/* 
        <small role="alert" className="text-red-500">
          campo obrigatório
        </small> */}
        <input
          className="w-full p-2 mt-2 mb-5 bg-slate-100 border"
          type="text"
          value={name}
          placeholder="O que deseja adicionar?"
          onChange={(e) => setName(e.target.value)}
        />

        {/* <small role="alert" className="text-red-500">
          {' '}
          campo obrigatório
        </small> */}

        <label htmlFor="">Data/Horário</label>
        <input
          className="w-full p-2 mt-2 mb-5 bg-slate-100 border"
          type="datetime-local"
          value={date}
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
          className="mt-12  p-2 bg-button text-white rounded-lg text-xl"
          onClick={handlePost}
        >
          Salvar
        </button>

        <Link to="/" className="text-center mt-2 text-xl">
          voltar
        </Link>
      </form>
    </div>
  )
}
export default New

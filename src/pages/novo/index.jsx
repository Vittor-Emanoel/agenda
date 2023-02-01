import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Novo() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const hoToBack = () => {
    navigate('/')
  }

  const handlePost = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('http://localhost:3000/agendamentos', {
        name: name,
        date: date,
        description: description,
      })
      alert(`Cadastrado com sucesso`)
      await hoToBack()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-1/3 flex flex-col m-auto mt-16 ">
      <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text text-center mb-5">
        Cadastrar novo Cliente
      </h1>

      <form action="" className="flex flex-col">
        <label htmlFor="">Nome</label>
        <input
          className="w-full p-2 mt-2 mb-5 bg-slate-100 border"
          type="text"
          value={name}
          placeholder="Digite o nome?"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Data/Horário</label>
        <input
          className="w-full bg-slate-100 p-2 mt-2 mb-5"
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="">Descrição</label>
        <textarea
          className="border bg-slate-100 p-2"
          cols="30"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="mt-4 border p-2 bg-slate-50" onClick={handlePost}>
          Salvar
        </button>

        <Link to="/" className="text-center mt-2">
          voltar
        </Link>
      </form>
    </div>
  )
}

export default Novo

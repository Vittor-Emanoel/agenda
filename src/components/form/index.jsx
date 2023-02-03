import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../contexts/globalContext'
import CustomInput from '../input-component'

function Form() {
  const {
    date,
    setName,
    setDate,
    setDescription,
    description,
    name,
    handlePost,
  } = useContext(GlobalContext)

  return (
    <div className="w-1/3 flex flex-col m-auto mt-16 ">
      <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text text-center mb-5">
        OLÁ
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

export default Form

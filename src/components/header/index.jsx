import { Plus } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/new')
  }

  return (
    <header className="min-w-full flex justify-center items-center flex-col mt-12">
      <div className=" w-1/3 flex justify-between gap-12 mt-8 max-sm:w-5/6   md:itens-center">
        <h1 className=" font-extrabold text-4xl bg-transparent text-transparent bg-clip-text max-sm:text-4xl">
          MyAgenda
        </h1>

        <button onClick={handleNavigate}>
          <Plus size={32} color="gray" />
        </button>
      </div>
      <div className="w-full flex justify-center ">
        <input
          type="text"
          placeholder="Pesquisar por..."
          className="w-1/3 p-2 mt-5 mb-5 bg-slate-100 rounded-lg border max-sm:w-5/6"
          disabled={true}
        />
      </div>
    </header>
  )
}

export default Header

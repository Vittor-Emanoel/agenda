import { Plus } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/novo')
  }

  return (
    <header className="w-full min-w-full flex justify-center items-center flex-col mt-12 sm:w-full lg:w-full  ">
      <div className="flex w-1/3 justify-between gap-12 mt-8 max-w-full ">
        <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text">
          MyAgenda
        </h1>

        <button onClick={handleNavigate}>
          <Plus size={32} />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Pesquisar por..."
          className="w-1/3 p-2 mt-5 mb-5 bg-slate-100 rounded-lg border "
          disabled={true}
        />
      </div>
    </header>
  )
}

export default Header

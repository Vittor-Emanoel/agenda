import { Plus } from 'phosphor-react'

function Header() {
  return (
    <header className="w-full flex justify-center items-center flex-col mt-12 border border-sky-500">
      <div className="flex w-1/3 justify-between gap-12 mt-8">
        <h className="font-extrabold text-4xl">MyAgenda</h>
        <button>
          <Plus size={32} />
        </button>
      </div>
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Qual cliente?"
          className="w-1/3 p-2 mt-5 mb-5 bg-slate-100"
        />
      </div>
    </header>
  )
}

export default Header

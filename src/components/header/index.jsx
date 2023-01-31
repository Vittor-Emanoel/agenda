import NovoCliente from '../novo'

function Header() {
  return (
    <header className="w-full min-w-full flex justify-center items-center flex-col mt-12 first-letter:">
      <div className="flex w-1/3 justify-between gap-12 mt-8">
        <h1 className="font-extrabold text-4xl bg-transparent text-transparent bg-clip-text">
          MyAgenda
        </h1>
        <NovoCliente />
      </div>
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Qual cliente?"
          className="w-1/3 p-2 mt-5 mb-5 bg-slate-100 border"
        />
      </div>
    </header>
  )
}

export default Header

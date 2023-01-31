function Header() {
  return (
    <header className="">
      <div>
        <h1>MyAgenda</h1>
        <button>
          <Plus size={32} />
        </button>
      </div>
      <div>
        <input type="text" className="bg-slate-200" />
      </div>
    </header>
  )
}

export default Header

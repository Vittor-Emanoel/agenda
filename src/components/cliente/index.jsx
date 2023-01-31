function Cliente({ nome, data }) {
  return (
    <div className="w-full h-16 flex flex-col justify-center p-3   bg-slate-300">
      <div className="flex justify-between">
        <h2 className="font-medium">Nome</h2>
        <h2 className="font-medium">Data</h2>
      </div>
      <div className="flex justify-between">
        <div>{nome}</div>
        <div>
          {data} <span>12:00</span>
        </div>
      </div>
    </div>
  )
}

export default Cliente

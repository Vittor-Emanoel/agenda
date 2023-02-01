function Cliente({ nome, data }) {
  return (
    <div className="w-full h-16 flex flex-col justify-center p-3  text-gray-600 border">
      <div className="flex justify-between font-bold">
        <h2>NOME</h2>
        <h2>DIA/HORA</h2>
      </div>
      <div className="flex justify-between font-light ">
        <div>{nome}</div>
        <div>{data}</div>
      </div>
    </div>
  )
}

export default Cliente

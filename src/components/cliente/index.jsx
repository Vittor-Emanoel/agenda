function Cliente({ nome, data, handleClick }) {
  return (
    <div
      className="w-full h-16 flex flex-col justify-center p-3  text-gray-600 border"
      onClick={handleClick}
    >
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

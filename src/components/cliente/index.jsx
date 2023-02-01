function Cliente({ nome, data, description, handleClick }) {
  return (
    <div
      className="w-full h-28 flex flex-col justify-center p-4  text-gray-600 border rounded-lg"
      onClick={handleClick}
    >
      <div className="flex justify-between font-bold">
        <h2>NOME</h2>
        <h2>DIA/HORA</h2>
      </div>
      <div className="flex justify-between font-light ">
        <small>{nome}</small>
        <small>{data}</small>
      </div>
      <div>
        <strong className="flex justify-between font-bold mt-2">
          Descrição
        </strong>
        <small>{description}</small>
      </div>
    </div>
  )
}

export default Cliente

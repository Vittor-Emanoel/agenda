import { Pencil, Trash } from 'phosphor-react'

function Schedules({ nome, data, description, handleClick, handleEdit }) {
  return (
    <div className="w-full h-28 flex flex-col justify-center p-4  text-gray-600 border rounded-lg">
      <div className="flex justify-between font-bold">
        <h2>NOME</h2>
        <h2>DIA/HORA</h2>
      </div>
      <div className="flex justify-between font-light ">
        <small>{nome}</small>
        <small>{data}</small>
      </div>
      <div>
        <strong className="flex justify-between font-bold mt-2 items-center ">
          Descrição
          <div className="flex ">
            <button>
              <Pencil size={22} onClick={handleEdit} />
            </button>
            <button>
              <Trash size={22} color="red" onClick={handleClick} />
            </button>
          </div>
        </strong>
        <small>{description}</small>
      </div>
    </div>
  )
}

export default Schedules

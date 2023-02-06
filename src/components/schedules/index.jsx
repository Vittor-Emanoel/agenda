import { Pencil, Trash } from 'phosphor-react'

function Schedules({ nome, data, description, handleClick, handleEdit }) {
  return (
    <div className="w-4/3 flex flex-col justify-center p-4 text-gray-600 border rounded-lg ">
      <div className="flex justify-between font-bold w-full text-base ">
        <h2>NOME</h2>
        <h2>DATA|HORA</h2>
      </div>
      <div className="flex justify-between font-light max-sm:text-xl ">
        <p className="text-sm">{nome}</p>
        <p className="text-sm">{data}</p>
      </div>
      <div>
        <h2 className="flex justify-between font-bold mt-2 items-center text-base ">
          DESCRIÇÃO
          <div className="flex ">
            <button>
              <Pencil size={22} onClick={handleEdit} />
            </button>
            <button>
              <Trash size={22} color="red" onClick={handleClick} />
            </button>
          </div>
        </h2>
      </div>
      <div className="flex flex-col">
        <h2 className="max-sm:text-sm text-sm font-light break-words">
          {description}
        </h2>
      </div>
    </div>
  )
}

export default Schedules

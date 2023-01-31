import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { Plus } from 'phosphor-react'
import { useState } from 'react'

import './style.css'

function NovoCliente() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const handleSave = async () => {
    try {
      const post = await axios.post('http://localhost:3000/agendamentos', {
        name: name,
        date: date,
        dateAndHours: description,
      })
      setDate('')
      setDate('')
      setDescription('')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <Plus size={32} color="gray" />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content
            className="DialogContent w-1/3 h-96 m-auto absolute top-20 left-1/3  bg-white rounded-lg border-none flex flex-col
          p-5 items-center"
          >
            <Dialog.Title className="DialogTitle font-bold text-2xl">
              Novo cliente
            </Dialog.Title>
            <fieldset className="Fieldset mt-7 flex flex-col text-left">
              <label className="Label" htmlFor="name">
                NOME
              </label>
              <input
                className="Input bg-slate-100 border p-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="text"
              />
            </fieldset>
            <fieldset className="Fieldset mt-3 flex flex-col text-left">
              <label className="Label" htmlFor="username">
                DATA/HORÁRIO
              </label>
              <input
                className="Input bg-slate-100 border p-1"
                id="username"
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </fieldset>
            <fieldset className="Fieldset mt-3 flex flex-col text-left">
              <label className="Label" htmlFor="username">
                DESCRIÇÃO
              </label>
              <textarea
                className="border bg-slate-100 p-2"
                name=""
                id=""
                cols="30"
                rows="2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </fieldset>
            <div
              style={{
                display: 'flex',
                marginTop: 25,
                justifyContent: 'flex-end',
              }}
            >
              <Dialog.Close asChild>
                <button
                  className="Button green bg-lime-200 p-2"
                  onClick={handleSave}
                  type="submit"
                >
                  Save changes
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close"></button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default NovoCliente

function CustomInput({ value, onChange, type }) {
  return (
    <input
      className="w-full p-2 mt-2 mb-5 bg-slate-100 border"
      type={type}
      value={value}
      placeholder="Digite o nome do seu compromisso..."
      onChange={onChange}
    />
  )
}

export default CustomInput

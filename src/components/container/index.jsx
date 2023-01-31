import Cliente from '../cliente'

function Container() {
  return (
    <div className="w-full h-screen border flex justify-center">
      <div className="flex w-1/3 mt-2 ">
        <Cliente />
      </div>
    </div>
  )
}

export default Container

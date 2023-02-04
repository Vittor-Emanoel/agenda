import { SyncLoader } from 'react-spinners'

function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-100 bg-loading">
      <SyncLoader size={30} color={'#4de3fda5  '} />
    </div>
  )
}

export default Loading

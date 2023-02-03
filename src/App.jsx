import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import New from './pages/new'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/novo" element={<New />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

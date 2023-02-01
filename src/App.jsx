import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Novo from './pages/novo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo" element={<Novo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

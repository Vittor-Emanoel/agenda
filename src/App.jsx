import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editar from './pages/editar'
import Home from './pages/home'
import Novo from './pages/novo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/novo" element={<Novo />} />
        <Route path="/editar/:id" element={<Editar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

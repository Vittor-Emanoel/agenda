import { BrowserRouter, Route, Routes } from 'react-router-dom'
import EditPage from './pages/edit'
import Home from './pages/home'
import New from './pages/new'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

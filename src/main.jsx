import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { SchedulesProvider } from './contexts/schedulesContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SchedulesProvider>
      <App />
    </SchedulesProvider>
  </React.StrictMode>
)

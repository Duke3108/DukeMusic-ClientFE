import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
    </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

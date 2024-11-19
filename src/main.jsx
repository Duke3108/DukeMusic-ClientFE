import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'
import { Route, Routes } from "react-router-dom"
import Login from "./components/Login.jsx"
import {Provider} from "react-redux"
import store from './redux/store.js'
import Signup from './components/Signup.jsx'
import Step1 from './components/Step1.jsx'
import Step2 from './components/Step2.jsx'
import ResetPass from './components/ResetPass.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
      <Provider store={store}>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/signup/step1" element={<Step1/>}/>
            <Route path="/signup/step2" element={<Step2/>}/>
            <Route path="/password-reset" element={<ResetPass/>}/>
        </Routes>
      </Provider>
    </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

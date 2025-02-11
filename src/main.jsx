import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'
import {Provider} from "react-redux"
import  { store,persistor } from './redux/store.js'
import Signup from './pages/SignUp/Signup.jsx'
import Step1 from './pages/SignUp/Step1.jsx'
import Step2 from './pages/SignUp/Step2.jsx'
import ResetPass from './pages/ResetPass.jsx'
import NoteFound from './pages/NotFound.jsx'
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login.jsx'
import DisplayHome from "./components/DisplayHome.jsx"
import DisplayAlbum from './components/DisplayAlbum.jsx'
import DisplayProfile from "./components/DisplayProfile"
import DisplayPlaylist from "./components/DisplayPlaylist"
import { PersistGate } from 'redux-persist/integration/react'
import DisplayArtist from './components/DisplayArtist.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
              <Route path="/" element={<App/>}>
                <Route path="/" element={<DisplayHome/>}/>
                <Route path="/album/:id" element={<DisplayAlbum/>}/>
                <Route path="/playlist/:id" element={<DisplayPlaylist/>}/>
                <Route path="/user/:id" element={<DisplayProfile/>}/>
                <Route path="/album/:id" element={<DisplayAlbum/>}/>
                <Route path="/artist/:id" element={<DisplayArtist/>}/>
                <Route path="*" element={<NoteFound />} />
              </Route>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/signup/step1" element={<Step1/>}/>
              <Route path="/signup/step2" element={<Step2/>}/>
              <Route path="/password-reset" element={<ResetPass/>}/>
              <Route path="*" element={<NoteFound />} />
          </Routes>
        </PersistGate> 
      </Provider>
    </PlayerContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

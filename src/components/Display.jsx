import { Route, Routes, useLocation } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"
import { useEffect, useRef } from "react"
import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import DisplayProfile from "./DisplayProfile"
import DisplayPlaylist from "./DisplayPlaylist"
import DisplayArtist from "./DisplayArtist"


const Display = () => {

  const {albumsData} = useContext(PlayerContext)
  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes('album')
  const albumId = isAlbum ? location.pathname.split('/').pop() : ''
  const bgColor = isAlbum && albumsData.length > 0 ? albumsData.find((x) => (x._id == albumId)).bgColour : '#121212'

  useEffect(() =>{
    if(isAlbum){
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    }else{
      displayRef.current.style.background = `#121212`
    }
  })

  return (
    <div ref={displayRef} className=" rounded-md h-full flex-col gap-2 text-white w-full flex m-2 mt-0 px-6  bg-[#121212] overflow-auto lg:w-fulll lg:ml-0">
        {albumsData.length > 0
        ? <Routes>
          <Route path="/" element={<DisplayHome/>}/>
          <Route path="/album/:id" element={<DisplayAlbum album={albumsData.find((x) => (x._id == albumId))}/>}/>
          <Route path="/playlist/:id" element={<DisplayPlaylist/>}/>
          <Route path="/user/:id" element={<DisplayProfile/>}/>
          <Route path="/artist/:id" element={<DisplayArtist/>}/>
        </Routes>
        : null
        }
    
    </div>
  )
}

export default Display
import AlbumItem from "./AlbumItem"
import SongItem from "./SongItem"
import { useContext } from "react"
import { PlayerContext } from "../context/PlayerContext"
import ArtistItem from "./ArtistItem"

const DisplayHome = () => {

  const {songsData, albumsData, artistsData} = useContext(PlayerContext)
  return (
    <>
      
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Nghệ sĩ phổ biến</h1>
        <div className="flex overflow-auto">
          {artistsData.map((item,index) => (
            <ArtistItem key={index} name={item.name} image={item.avatar} id={item._id}/>
          ))}
          
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Album và đĩa đơn nổi tiếng</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item,index) => (<AlbumItem key={index} name={item.name} desc={item.desc} id={item._id} image={item.image}/>))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Bài hát nổi bật</h1>
        <div className="flex overflow-auto">
          {songsData.map((item,index) => (<SongItem key={index} name={item.name} id={item._id} image={item.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
/* eslint-disable react/prop-types */
import {useContext} from 'react'
import { PlayerContext } from '../context/PlayerContext'
import {useSelector} from 'react-redux'

const SongItem = ({name, image, id}) => {

  const user = useSelector((state)=>state.auth.login?.currentUser)

  const {playWithId} = useContext(PlayerContext)

  const handlePlay = () => {
    if(user){
      playWithId(id)
    }
    
  }


  return (
    <div onClick={handlePlay} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt=''/>
        <p className='font-bold mt-2 mb-1'>{name}</p>
        
    </div>
  )
}

export default SongItem
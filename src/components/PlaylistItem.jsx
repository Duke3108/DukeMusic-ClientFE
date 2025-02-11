/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import {useSelector} from 'react-redux'

const PlaylistItem = ({id,image,name}) => {

    const user = useSelector((state)=>state.auth.login?.currentUser)
    const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/playlist/${id}`,{})} className="cursor-pointer flex h-[64px] w-[264px]">
        <div className="size-12 flex items-center justify-center">
            <img className="size-6" src={`${image ? image : assets.music}`} alt="" />
        </div>
        <div className="flex flex-col">
            <p>{name}</p>
            <p>Danh sách phát · {user.name}</p>
        </div>
    </div>
  )
}

export default PlaylistItem
/* eslint-disable no-unused-vars */
import { assets } from "../assets/assets"
import {useSelector} from 'react-redux'

const PlaylistItem = ({id,image,name}) => {

    const user = useSelector((state)=>state.auth.login?.currentUser)

  return (
    <div className="flex h-[64px] w-[264px]">
        <div className="size-12 flex items-center justify-center">
            <img className="size-6" src={assets.music} alt="" />
        </div>
        <div className="flex flex-col">
            <p>Danh sách phát của tôi</p>
            <p>Danh sách phát · {user.name}</p>
        </div>
    </div>
  )
}

export default PlaylistItem
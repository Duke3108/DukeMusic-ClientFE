/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"


const ArtistItem = ({id,image,name}) => {

    const navigate = useNavigate()

  return (
    
        <div onClick={() => navigate(`/artist/${id}`)} className="rounded-md p-4 flex flex-col gap-2 hover:bg-[rgba(255,255,255,0.1)]">

            <div>
                <img className="rounded-full size-[150px]" src={image} alt=""/>
            </div>

            <div className="flex flex-col gap-1">
                <p>{name}</p>
                <p>Nghệ sĩ</p>
            </div>
        </div>
   
  )
}

export default ArtistItem
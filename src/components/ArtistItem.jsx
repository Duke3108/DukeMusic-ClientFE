/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"


const ArtistItem = ({id,image,name}) => {

    const navigate = useNavigate()

  return (
    
        <div onClick={() => navigate(`/artist/${id}`)} className="w-1/5 flex flex-col gap-4 p-2 px-3 rounded-md cursor-pointer hover:bg-[#ffffff26]">

            <div className="">
                <img className="w-full rounded-full h-[200px]" src={image} alt=""/>
            </div>
                
            

            <div className="flex flex-col gap-1">
                <p>{name}</p>
                <p>Nghệ sĩ</p>
            </div>
        </div>
   
  )
}

export default ArtistItem
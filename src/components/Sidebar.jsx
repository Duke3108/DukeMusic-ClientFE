import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlaylistItem from "./PlaylistItem";
import axios from 'axios'
import { url } from "../App";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const user = useSelector((state) => state.auth.login?.currentUser);

  const handleCreatePlaylist = () => {
    if (user) {
      createNewPlaylist();
    }else{
        setOpen(true);
    }
  };

  const createNewPlaylist = async () => {
    try {
        const id = user?._id
        const playlist = {
            ownerId: id
        }
  
        const newPlaylist = await axios.post(`${url}/api/playlist/add`,playlist)
  
        if(newPlaylist.data.newPlaylist){
            const dataPlaylist = newPlaylist.data.newPlaylist
          navigate(`/playlist/${newPlaylist.data.newPlaylist._id}`,{state:dataPlaylist})
        }
        
    } catch (error) {
        console.log(error)
    }
}

    useEffect(() => {
        if(user){
            //getPlaylistData()
            console.log(user.playlist)
        }
    },[])

  return (
    <>
      <div className="w-[25%] rounded-md p-2 pt-0 flex-col gap-2 text-white hidden lg:flex">
        <div className="h-[60px]"></div>
        <div className="bg-[#121212] h-full rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className="w-7" src={assets.stack_icon} alt="" />
              <p className="font-semibold">Thư viện</p>
            </div>
            <div className="flex items-center gap-3 rounded-full p-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)]">
              <img
                onClick={handleCreatePlaylist}
                className="w-5"
                src={assets.plus_icon}
                alt=""
              />
            </div>
          </div>

        {!user || !user.playlist
        ?<div className="bg-[#242424] rounded text-[14px] mx-2 px-4 py-5 font-bold flex flex-col gap-1">
        <h1 className="text-[16px]">Tạo danh sách phát đầu tiên của bạn</h1>
        <p className="font-normal">Rất dễ! Chúng tôi sẽ giúp bạn</p>
        <div>
          <button
            onClick={handleCreatePlaylist}
            className="px-4 py-1 bg-white text-black rounded-full mt-2 cursor-pointer"
          >
            Tạo danh sách phát
          </button>
        </div>
      </div>
        : <div className="flex flex-col">
        {user?.playlist.map((item,index) => (<PlaylistItem key={index} desc={item.desc}  name={item.name} id={item._id} image={item.imageUrl}/>))}
      </div>}
          

          

          {open && (
            <div className="p-4 block text-[14px] max-w-[336px] text-black bg-blue-400 w-[332px] rounded-lg font-bold absolute top-[15%] left-[20%]">
              <div className="flex flex-col">
                <div className="mb-2 text-[14px]">
                  <p>Tạo danh sách phát</p>
                </div>
                <p className=" font-semibold">Đăng nhập để tạo playlist</p>
                <div className="mt-6 flex justify-between items-center">
                  <div></div>
                  <div className="gap-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="bg-transparent rounded-full px-4 py-2"
                    >
                      Để sau
                    </button>
                    <button
                      onClick={() => navigate("/login")}
                      className="bg-white rounded-full px-4 py-2"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

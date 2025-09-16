/* eslint-disable no-unused-vars */
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { useContext, useEffect } from "react";
import { PlayerContext } from "./context/PlayerContext.jsx";
import Navbar from "./components/Navbar.jsx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const url = "https://duke-music-be.onrender.com";

const App = () => {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <>
      <div className="relative flex flex-col h-screen bg-black">
        {songsData.length !== 0 ? (
          <>
            <div className="h-[64px] p-2 bg-black fixed z-50 right-0 left-0 top-0">
              <Navbar />
            </div>
            <div className="flex h-full ">
              <Sidebar />
              <div className="w-full overflow-auto">
                <div className="h-[64px]"></div>
                <Display />
                <div className="h-[72px]"></div>
              </div>
            </div>

            <div className="h-[72px] bg-black fixed z-50 right-0 left-0 bottom-0">
              <Player />
            </div>
          </>
        ) : null}
        <audio
          ref={audioRef}
          src={track ? track.file : ""}
          preload="auto"
        ></audio>
      </div>
    </>
  );
};

export default App;

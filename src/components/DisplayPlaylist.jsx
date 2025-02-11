import { useLocation } from 'react-router-dom';

const DisplayPlaylist = () => {
  const location = useLocation();
  const { state } = location || {};
  const { dataPlaylist } = state || {};

  console.log(dataPlaylist)
  return (
    <div className=' text-white'>
      playlist
        {dataPlaylist?.name}
    </div>
  )
}

export default DisplayPlaylist
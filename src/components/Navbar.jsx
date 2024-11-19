import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import {useSelector} from 'react-redux'

const Navbar = () => {

    const navigate = useNavigate()
    const user = useSelector((state)=>state.auth.login.currentUser)

  return (
    <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>
            </div>

            

            {user 
            ? <div className='flex items-center justify-between font-bold gap-4'>
                <button className='bg-white h-8 justify-center items-center text-black text-[14px] px-8 py-2 rounded-full hidden md:flex cursor-pointer'>Khám phá Premium</button>
                <button className='bg-black h-8 justify-center items-center py-2 px-8 rounded-full text-[14px] hidden md:flex cursor-pointer'>
                    <img className='size-4 mr-1' src={assets.download_icon} alt='download'/>
                    Cài đặt Ứng dụng
                </button>
                <img className='size-4 ml-2' src={assets.bell_icon} alt='thongbao'/>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>
            </div>
            : <div className='flex items-center gap-4 font-bold'>
                <button onClick={() => navigate('/signup')} className='bg-black h-[48px] justify-center items-center py-2 px-8 rounded-full text-[16px] hidden md:flex cursor-pointer'>Đăng ký</button>
                <button onClick={() => navigate('/login')} className='bg-white h-[48px] justify-center items-center text-black text-[16px] px-8 py-2 rounded-full hidden md:flex cursor-pointer'>Đăng nhập</button>
            </div>}
        </div>

        <div className='flex items-center gap-2 mt-4'>
            <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
            <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
    </>
  )
}

export default Navbar
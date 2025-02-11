import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import {useSelector} from 'react-redux'
import { useState } from "react"
import {useDispatch} from 'react-redux'
import { logout } from '../redux/apiRequest'
import {createAxios} from '../createInstance'
import { logoutSuccess } from '../redux/authSlice'


const Navbar = () => {

    const navigate = useNavigate()
    const user = useSelector((state)=>state.auth.login?.currentUser)
    const [openProfile, setOpenProfile] = useState(false)
    const dispatch = useDispatch()
    const accessToken = user?.accessToken
    const id = user?._id
    let axiosJWT = createAxios(user,dispatch,logoutSuccess)

    const handleLogout = () => {
        setOpenProfile(false)
        logout(dispatch,id,navigate,accessToken,axiosJWT)
    }


  return (
    <div className='flex items-center justify-between h-12'>

            <div onClick={() => navigate('/')} className='flex-1 flex items-center '>
                <img className='m-5 size-11 cursor-pointer' src={assets.Duke_smLogo_white} alt='Logo'/>
            </div>

            <div className='flex-1 flex w-full'>
                <button onClick={() => navigate('/')} className='px-3 hidden justify-center items-center md:flex bg-[#1F1F1F] rounded-full'>
                    <img className='size-6' src={assets.home_icon} alt='home'/>
                </button>
                <div className='px-2 relative w-full'>
                    <form className='flex w-full relative'>
                        <div className='flex items-center  justify-center size-12 rounded-l-full bg-[#1F1F1F]'>
                            <img className='px-3' src={assets.search_icon} alt='search-icon'/>
                        </div>
                        <div className='flex items-center text-white rounded-r-full w-full pr-10 bg-[#1F1F1F]'>
                            <input className='bg-[#1F1F1F] border-none outline-none' placeholder='Bạn muốn phát nội dung gì?'/>
                        </div>
                    </form>
                   
                </div>
            </div>   
        
            {user 
            ? <div className='flex-1 flex items-center justify-end font-bold'>
                <button className='bg-white h-8 justify-center items-center text-black text-[14px] px-4 py-2 rounded-full hidden lg:inline-flex cursor-pointer'>Khám phá Premium</button>
                <button className='bg-black h-8 justify-center items-center text-white py-2 px-4  rounded-full text-[14px] hidden lg:inline-flex cursor-pointer'>
                    <img className='size-4 mr-1' src={assets.download_icon} alt='download'/>
                    Cài đặt Ứng dụng
                </button>
                <img className='size-4 mx-6' src={assets.bell_icon} alt='thongbao'/>
                <p title={user?.name} onClick={() => setOpenProfile((prev) => !prev)} className='bg-purple-500 px-2 mr-2 cursor-pointer text-black w-7 h-7 rounded-full border border-[rgba(255,255,255,0.1)] flex items-center justify-center'>{user?.name[0]}</p>
            </div>
            : <div className='flex-1 flex items-center justify-end gap-4 font-bold'>
                <button onClick={() => navigate('/signup')} className='bg-black h-[48px] justify-center items-center text-white py-2 px-8 rounded-full text-[16px] hidden md:flex cursor-pointer'>Đăng ký</button>
                <button onClick={() => navigate('/login')} className='bg-white h-[48px] justify-center items-center text-black text-[16px] px-8 py-2 rounded-full hidden md:flex cursor-pointer'>Đăng nhập</button>
            </div>}
            { openProfile && <div className="block bg-[#242424] w-[200px] rounded-sm font-semibold absolute top-16 right-2">
                <ul className="p-1 text-white text-[14px]">
                    <li className="hover:bg-[rgba(255,255,255,0.1)] p-3 rounded-sm">
                        <button className=" bg-transparent cursor-default">
                            <a className="">Tài khoản</a>
                        </button>
                    </li>
                    <li onClick={() => navigate(`user/${user._id}`)} className="hover:bg-[rgba(255,255,255,0.1)] rounded-sm p-3 cursor-default">
                        <a>Hồ sơ</a>
                    </li>
                    <li className="hover:bg-[rgba(255,255,255,0.1)] rounded-sm p-3 cursor-default">
                        <a>Cài dặt</a>
                    </li>
                    <li onClick={handleLogout} className="hover:bg-[rgba(255,255,255,0.1)] rounded-sm  border-t-[1px] p-3 border-gray-500">
                        <button className="bg-transparent cursor-default">
                            <a className="">Đăng xuất</a>
                        </button>
                    </li>
                </ul>
            </div>}

    </div>
  )
}

export default Navbar
import { useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <>
        <div className="w-full flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
                <img onClick={() => navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
                <img onClick={() => navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>
            </div>

            <div className='flex items-center gap-4'>
                <button type='button' onClick={() => navigate('/login')} className='bg-white h-[48px] justify-center items-center text-black text-[16px] px-8 py-2 rounded-full hidden md:flex cursor-pointer'>Đăng nhập</button>
                <button className='bg-black h-[48px] justify-center items-center py-2 px-8 rounded-full text-[16px] hidden md:flex cursor-pointer'>Đăng ký</button>
                {/*<p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>*/}
            </div>
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
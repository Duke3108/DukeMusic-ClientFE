import { useNavigate } from "react-router-dom"
import {assets} from '../assets/assets'

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[20%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div onClick={() => navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.home_icon} alt=''/>
                <p className='font-bold'>Trang chủ</p>
            </div>

            <div className='flex items-center gap-3 pl-8 cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt=''/>
                <p className='font-bold'>Tìm kiếm</p>
            </div>
        </div>

        <div className='bg-[#121212] h-[85%] rounded'>
                <div className='p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                        <img className='w-7' src={assets.stack_icon} alt=''/>
                        <p className='font-semibold'>Thư viện</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img className='w-5' src={assets.plus_icon} alt=''/>
                    </div>
                </div>

                <div className='bg-[#242424] rounded text-[14px] mx-2 px-4 py-5 font-bold flex flex-col gap-1'>
                    <h1 className="text-[16px]">Tạo danh sách phát đầu tiên của bạn</h1>
                    <p className='font-normal'>Rất dễ! Chúng tôi sẽ giúp bạn</p>
                    <div>
                        <button className='px-4 py-1 bg-white text-black rounded-full mt-2'>Tạo danh sách phát</button>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default Sidebar
import { useNavigate } from "react-router-dom"

const RequireLogin = () => {

    const navigate = useNavigate()


  return (
    <div className="p-4 block text-[14px] max-w-[336px] text-black bg-blue-400 w-[332px] rounded-lg font-bold absolute top-[15%] left-[20%]">
        <div className="flex flex-col">
            <div className="mb-2 text-[14px]">
                <p>Tạo danh sách phát</p>
            </div>
            <p className=" font-semibold">Đăng nhập để tạo playlist</p>
            <div className="mt-6 flex justify-between items-center">
                <div></div>
                <div className="gap-2">
                    <button  className="bg-transparent rounded-full px-4 py-2">Để sau</button>
                    <button onClick={() => navigate('/login')} className="bg-white rounded-full px-4 py-2">Đăng nhập</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequireLogin
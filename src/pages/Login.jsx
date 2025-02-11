import { useEffect, useState } from "react"
import { assets } from "../assets/assets"
import {useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "../redux/apiRequest"


const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const msg = useSelector((state) => state.auth?.msg)


    const handleLogin = (e) => {
        e.preventDefault()

        
        const user = {
            name: username,
            password: password
        }
        loginUser(user, dispatch, navigate)
    }

    useEffect(() => {
        if(msg){
            setErr(msg)
        }
    },[msg])

  return (
    <div className="h-screen overflow-auto bg-gradient-to-t from-black to-[#242424] flex items-center justify-center ">
        <div className="w-[734px] pb-8 bg-[#121212] flex flex-col font-bold items-center justify-center rounded-lg text-white">
            <div className="h-[76px] flex justify-center items-center pt-8 pb-2">
                <img className="h-[60px] w-[60px]" src={assets.Duke_smLogo} alt="logo"/>
            </div>
            <h1 className="text-[32px] mb-8">Đăng nhập</h1>
            <ul className="flex flex-col">
                <li className=" h-[56px]">
                    <button onClick={() => navigate('/')} className="w-[324px] flex items-center h-12 py-2 px-8 border border-white rounded-full">
                        <img className="w-6 h-6" src={assets.google_icon} alt="gg"/>
                        <span className="my-1 mx-auto">Tiếp tục bằng Google</span>
                    </button>
                </li>
                <li className=" h-[56px]">
                    <button onClick={() => navigate('/')} className="w-[324px] flex items-center justify-center h-12 py-2 px-8 border border-white rounded-full">
                        <img className="w-6 h-6" src={assets.fb_icon} alt="gg"/>
                        <span className="my-1 mx-auto">Tiếp tục bằng Facebook</span>
                    </button>
                </li>
                <li className=" h-[56px]">
                    <button onClick={() => navigate('/')} className="w-[324px] flex items-center justify-center h-12 py-2 px-8 border border-white rounded-full">
                        <img className="w-6 h-6" src={assets.apple_icon} alt="gg"/>
                        <span className="my-1 mx-auto">Tiếp tục bằng Apple</span>
                    </button>
                </li>
                <li className=" h-[56px]">
                    <button onClick={() => navigate('/')} className="w-[324px] flex items-center justify-center h-12 py-2 px-8 border border-white rounded-full">
                        <img className="w-6 h-6" src={assets.phone_icon} alt="gg"/>
                        <span className="my-1 mx-auto">Tiếp tục bằng Số điện thoại</span>
                    </button>
                </li>
            </ul>

            <hr className="text-white flex items-center justify-center h-[1px] w-[534px] my-8 mx-[100px]"/>
            
            <form onSubmit={handleLogin} className=" flex flex-col">

                <div className="flex flex-col pb-2">
                    <div className="flex flex-col pb-4">
                        <div className="inline-block text-[13px] pb-2"><label>Email hoặc tên người dùng</label></div>
                        <input onChange={(e) => setUsername(e.target.value)} className="p-3 w-[324px] h-12 font-normal bg-transparent border border-white rounded-md" type="text" placeholder="Email hoặc tên người dùng"/>
                    </div>
                    <div className="flex flex-col pb-4">
                        <div className="inline-block text-[13px] pb-2"><label>Mật khẩu</label></div>
                        <input onChange={(e) => setPassword(e.target.value)} className="p-3 w-[324px] h-12 font-normal bg-transparent border border-white rounded-md" type="password" placeholder="Mật khẩu"/>
                    </div>
                    {err && <div className="flex my-1">
                        <img className="size-4 mr-1 mt-1 " src={assets.warning_icon} alt="warning_icon"/>
                        <p className="font-normal text-[14px] text-red-400">{err}</p>
                    </div>} 
                </div>
                
                <div className="pb-8 flex items-center justify-center">
                    <button className="font-semibold bg-white w-[324px] h-12 rounded-full text-black ">Đăng nhập</button>
                </div>

                <div className="mb-6 flex items-center justify-center">
                    <a onClick={() => navigate('/password-reset')}><p className="font-semibold underline cursor-pointer">Quên mật khẩu của bạn?</p></a>
                </div>
            </form>

            <div className="pb-4 flex items-center justify-center">
                <h2 className="mb-5 font-semibold">
                    <span className="opacity-70">Bạn chưa có tài khoản?</span>
                    <a onClick={() => navigate('/signup')} className="ml-2 underline cursor-pointer">Đăng ký ngay</a>
                </h2>
            </div>
        </div>
    </div>
  )
}

export default Login
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const Signup = () => {

  const[isValidEmail, setIsValidEmail ] = useState(true)
  const[existingEmail, setExistingEmail ] = useState(false)
  const[email, setEmail ] = useState("")

  const navigate = useNavigate()

  const isValidEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Kiểm tra email hợp lệ
    setIsValidEmail(isValidEmailFormat(emailValue));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(isValidEmail){
      navigate('/signup/step1',{state: {email: email}})
    }
  }

  return (
    <div className="h-screen flex-col bg-[#121212] flex items-center  ">
        <header className="w-full h-[96px] flex justify-center items-center pt-8 pb-6">
            <img className="h-[60px] w-[60px]" src={assets.Duke_smLogo} alt="logo"/>
        </header>

        <div className="w-[324px] h-full bg-[#121212] pb-12 flex flex-col font-bold items-center  text-white">
            <h1 className="text-[48px] leading-tight mb-10 text-center">Đăng ký để bắt đầu nghe</h1>
            
            <form onSubmit={handleSubmit} className=" flex flex-col">
                <div className="flex flex-col">
                    <div className="inline-block text-[13px] pb-2"><label>Địa chỉ email</label></div>
                    <div className="flex flex-col">
                      <input onChange={handleEmailChange} className={`${!isValidEmail || existingEmail ? 'border border-red-500' :'border border-white'} p-3 w-[324px] h-12 font-normal bg-transparent  rounded-md`} type="text" placeholder="Example@gmail.com"/>
                      {!isValidEmail && <div className="flex mt-2">
                        <img className="size-4 mr-1 mt-1 " src={assets.warning_icon} alt="warning_icon"/>
                        <p className="font-normal text-[14px] text-red-400">Email này không hợp lệ.Hãy đảm bảo rằng email được nhập dưới dạng example@gmail.com</p>
                      </div>}
                      {existingEmail && <div className="font-semibold rounded-md text-[14px] flex  justify-center mt-4 py-3 pr-4 pl-6 bg-[#FFA42B] text-black">
                        <img className="size-6 mr-3 " src={assets.blackwarning} alt="warning_icon"/>
                        <p>
                          Địa chỉ này đã được liên kết với một tài khoản hiện có. Để tiếp tục, hãy 
                          <a className="underline"> Đăng nhập</a>
                        </p>
                      </div>}
                      
                      
                      <div className="mt-2">
                        <a onClick={() => navigate('/')} className="underline font-normal cursor-pointer text-[14px]">Dùng số điện thoại</a>
                      </div>
                    </div>
                </div>

                <button className="mt-5 font-bold bg-white w-[324px] h-12 rounded-full text-black ">Tiếp tục</button>
            </form>

            <div className="w-[324px] flex flex-col items-center justify-center mt-8">
              <hr className="text-white opacity-70  flex items-center justify-center h-[1px] w-[324px] my-1"/>
              <ul className="flex flex-col mt-8">
                  <li className=" h-[56px]">
                      <button onClick={() => navigate('/')} className="w-[324px] flex items-center h-12 py-2 px-8 border border-white rounded-full">
                          <img className="w-6 h-6" src={assets.google_icon} alt="gg"/>
                          <span className="my-1 mx-auto">Đăng ký bằng Google</span>
                      </button>
                  </li>
                  <li className=" h-[56px]">
                      <button onClick={() => navigate('/')} className="w-[324px] flex items-center justify-center h-12 py-2 px-8 border border-white rounded-full">
                          <img className="w-6 h-6" src={assets.fb_icon} alt="gg"/>
                          <span className="my-1 mx-auto">Đăng ký bằng Facebook</span>
                      </button>
                  </li>
              </ul>
              <hr className="text-white opacity-20 flex items-center justify-center h-[1px] w-[324px] my-8"/>
              <h2 className="font-semibold">
                    <span className="opacity-70">Bạn đã có tài khoản?</span>
                    <a onClick={() => navigate('/')} className="ml-2 underline cursor-pointer">Đăng nhập tại đây</a>
              </h2>
            </div>
        </div>

        <footer className="w-full  p-4 flex items-center justify-center">
                <p className="text-white text-center text-[12px] font-normal opacity-70">This site is protected by reCAPTCHA and the Google 
                  <br />
                <a className="underline">Privacy Policy</a>
                and
                <a className="underline">Terms of Service</a>
                apply
                </p>
        </footer>
    </div>
  )
}

export default Signup
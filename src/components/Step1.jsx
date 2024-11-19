/* eslint-disable no-unused-vars */
import { useState } from "react"
import { assets } from "../assets/assets"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Step1 = () => {

  const[isValidPassword, setIsValidPassword ] = useState(true)
  const[password, setPassword ] = useState("")
  const[check1, setCheck1 ] = useState(false)
  const[check2, setCheck2 ] = useState(false)
  const[check3, setCheck3 ] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const {email} = location.state || {} 

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    // Kiểm tra từng tiêu chí
    setCheck1(/[a-zA-Z]/.test(input)); // Ít nhất 1 chữ cái
    setCheck2(/[0-9#?!&]/.test(input)); // Ít nhất 1 chữ số hoặc ký tự đặc biệt
    setCheck3(input.length >= 10); // Độ dài ít nhất 10 ký tự

    // Mật khẩu hợp lệ khi cả 3 tiêu chí đều đúng
    setIsValidPassword(
      /[a-zA-Z]/.test(input) && /[0-9#?!&]/.test(input) && input.length >= 10
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidPassword) {
      navigate("/signup/step2", { state: { email, password } });
    }
  };

  return (
  <div className="h-screen flex-col bg-[#121212] flex items-center justify-between ">
    <header className=" w-full h-[96px] flex flex-col justify-center items-center pt-8 pb-6">
        <img className="h-[60px] w-[60px]" src={assets.Duke_smLogo} alt="logo"/>
    </header>

    <section className="w-full flex flex-grow justify-center">
        <div className="px-8">
          <form onSubmit={handleSubmit} className="h-full block">
            <div className="w-[324px]">
              <div className="mx-[-56px]">
                <header className="w-full block">

                  <div className='h-[2px] w-[60vw] max-w-[436px] bg-[#7C7C7C] rounded-full cursor-pointer'>
                      <hr className='h-[2px] border-none w-[50%] bg-[#1ED760] rounded-full'/>
                  </div>

                  <div className="flex">
                    <button onClick={() => navigate('/signup')} className="p-4 inline-flex items-center justify-center relative cursor-pointer text-center">
                      <img className="h-6 w-6" src={assets.arrow_left} alt=""/>
                    </button>
                    <div className="me-[56px] p-4 flex flex-col text-white">
                      <span className="mb-1 font-normal opacity-70">Bước 1/2</span>
                      <span className="font-bold">Tạo mật khẩu</span>
                    </div>
                  </div>
                </header>
              </div>
            
              <div className="flex flex-col mt-4 ">
                <section className="text-white">
                <div className="inline-block text-[14px] font-bold pb-2"><label>Mật khẩu</label></div>
                    <div className="flex flex-col items-center justify-center">
                      <input onChange={handlePasswordChange} className="p-3 w-[324px] h-12 font-normal bg-transparent border border-white rounded-md" type="password" />

                      <div className="flex flex-col w-[324px] items-start mt-4">
                        <p className="font-bold text-[14px]">Mật khẩu của bạn phải có ít nhất</p>
                        <ul className="text-white">
                          <li className="mt-2 flex items-center">
                            <img className="h-3 w-3" src={`${!check1 ? assets.check_icon : assets.greencheck}`} alt=""/>
                            <p className="ml-1">1 chữ cái</p>
                          </li>
                          <li className="mt-2 flex items-center">
                            <img className="h-3 w-3" src={`${!check2 ? assets.check_icon : assets.greencheck}`}  alt=""/>
                            <p className="ml-1">1 chữ số hoặc ký tự đặc biệt (ví dụ:#?!&)</p>
                          </li>
                          <li className="mt-2 flex items-center">
                            <img className="h-3 w-3" src={`${!check3 ? assets.check_icon : assets.greencheck}`}  alt=""/>
                            <p className="ml-1">10 ký tự</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                </section>   
                </div>
            </div>

            <div className="mt-8 flex items-center justify-center">
                <button disabled={!isValidPassword} className={`${!isValidPassword && 'opacity-50' } bg-white font-bold w-[324px] h-12 rounded-full text-black`}>Tiếp theo</button>
            </div>
          </form>
        </div>
    </section>

    <footer className="w-full p-4 flex items-center justify-center">
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

export default Step1
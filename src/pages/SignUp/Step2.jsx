/* eslint-disable no-unused-vars */
import { useState } from "react";
import { assets } from "../../assets/assets";
import { useLocation } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../../redux/apiRequest"

const Step2 = () => {

  const [name, setName] = useState("1");
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [gender, setGender] = useState("");
  const location = useLocation()
  const {email, password} = location.state || {} 
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault();

    const birthDate = new Date(year, month - 1, day)

    const newUser = {
        email: email,
        password: password,
        name: name,
        gender: gender,
        birthday: birthDate
    }
    registerUser(newUser,dispatch,navigate)

  };

  return (
    <div className="h-screen flex-col bg-[#121212] flex items-center justify-between ">
      <header className=" w-full h-[96px] flex flex-col justify-center items-center pt-8 pb-6">
        <img
          className="h-[60px] w-[60px]"
          src={assets.Duke_smLogo}
          alt="logo"
        />
      </header>

      <section className="w-full flex flex-grow justify-center">
        <div className="px-8 ">
          <form onSubmit={handleSubmit} className="h-full block">
            <div className="w-[324px]">
                <div className="mx-[-56px]">
                    <header className="w-full block">
                        <div className="h-[2px] w-[60vw] max-w-[436px] bg-[#7C7C7C] rounded-full cursor-pointer">
                        <hr className="h-[2px] border-none w-full bg-[#1ED760] rounded-full" />
                        </div>

                        <div className="flex">
                        <button
                            onClick={() => navigate('/signup/step1')}
                            className="p-4 inline-flex items-center justify-center relative cursor-pointer text-center"
                        >
                            <img className="h-6 w-6" src={assets.arrow_left} alt="" />
                        </button>
                        <div className="me-[56px] p-4 flex flex-col text-white">
                            <span className="mb-1 font-normal opacity-70">Bước 2/2</span>
                            <span className="font-bold">
                            Giới thiệu thông tin về bản thân bạn
                            </span>
                        </div>
                        </div>
                    </header>
                </div>

                <div className="flex flex-col mt-4 text-white">
                    <div className="flex flex-col">
                        <div className="inline-block text-[14px] font-bold">
                            <label>Tên</label>
                        </div>
                        <p className="inline-block text-[14px] opacity-70 font-normal pb-2">
                            Tên này sẽ xuất hiện trên hồ sơ của bạn
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <input
                            onClick={() => setName("")}
                            onChange={(e) => setName(e.target.value)}
                            className={`${!name &&'border border-red-500'} border border-white p-3 w-[324px] h-12 font-normal bg-transparent  rounded-md`}
                            type="test"
                            />
                            {!name && <div className="flex mt-2 mr-[125px]">
                            <img className="h-[16px] w-[16px] mr-1 mt-1" src={assets.warning_icon} alt="warning_icon"/>
                            <p className="font-normal text-[14px] text-red-400">Nhập tên cho hồ sơ của bạn</p>
                        </div>}
                        </div>
                    </div>

                    <div className=" mt-4">
                        <div className="inline-block text-[14px] font-bold">
                            <label>Ngày sinh</label>
                        </div>
                        <p className="inline-block text-[14px] opacity-70 font-normal pb-2">
                            Ngày sinh này sẽ xuất hiện trên hồ sơ của bạn
                        </p>
                        <div className="pt-2">
                            <div className=" flex gap-2">
                                <input
                                onChange={(e) => setDay(e.target.value)}
                                className="p-3 h-12 w-[30%] font-normal bg-transparent border border-white rounded-md"
                                placeholder="dd"
                                type="test"
                                />

                                <div className="flex w-auto items-center relative ">
                                    <select onChange={(e) => setMonth(e.target.value)} className="font-normal bg-transparent border border-white rounded-md p-3 pr-12" aria-invalid="false">
                                        <option className="bg-black text-white" disabled selected value>Tháng</option>
                                        {Array.from({ length: 12 }, (_, i) => (
                                            <option className="bg-black text-white" key={i + 1} value={i+1}>
                                                Tháng {i + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <input
                                onChange={(e) => setYear(e.target.value)}
                                className="p-3 h-12 w-[50%] font-normal bg-transparent border border-white rounded-md"
                                placeholder="yyyy"
                                type="test"
                                />
                            </div>
                        </div>
                    </div>
                   
                   <div className="mt-4">
                        <div className="inline-block text-[14px] font-bold">
                            <label>Giới tính</label>
                        </div>
                        <p className="inline-block text-[14px] opacity-70 font-normal pb-2">
                            Giới tính của bạn giúp chúng tôi cung cấp nội dung đề xuất và
                            quảng cáo phù hợp với bạn
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-[324px] font-normal bg-transparent border border-white rounded-md p-3 pr-12">
                                <option className="bg-black text-white" value="" disabled>-- Chọn giới tính --</option>
                                <option className="bg-black text-white" value="male">Nam</option>
                                <option className="bg-black text-white" value="female">Nữ</option>
                                <option className="bg-black text-white" value="other">Giới tính khác</option>     
                            </select>
                            
                        </div>
                   </div>

                </div>
            </div>
           
            <div className="mt-8 flex items-center justify-center">
              <button className="font-bold bg-white w-[324px] h-12 rounded-full text-black ">
                Tiếp theo
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="w-full p-4 flex items-center justify-center">
        <p className="text-white text-center text-[12px] font-normal opacity-70">
          This site is protected by reCAPTCHA and the Google
          <br />
          <a className="underline">Privacy Policy</a>
          and
          <a className="underline">Terms of Service</a>
          apply
        </p>
      </footer>
    </div>
  );
};

export default Step2;

import toggle from '@/public/toggle.svg'
import Day from '@/public/Day.svg'

import Image from 'next/image'


const MainNavBar = ()=>{
    return(
        <div className="absolute top-[60px] left-0 right-0 flex  justify-between items-center bg-[rgba(255, 255, 255, 0.5)] z-10">
            <span className="text-[#FFFFFF] ml-10 text-[25px]">LOGO</span>
            <div className='space-x-2 flex items-center mr-10'>
                <button className="rounded-full pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#FFF] font-raleway text-[15px] border-2
                 border-[#529D4E]
                 hover:bg-[#529D4E] transition duration-300
                 ">Login</button>
                <button className="rounded-full bg-[#529D4E]  pt-[8px] pr-[20px] pb-[8px] pl-[20px] text-[#FFF] font-raleway text-[15px] border-2
                 border-[#529D4E]
                 hover:bg-[#529D4E] transition duration-300
                 ">SignUp</button>
                 <button><Image src={toggle} alt="toggle-icon"/></button>
               

            </div>
               

        </div>
    )
}

export default MainNavBar
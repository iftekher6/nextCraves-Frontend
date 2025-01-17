import Image from "next/image";
import facebookIcon from '@/public/fb.svg'
import linkedin from '@/public/linkedin.svg'
import twitter from '@/public/twitter.svg'
import whatsapp from '@/public/whatsapp.svg'
import mobile from '@/public/mobile.svg'


const TopBar = ()=>{
    return(
        <div className="bg-[#FCB82B] pl-8 pr-10 p-2 flex justify-between">
        <div className="flex">
            <ul className="flex space-x-3 justify-center items-center">
                <li><Image src={facebookIcon} alt="facebook-icon"/></li>
                <li><Image src={linkedin} alt="linkedin-icon"/></li>
                <li><Image src={twitter} alt="twitter-icon"/></li>
                <li><Image src={whatsapp} alt="whatsapp-icon"/></li>
                
            </ul>
        </div>
        <div className="flex items-center space-x-2">
        <Image src={mobile} alt="mobile-icon"/>
        <span className="text-[#FFFFFF] font-[700] font-raleway ">Download App Now!</span>
        </div>
         </div>
    )
}

export default TopBar;
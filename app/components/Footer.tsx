import footerFood from '@/public/footerFood.svg';
import store from '@/public/store.svg';
import telephone from '@/public/telephone.svg';
import gmail from '@/public/gmail.svg';
import map from '@/public/map.svg';
import Image from 'next/image';
import facebookIcon from '@/public/facebook-footer.svg'
import linkedin from '@/public/linkedin-footer.svg'
import twitter from '@/public/twitter-footer.svg'
import whatsapp from '@/public/whatsapp-footer.svg'



const Footer =()=>{
  return(
    
    <div className='relative'>
 {/* BGSVG */}
     <div className="overflow-hidden mt-[380px] ">
     <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="562" viewBox="0 0 1440 562" fill="none">
<path d="M0 124.986C0 124.986 433.33 0 720 0C1006.67 0 1440 124.986 1440 124.986V562H0V124.986Z" fill="#529D4E"/>
</svg>
<div className='absolute bottom-[120px] left-[220px] flex gap-[110px]' >
  <div className='flex flex-col gap-2'>
 <h1 className='text-[36px] font-raleway text-[#FFFFFF] font-[700]'>LOGO</h1>
 <div className='space-y-1'>
  <div className='flex gap-2'>
  <Image
         src={telephone}
         alt="telephone-Image"
        //  width={650}
         priority 
         />
    0123456789</div>
    <div className='flex gap-2'>
  <Image
         src={gmail}
         alt="gmail-Image"
        //  width={650}
         priority 
         />
    Lorem@gmail.com</div>
    <div className='flex gap-2'>
  <Image
         src={map}
         alt="map-Image"
        //  width={650}
         priority 
         />
    1230, Lorem Ipsum</div>
 </div>
  </div>
  <div className='flex flex-col gap-5'>
 <h2 className='font-raleway font-[600]  border-b-2 border-dotted text-[18px]'>Download App</h2>
 
 <div className='flex flex-col gap-3 cursor-pointer  '>
 <Image
         src={store}
         alt="store-Image"
         width={230}
         priority 
         />
         <div className='flex gap-2'>
         <Image
         src={facebookIcon}
         alt="facebook-Image"
        //  width={650}
         priority 
         />
          <Image
         src={linkedin}
         alt="linkedin-Image"
        //  width={650}
         priority 
         />
          <Image
         src={twitter}
         alt="twitter-Image"
        //  width={650}
         priority 
         />
          <Image
         src={whatsapp}
         alt="whatsapp-Image"
        //  width={650}
         priority 
         />

         </div>
 </div>

         
  </div>
  <div className='flex flex-col gap-3'>
 <h2 className='font-raleway font-[600]  border-b-2 border-dotted text-[18px]'>Menus</h2>
<ul className='flex flex-col  font-raleway font-[500] text-[15px]'>
  <li>Breakfast</li>
  <li>Lunch</li>
  <li>Dinner</li>
</ul>
  </div>
  <div className='flex flex-col gap-3'>
 <h2 className='font-raleway font-[600]  border-b-2 border-dotted text-[18px]'>Useful Links</h2>
<ul className='flex flex-col  font-raleway font-[500] text-[15px]'>
  <li>About Us</li>
  <li>Blogs</li>
  <li>FAQs</li>
</ul>
  </div>

</div>
     </div>
     {/* End of BGSVG */}
     <div className="bg-[#FFF] p-[55px] w-[980px] h-[300px] rounded-[16px] flex flex-col gap-8 absolute top-[-80px] left-[200px]  shadow-custom">
      <div>
        <span className="font-raleway text-[18px] font-[400] text-[#1E1E1E] tracking-[.25em]">Food</span>
        <h1 className="text-[#1E1E1E] font-[600] font-raleway text-[35px]">Healthy Meals</h1>
        <p className="text-[#1E1E1E] font-raleway font-[400] text-[18px]">Delivered to Your Door Next</p>
      </div>
      <div>
        <button className="bg-[#529D4E] px-10 py-3 rounded-[8px]">Order Now</button>
      </div>

     </div>
     <div className='absolute top-[-120px] left-[540px]'>
     <Image
         src={footerFood}
         alt="footerFood-Image"
         width={650}
         priority 
         />
     </div>
   
   {/* Last section of footer */}
      <div className="bg-[#3D8639] p-2 px-[80px] w-full h-200px flex justify-between">
       <p className="text-sm text-[#FFF] font-raleway font-[400]">&copy; 2025 My Website</p>
       <p className="text-sm text-[#FFF] font-raleway font-400">Terms and Conditions |  Privacy Policy</p>
      </div>
      {/* end of Last Section of footer */}
    </div>
    
  )
}

export default Footer
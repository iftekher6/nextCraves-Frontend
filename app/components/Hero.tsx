import HeroImage from '@/public/Hero-section.png';
import Image from 'next/image';
import Search from './Search';

const Hero = ()=>{
    return(
        <section className={`relative h-[60vh] w-full`}>
      <Image
        src={HeroImage}
        alt="Hero-Image"
        fill={true}
        placeholder="blur" 
        objectFit="cover"
        priority 
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)"
        
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex-col justify-center text-center font-raleway items-center w-[800px] space-y-5 '>
        <h1 className='text-[43px] font-[700]'>Fresh, Healthy Meals Delivered <br /> to Your Door</h1>
       
        <p className='font-[500] text-[20px]'>Fresh, Healthy Meals Delivered to Your Door Fresh, Healthy Meal</p>
      </div>
      <Search/>

        </section>
    )
}


export default Hero;
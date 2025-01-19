import Image from "next/image";
import deliveryBike from '@/public/deliveryBike.svg';
import pickupBag from '@/public/pickupBag.svg';
import searchIcon from '@/public/searchIcon.svg';
import mapIcon from '@/public/mapIcon.svg';

const Search = ()=>{
    return(
   
   <div className="flex justify-center items-center h-screen bg-black" >
{/* START */}
    <div  className="flex flex-col w-[600px] rounded-md bg-[#fff]  h-[130px] shadow-lg shadow-[#529D4E (25%)]">
     {/* top container */}
     <div className="h-[50%] border-b border-[#EEF5ED] p-2 w-full flex justify-start items-center">

      <div className="flex justify-start items-center  space-x-4 bg-[#FFF] p-1   rounded-md ">
          <div className="flex justify-center px-2 py-2 rounded-[8px] bg-[#EEF5ED] items-center space-x-2">
          <Image
        src={deliveryBike}
        alt="DeliveryBike-Image"
        priority 
        />
          <button className="font-raleway font-[700] text-[#529D4E] text-sm"> Delivery </button>
          </div>
   
        <div className="flex justify-center items-center space-x-2">
        <Image
        src={pickupBag}
        alt="PickupBag-Image"
        priority 
        />
          <button className="text-[#757575] font-raleway font-[700] text-sm ">Pickup</button>
   
        
        </div>
      </div>
     </div>
      {/* end of Top Container */}
      {/* Start of Bottom Container */}
      <div className="h-[50%] w-full space-x-2 p-2 flex justify-start items-center">

      <div className="flex bg-[#FFF] space-x-3 w-[78%]  rounded-md">
       
       <div className="flex space-x-2 rounded-[5px] pl-4  w-full bg-[#EEF5ED] text-[#9E9E9E] font-raleway">
       <Image
        src={mapIcon}
        alt="map-Image"
        width={15}
        priority 
        />
        <input type="search" 
        placeholder="Enter Your Address"
        className="w-full p-2 bg-transparent outline-none" />
       </div>
      
       
      </div>
      <div className="bg-[#529D4E;] flex space-x-1 rounded-[8px]  px-4 py-[10.5px]  justify-center items-center">
       <Image
        src={searchIcon}
       
        alt="Search-Image"
        priority 
        />
        <button className="font-raleway font-[700]  text-sm" >Find Food</button>
       </div>
      {/* End of bottom Container */}
      </div>
    </div>
   
    </div>
    )
}


export default Search;
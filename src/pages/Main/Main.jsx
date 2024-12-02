import React from "react";
import Ads from "../../assets/Main/Ads.jpg";

const Main = () => {
  return (
    <div className="w-full h-auto bg-black">
      <div className="w-full h-[50vh]  flex items-end justify-center">


        <h1 className="text-9xl font-bold">ENERGY BEYOND LIMITS</h1>
        

         </div>
      <div className="w-full max-w-[1300px] h-[70vh]  mx-auto">
        <img src={Ads} alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Main;

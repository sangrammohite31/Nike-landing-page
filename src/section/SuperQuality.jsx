import React from 'react'
import { arrowRight } from "../assets/icons";
import Button from '../Components/Button';
import { shoe4, shoe8 } from '../assets/images';
const   SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
     
        
       <h2 className=" text-3xl mt-10  max-sm:leading-[82] font-bold" >
          <span  className="xl:bg-white x1:whitespace-nowrap relative z-10  pr-10">We Provide You</span><span className=" text-coral-red">Super<br/> Quality</span> Shoes
        </h2>
        <p className="
         text-slate-grey p-[13px] font-palanquin">Upgrade your sportswear collection with Nike at Myntra's BFF Sale.<br/> Discover amazing offers, including a minimum 50% off. Shop now!</p>
         <div className='mt-11'>
         <Button  label = "Shop now" iconURL = {arrowRight} ></Button>
         </div>
         </div>
         <div className='flex-1 flex justify-center items-center'>
         <img src={shoe8} alt='product detail'
          width={570}
          height={522}
          className='object-contain'/>
         </div>
      

    </section >
  )
}

export default SuperQuality
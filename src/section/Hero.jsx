import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";
import { bigShoe1, bigShoe2,bigShoe3 } from "../assets/images";
import { shoes,statistics } from "../contants";
import Shoecard from "../Components/shoecard";
import { useState } from "react";
const Hero = () => {
  let [bigShoe,setBigShoeImg]=useState(bigShoe1);
  return (
    <section id="
    home" className="flex x1:flex-row flex-col justify-center min-h-screen gap-10 max-container grid-cols-2 ">
      <div className="relative x1:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 float-left">
        <p className=" text-coral-red text-xl ">Our Summer Collection</p>
        <h1 className=" text-8xl mt-10 max-sm:text-[72px] max-sm:leading-[82] font-bold" >
          <span  className="xl:bg-white x1:whitespace-nowrap relative z-10  pr-10">The New Arrival</span><br/><span className=" text-coral-red">Nike</span> Shoes
        </h1>
        <p className="text-slate-grey p-[13px] font-palanquin">Discover stylish Nike arrivals,quality comfrot <br/>and innvotion for your active life</p>
        <Button  label = "Shop now" iconURL = {arrowRight}></Button>
        <div className="justify-starts items-start flex w-full gap-16  mt-20">
          {statistics.map((stat,index)=>(
<div key={index}> 
  <p className="text-4xl font-bold">{stat.value}</p>
  <p className=" pl-[20px]">{stat.label}</p>
</div>
          ))}

        </div>
        
         </div>
<div className=" relative flex-1  flex justify-center xl:min-h-screen bg-cover  bg-primary bg-hero">
  <img className="object-contain relative z-10 " alt="shoecollection"  src={bigShoe}/>
  <div className='flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe, index) => (
            <div key={index}>
              <Shoecard
                
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoe}
              />
              
            </div>
          ))}
        </div>
</div>
    </section>
  )
}

export default Hero;
import React from 'react'
import Buttons from '../../Buttons'
import heroimg from "../../../assets/images/hero-img.png"

export default function Hero() {
  return (
    <div>
      <section>
        <div className='mx-auto w-[1240px] px-[20px] flex justify-between items-center'>
            <div className='w-[37%] space-y-[32px]'>
                <h2 className='font-Rubik font-medium text-[64px] leading-[64px]'>Good Food Us Good Mood</h2>
                <p className='font-Rubik font-normal text-[18px] leading-[29px] text-[#757575]'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                <div className='flex gap-[16px]'>
                    <Buttons extrastyle={"w-[147px] rounded-[100px] py-[10px] bg-[#8BAC3E] text-white text-[14px]"}>Daftar sakarang</Buttons>
                    <Buttons extrastyle={"font-rubik font-medium text-[14px] text-[#333] "}>Masuk</Buttons>
                </div>
            </div>
            <div className='w-[40%]'>
                <img src={heroimg}/>
            </div>
        </div>
      </section>
    </div>
  )
}

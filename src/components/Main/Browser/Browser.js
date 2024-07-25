import React from 'react'
import Browserlist from './Browserlist'
import Buttons from '../../Buttons'
import left from "../../../assets/images/prev.svg"
import right from "../../../assets/images/next.svg"

export default function Browser() {
  return (
    <section className='py-[50px]'>
        <div className='mx-auto w-[1240px]'>
                <h2 className='font-Rubik font-medium text-[38px] leading-[50px] text-[#333]'>Browser Our Category</h2>
                <span className='font-Rubik font-medium text-[38px] leading-[50px] text-[#8BAC3E]'>Receipt</span>
                <Browserlist/>
                <div className='flex justify-end gap-[13px]'>
                    <Buttons extrastyle={"bg-[#8BAC3E] text-white flex items-center py-[8px] w-[113px] justify-center rounded-[30px] gap-[3px] text-[16px]"}>
                        <img src={left}/>
                        PREV
                    </Buttons>
                    <Buttons extrastyle={"bg-[#8BAC3E] text-white flex items-center py-[8px] w-[113px] justify-center rounded-[30px] gap-[3px] text-[16px]"}>
                        NEXT
                        <img src={right}/>
                    </Buttons>
                </div>
        </div>
    </section>
  )
}

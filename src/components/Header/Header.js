import React from 'react'

import logo from "../../assets/images/logo.svg"
import HeaderItem from './HeaderItem'
import Buttons from '../Buttons'

export default function Header() {
  return (
    <header>
        <div className='mx-auto w-[1240px] py-[20px]'>
          <div className='w-full flex justify-between items-center  pt-[19px] pb-[27px]'>
            <img src={logo} width={207} height={50}/>
            <ul className='flex gap-8'>
              <HeaderItem title={"Home"}/>
              <HeaderItem title={"About"}/>
              <HeaderItem title={"Promotions "}/>
              <HeaderItem title={"Blogs"}/>
              <HeaderItem title={"Contact Us"}/>
            </ul>
            <div className='flex gap-[24px]'>
              <Buttons extrastyle={"font-rubik font-medium text-[14px] text-[#333] "}>Masuk</Buttons>
              <Buttons extrastyle={"w-[147px] rounded-[100px] py-[10px] text-[14px] bg-[#8BAC3E] text-white"}>Daftar Sakerang</Buttons>
            </div>
          </div>
        </div>
    </header>
  )
}

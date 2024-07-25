import React from 'react'
import cupcake from "../../../assets/images/Image.png"
import pizza from "../../../assets/images/pizza 1.png"
import kebab from "../../../assets/images/kebab 1.png"
import salmon from "../../../assets/images/salmon 1.png"
import doughnut from "../../../assets/images/doughnut 1.png"

export default function Browserlist() {

    const products = [
        {
            id:1,
            title:"Cupcake",
            img:cupcake,
            count:"22 items",
            bg:"#F0FEEB"
        },
        {
            id:2,
            title:"Pizza",
            img:pizza,
            count:"25 items",
            bg:"#E4F2F4"
        },
        {
            id:1,
            title:"Kebab",
            img:kebab,
            count:"12 items",
            bg:"#EAEEFA"
        },
        {
            id:1,
            title:"Salmon",
            img:salmon,
            count:"22 items",
            bg:"#F9EEF3"
        },
        {
            id:1,
            title:"Doughnut",
            img:doughnut,
            count:"22 items",
            bg:"#F3F7D9"
        }
    ]

  return (
    <ul className="flex justify-between h-[215px] p-4 mt-[33px]">
            {products.map((item, index) => (
              <li style={{backgroundColor:item.bg}} className={`w-[230px] py-[30px] bg-[#F0FEEB] text-center rounded-[8px] h-[80%] hover:h-[100%] flex items-center justify-center flex-col`} key={index}>
                <img className="mx-auto" src={item.img} alt="Cupcake" width={47} height={52}/>
                <h2 className="mt-[21px] mb-[4px] font-medium text-[16px] leading-[22px]">
                  {item.title}
                </h2>
                <p className="font-normal text-[14px] leading-[16px]">
                  {item.count}
                </p>
              </li>
            ))}
          </ul>
  )
}

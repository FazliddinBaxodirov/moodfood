import React from 'react'

export default function HeaderItem({title}) {
  return (
    <li>
        <a className='font-rubik font-medium text-[14px] leading-[22px] text-[#757575]'>{title}</a>
    </li>
  )
}

import React from 'react'

export default function Buttons({children, extrastyle}) {
  return (
    <button className={extrastyle}>
        {children}
    </button>
  )
}

import React from 'react'

export default function ButtonSecondary({className='',children}) {
  return (
    <button className={`${className}`}>
        {children}
    </button>
  )
}

import React from 'react'

export default function ButtonPrimary({className='',children,icons}) {
  return (
    <button className={`${className}`}>
        {children}{icons}
    </button>
  )
}

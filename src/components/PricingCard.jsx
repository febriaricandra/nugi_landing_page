import React from 'react'
import ButtonPrimary from './ButtonPrimary'

export default function PricingCard({price,type,desc,list}) {
  return (
    <div className='flex flex-col justify-center items-center mx-4 p-4 border rounded '>
        <h1 className='text-black font-bold text-5xl py-4'>{price}<span className='text-grey font-medium text-2xl'>/year</span></h1>
        <h1 className='text-primary font-bold text-3xl py-2'>{type}</h1>
        <p className='text-grey py-4 w-[80%] text-center'>{desc}</p>
        <div className="list flex flex-col justify-center my-6">
            {list}
        </div>
        <ButtonPrimary className={"bg-primary hover:bg-sky-400 text-white px-8 py-4 rounded flex items-center"}  children='Buy Now' />
    </div>
  )
}

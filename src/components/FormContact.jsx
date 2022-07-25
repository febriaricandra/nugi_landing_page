import React from 'react'
import ButtonPrimary from './ButtonPrimary'

export default function FormContact({title, desc}) {
  return (
    <div className='block ml-4'>
        <h1 className='font-bold text-4xl text-black'>{title}</h1>
        <p className='text-grey font-medium mb-4'>{desc}</p>
        <form className='flex flex-col'>
            <label className='my-4 text-grey text-medium'>Your mail</label>
            <input className='border border-grey text-grey text-sm rounded focus:ring-black focus:border-black p-2' type="text" value="enter your email" />
            <label className='my-4 text-grey text-medium'>Tell us what you need help with:</label>
            <input className='border border-grey text-grey text-sm rounded focus:ring-black focus:border-black p-2 mb-4' type="text" value="enter a topic" />
            <ButtonPrimary children="Try For Free" className={"bg-primary text-white px-8 py-4 rounded hover:bg-sky-700 text-center"} />
        </form>
    </div>
  )
}

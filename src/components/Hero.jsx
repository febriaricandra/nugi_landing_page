import React from 'react'
import ButtonPrimary from './ButtonPrimary'
import {BsArrowDownRight} from "react-icons/bs"

function Hero({title, desc}) {
  return (
    <section className='flex mx-auto mb-12 justify-between max-w-[1200px]'>
        <div className="left my-6 w-1/2">
            <h1 className='font-bold text-[72px]'>{title}</h1>
            <p className='text-grey w-[70%] my-8'>{desc}</p>
            <div className="btn-group flex items-center">
                <ButtonPrimary children="Try For Free" className={"bg-primary text-white px-8 py-4 rounded flex items-center hover:bg-sky-700"} icons={<BsArrowDownRight/>} />
                <span className='text-grey ml-6'>* No credit card required</span>
            </div>
        </div>
        <div className="right">
            <img src="/assets/Picture.png" alt="hero_image" width='530px' />
        </div>
    </section>
  )
}

export default Hero
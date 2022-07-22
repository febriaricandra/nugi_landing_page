import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'
import PricingCard from './PricingCard';

const List = ({desc}) =>{
    return (
        <div className='flex items-center'>
            <FaCheckCircle color='green' />
            <h2 className='font-medium px-2'>{desc}</h2>
        </div>
    );
}


export default function Pricing({title, desc}) {
  return (
    <section className='my-20'>
        <div className="header my-20">
            <h1 className='text-center font-bold text-black text-4xl'>{title}</h1>
            <p className='text-center mt-2 text-grey'>{desc}</p>
        </div>
        <div className="flex flex-row justify-center ">
            <PricingCard price='27$' type='standart' desc='Essential antivirus protection for Windows PCs' list={<List desc='only windows pc'/>} />
            <PricingCard price='40$' type='standart' desc='Advanced antivirus & privacy protection for PC, Mac & Mobile' list={<List desc='only windows pc'/>} />
            <PricingCard price='60$' type='standart' desc='Access to all our security apps for PC, Mac, iOS & Android' list={<List desc='only windows pc'/>} />
        </div>
    </section>

  )
}

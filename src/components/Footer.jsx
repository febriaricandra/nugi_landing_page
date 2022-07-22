import React from 'react'
import { useState } from 'react';

export default function Footer() {
    const [value, setValue] = useState('Global');
    const handleChange = (event) =>{
        setValue(event.target.value);
    };

    const Dropdowns = () =>{
        return(
            <div className=''>
                <label className='text-grey'>
                    Region :
                    <select value={value} onChange={handleChange}>
                        <option value="Global">Global</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Mars">Mars</option>
                    </select>
                </label>
            </div>
        );
    };

    return (
       <section>
         <div className='flex justify-between max-w-[1200px] mx-auto my-0'>
            <div className="flex">
                <div className="company mx-2 my-4">
                    <h1 className='text-black font-bold text-2xl mb-4'>Company</h1>
                    <ul>
                        <li  className='text-grey'>About Us</li>
                        <li className='text-grey'>Partnerts</li>
                        <li className='text-grey'>Blog</li>
                        <li className='text-grey'>Careers</li>
                    </ul>
                </div>
                <div className="contact mx-2 my-4">
                    <h1 className='text-black font-bold text-2xl mb-4'>Contact</h1>
                    <ul>
                        <li className='text-grey'>Terms of use</li>
                        <li className='text-grey'>Privacy Policy</li>
                        <li className='text-grey'>F.A.Q</li>
                    </ul>
                </div>
            </div>
            <div className="global">
                <Dropdowns />
            </div>
        </div>
        <hr />
        
       </section>
    )
}
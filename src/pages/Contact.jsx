import React from 'react'
import FormContact from '../components/FormContact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className='flex justify-center my-0 mx-auto'>
        <img className='w-[50%] h-[420px] object-cover p-8' src='/assets/Rectangle 14.png' alt='contact' />
        <FormContact title="Contact Us" desc="Questions, bug reports, feedback." />
      </div>
      <Footer />
    </>
  )
}

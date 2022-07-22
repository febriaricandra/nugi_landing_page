import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function PricingPage() {
  return (
    <div>
      <Navbar />
      <Hero title="Online Security For You" desc="With our advanced technology, you can enjoy a safe and private Internet experience without compromising the performance of your computer and mobile devices." />
      <Pricing title="Get complete peace of mind online" desc="Shop, stream, bank and browse the web securely with industry-leading protection for all your devices."/>
      <Footer />
    </div>
  )
}


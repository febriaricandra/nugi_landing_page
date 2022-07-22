import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'


export default function About() {
  return (
    <div>
        <Navbar />
        <Hero title="About Hugi" desc="We free and empower consumers and families to confidently enjoy life online." />
        <Footer />
    </div>
  )
}

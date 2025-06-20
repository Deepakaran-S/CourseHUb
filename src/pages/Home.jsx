import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import TrustedBy from '../components/TrustedBy'
import TopCategories from '../components/TopCategories'
import Testimonials from '../components/Testimonials'
import InstructorShowcase from '../components/InstructorShowcase'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      
      <HeroSection/>
      <TrustedBy/>
      <TopCategories/>
      <Testimonials/>
      <InstructorShowcase/>
      <CallToAction/>
      
    </div>
  )
}

export default Home
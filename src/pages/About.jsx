import React from 'react'
import Header from '../components/Home/Header'
import AboutIntro from '../components/About/AboutIntro'
import Footer from '../components/Home/Footer'
import Team from '../components/Home/Team'
import Clients from '../components/Home/Clients'
import Founder from '../components/Home/Founder'
const About = () => {
  return (
    <>
     <Header />
     <AboutIntro />
     <Founder />
     <Team />
     <Clients />
     <Footer />
    </>
  )
}

export default About
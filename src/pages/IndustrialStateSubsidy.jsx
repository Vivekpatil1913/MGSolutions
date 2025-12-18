import React from 'react'
import Header from '../components/Home/Header'
import Footer from '../components/Home/Footer'
import IndustrialSubsidy from '../components/Industrial/IndustrialSubsidy'
import StateSubsidySection from '../components/Industrial/StateSubsidySection'
import RequestQuote from '../components/Disclaimers/RequestQuote'

const IndustrialStateSubsidy = () => {
  return (
    <>
    <Header />
    <IndustrialSubsidy />
    <StateSubsidySection />
    <RequestQuote />
    <Footer />

    </>
  )
}

export default IndustrialStateSubsidy;

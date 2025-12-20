import React from "react";

import Header from "../components/Home/Header";
import SubsidySection from "../components/Home/SubsidySection";

import HomeCarousel from "../components/Home/HomeCarousel";
import SubsidyProcess from "../components/Home/SubsidyProcess";
import Founder from "../components/Home/Founder";
import AboutWhyUs from "../components/Home/AboutWhyUs";
import Testimonials from "../components/Home/Testimonials";
import Downloads from "../components/Home/Downloads";
import Clients from "../components/Home/Clients";
import Footer from "../components/Home/Footer";
import SubsidyCards from "../components/Home/SubsidyCards";
import FaqSection from "../components/Home/FaqSection";
import Team from "../components/Home/Team";
import Check from "../components/Home/Check";
const Home = () => {
  return (
    <>
      <Header />
      <HomeCarousel />
      <SubsidySection />
      <Check />
      <SubsidyCards />
      <SubsidyProcess />
      <AboutWhyUs />
      <Founder />
      <Team />
      <Testimonials />
      <Downloads />
      <Clients />
      <FaqSection />
      <Footer />
    </>
  );
};

export default Home;

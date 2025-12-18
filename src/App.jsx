import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Contact from './pages/Contact';
import Disclaimers from './pages/Disclaimers';
import Invest from './pages/Invest';
import IndustrialStateSubsidy from './pages/IndustrialStateSubsidy';
import Pli from './pages/Pli';
import Dpr from './pages/Dpr';
import Explore from './pages/Explore';
import GovtSub from './pages/GovtSub';
import Eligibility from './pages/Eligibility';

// ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/disclaimer" element={<Disclaimers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invest-in-india" element={<Invest />} />
        <Route path="/industrial-state-subsidy" element={<IndustrialStateSubsidy />} />
        <Route path="/production-linked-incentives" element={<Pli />} />
        <Route path="/detailed-project-report" element={<Dpr />} />
        <Route path="/industrial-subsidy" element={<Explore/>} />
        <Route path="/govt-subsidy" element={<GovtSub />} />
        <Route path="/2-minutes-subsidy-eligibility" element={<Eligibility />} />
      </Routes>
    </>
  );
}

export default App;

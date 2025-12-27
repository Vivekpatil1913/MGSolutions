import React, { useState } from "react";
import "./StateSubsidySection.css";

const states = [
  {
    name: "Rajasthan",
    image: "/src/components/assets/R.webp",
    desc: "Rajasthan which is known for it’s warm hospitality and rich culture is one of the very few states which allows the company setting up an industrial unit in the State to choose from the different forms of subsidies",
    details: `• An industry set up or expanding in Rajasthan can choose to either get State GST (commonly known as SGST) refund which is a normal practice with all the States but in addition can choose to avail incentives in the form of cash back for investments in Fixed Capital Assets (FCI) which includes plant, machinery and building or Revenue of the industrial based incentive in the form of cash back usually over 7 to 10 years
• Cold Storage and Warehousing Subsidies: Subsidies or financial assistance may be provided for the construction and maintenance of cold storage units and warehouses, helping farmers store and market their produce effectively.`,
  },
  {
    name: "Haryana",
    image: "/src/components/assets/H.webp",
    desc: "Haryana is one of the fastest growing State, thanks to its proximity to New Delhi and the burgeoning commercial activities in Gurugram (popularly known as Gurugram) has a unique subsidy to boost Research & Development (R&D) activities in the State by offering 50% capital subsidy for setting up a new R&D centre which includes R&D equipments and infrastructure such as laboratory furniture, fume hoods etc. as also civil work for setting up the R&D centre upto a project value of Rs.5 crore which translates to a cool subsidy of Rs.2.50 crore to help you kick start your innovation journey.",
  },
  {
    name: "Uttarakhand",
    image: "/src/components/assets/U.webp",
    desc: "Uttarakhand which is a very popular religious tourist destination also has a large number of industries especially pharmaceuticals which were setup during the Excise Duty regime due to the benefits being offered by the State at the point of time. Mega Projects in the State are classified as those with investments of Rs.75 crore or more with employment of 100 people or more unlike other States where the investment criterion is much higher.",
  },
  {
    name: "Maharashtra",
    image: "/src/components/assets/M.webp",
    desc: "Maharashtra which is one the most industrialised states in the country is not known to be a Startup Hub but it has come out with a unique incentive for Startups & MSMEs who list on the SME stock exchange at BSE / NSE by reimbursing upto Rs.6 lac towards listing cost which includes professional fees by Chartered Accountant / Consultant as also official listing fee.",
  },
  {
    name: "Karnataka",
    image: "/src/components/assets/K.webp",
    desc: "Bengaluru is known as the Silicon Valley of India and houses 400 R&D centres, highest number of technical and medical institutes and largest number of startups across Asia. Under the Innovate Karnataka initiative, the State Govt. provides funding support in the form of grants or equity upto Rs.300 crore through various funds in startups and MSMEs especially in the area of Information Technology & Bio Technology.",
  },
  {
    name: "Tamil Nadu",
    image: "/src/components/assets/T.webp",
    desc: "Tamil Nadu is an emerging hub for manufacturing of electronic products and exports and also houses the manufacturing facility for Foxconn which is the global manufacturing partner for Apple range of digital products. It has a unique Flexi Capital Subsidy scheme which is calculated as a percentage of eligible fixed assets and payable over a period of 2.5 times the investment period. The company has an option of choosing this scheme from the date of commercial production or achieving the minimum eligible investment whichever is later.",
  },
  {
    name: "Andhra Pradesh",
    image: "/src/components/assets/A.webp",
    desc: "Andhra Pradesh has consistently been ranked no. 1 in India for Ease of Doing Business and ranked no. 4 in terms of number of factories and no. 7 in terms of industrial output. AP has a hassle free land allotment process and they guarantee to allot land for industrial purposes within 21 days of receipt of application for the same.",
  },
  {
    name: "Telangana",
    image: "/src/components/assets/Te.webp",
    desc: "Being one of the youngest states in India, Telangana has made a huge mark as far as investor friendliness is concerned and has earmarked 150,000 acres of land for industrial purposes which is vested with Telangana State Industrial Investment Corporation (TSIIC). To also support industries, 10% of all the water from existing or new irrigation sources is earmarked for industrial purposes. It also houses T-Hub, the world’s largest innovation and incubation centre.",
  },
  {
    name: "Gujarat",
    image: "/src/components/assets/G.webp",
    desc: "Gujarat has emerged as a mega power house of industrial units especially a major automobile hub. It has a unique sustenance scheme for startups of Rs.20,000 per month for a period of one year and Rs.25,000 per month for women led startups.",
  },
  {
    name: "Madhya Pradesh",
    image: "/src/components/assets/MP.webp",
    desc: "Madhya Pradesh strategically located in Central India and has a rewarding policy whereby capital subsidy of 40% is provided across any industry setup in the State upto a capital value of Rs.10 crore and irrespective of the size of the company.",
  },
];

const StateSubsidySection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  return (
    <section className="state-section">
      <h2 className="state-title">
        Subsidies Across <span>Indian States</span>
      </h2>

      <div className="state-slider-wrapper">
        <div className="state-slider">
          {states.map((state, index) => (
            <div
              key={index}
              className={`state-tab ${activeIndex === index ? "open" : ""}`}
              onClick={() => setSelectedState(state)} // 🔥 Make entire tab clickable
            >
              <div className="state-header">
                <img src={state.image} alt={state.name} />
                <h3>{state.name}</h3>

                <span className="toggle-btn">+</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedState && (
        <div className="modal-overlay" onClick={() => setSelectedState(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedState(null)}
            >
              ×
            </button>

            <h3>{selectedState.name}</h3>
            <p>{selectedState.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default StateSubsidySection;

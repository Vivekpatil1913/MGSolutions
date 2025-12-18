import React from "react";
import "./MakeInIndiaCategories.css";

const MakeInIndiaCategories = () => {
  return (
    <section className="makeinindia-section">
      <div className="makeinindia-container">
        <h2 className="section-title">
          Make in India <span>Manufacturing Categories</span>
        </h2>

        <p className="section-subtitle">
          Classification of products under Make in India is based on the
          percentage of local manufacturing content.
        </p>

        <div className="category-grid">
          {/* Category I */}
          <div className="category-card">
            <span className="badge category-one">Category I</span>
            <h3>≥ 80% Local Manufacturing</h3>
            <p>
              Products with <strong>80% or more</strong> local manufacturing
              content qualify as Category I under Make in India.
            </p>

            <ul>
              <li>Total manufacturing cost excluding indirect taxes</li>
              <li>Less cost of imported components (incl. customs duties)</li>
              <li>Difference represents local content percentage</li>
            </ul>

            <div className="example-box">
              Example: INR 100 total cost – INR 15 imports = <strong>85%</strong>{" "}
              local content
            </div>
          </div>

          {/* Category II */}
          <div className="category-card">
            <span className="badge category-two">Category II</span>
            <h3>≥ 20% Local Manufacturing</h3>
            <p>
              Products with <strong>20% or more</strong> local manufacturing
              content fall under Category II.
            </p>

            <ul>
              <li>Total manufacturing cost excluding indirect taxes</li>
              <li>Less imported components including duties</li>
              <li>Remaining value is local content</li>
            </ul>

            <div className="example-box">
              Example: INR 100 – INR 75 imports = <strong>25%</strong> local
              content
            </div>
          </div>

          {/* Non Local */}
          <div className="category-card non-local">
            <span className="badge non-local-badge">Non-Local</span>
            <h3>&lt; 20% Local Manufacturing</h3>
            <p>
              Products with less than <strong>20%</strong> local manufacturing
              content are classified as Non-Local.
            </p>

            <ul>
              <li>High dependency on imported components</li>
              <li>Limited eligibility for government tenders</li>
              <li>Most tenders require Category I or II</li>
            </ul>

            <div className="example-box warning">
              Example: INR 100 – INR 85 imports = <strong>15%</strong> local
              content
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeInIndiaCategories;

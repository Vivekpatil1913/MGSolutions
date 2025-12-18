import React from "react";
import "./IndustrialSubsidy.css";

const IndustrialSubsidy = () => {
  return (
    <section className="industrial-subsidy">
      <div className="subsidy-container">
        <h2 className="subsidy-title">
          Industrial <span>State Subsidy</span>
        </h2>

        <div className="subsidy-card">
          <p>
            In accordance with the APEDA Act, which was approved by the Parliament
            in December 1985, the Government of India formed the Agricultural and
            Processed Food items Export Development Authority (APEDA) to develop
            and promote export for the items that were scheduled.
          </p>

          <p>
            With the passage of this legislation, the Processed Food Export
            Promotion Council (PFEPC) was replaced by APEDA. Scheduled products
            are the goods listed under the APEDA Act.
          </p>

          <p>
            APEDA is also obligated to provide financial support, knowledge, and
            instructions for the creation of planned goods.
          </p>

          <p className="highlight-text">
            APEDA registration is necessary since it is in charge of developing
            and promoting scheduled items for export.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustrialSubsidy;

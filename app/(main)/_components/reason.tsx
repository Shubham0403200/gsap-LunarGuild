import React from "react";

const Reason = () => {

  const reasons = [
    "Lack of support and guidance",
    "Financial instability",
    "Fear of failure",
    "Limited network and connections",
    "Difficulty in finding clients",
  ]

  return (
    <div>
      <div>
        <h1>
          The Reason why designers struggle to go independent
        </h1>
      </div>
      <div>
        {reasons.map((reason, index) => (
          <div key={index}>
            {reason}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reason;

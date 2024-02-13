import React from "react";
import FeatureData from "./FeatureData.js";

const FeatureSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {FeatureData.map((items) => (
          <FeatureCard
            key={items.title}
            title={items.title}
            icon={items.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

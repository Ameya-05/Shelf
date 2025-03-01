import React, { useEffect, useState } from "react";

const stats = [
  { value: 173068, label: "ACTIVE USERS" },
  { value: 7858881, label: "REPORTS GENERATED LAST MONTH" },
  { value: 11, label: "BRANDS ENGAGED" }
];

const StatCard = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 50;
    const steps = duration / incrementTime;
    const stepValue = end / steps;

    const counter = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);
  
    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="border rounded-2xl p-6 text-center shadow-md w-64">
      <p className="text-3xl font-semibold">{count.toLocaleString()}</p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="flex justify-center gap-6 p-6">
      {stats.map((stat, index) => (
        <StatCard key={index} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
};

export default StatsSection;

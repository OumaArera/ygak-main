import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Counties Engaged", value: 18 },
  { label: "Volunteers", value: 2500 },
  { label: "Trees Planted", value: 700000 },
];

const ImpactStats = () => {
  return (
    <section className="py-20 bg-[#1B5E20] text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Our Impact in Numbers</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <CountUp
              end={s.value}
              duration={3}
              className="text-4xl font-bold mb-2 text-yellow-300"
            />
            <p className="text-lg font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;

import React from "react";

const testimonials = [
  { quote: "Volunteering with YGAK changed my perspective on sustainability.", name: "Grace M." },
  { quote: "Their youth empowerment projects are truly impactful.", name: "John K." },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold text-[#1B5E20] mb-10">Voices of Change</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white shadow-lg p-6 rounded-xl">
            <p className="italic text-gray-700 mb-3">“{t.quote}”</p>
            <h4 className="font-semibold text-[#1B5E20]">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const documents = [
  {
    name: "Annual Report 2024",
    link: "/docs/annual_report_2024.pdf",
  },
  {
    name: "YGAK Constitution & Charter",
    link: "/docs/ygak_charter.pdf",
  },
  {
    name: "Strategic Plan 2025–2030",
    link: "/docs/strategic_plan.pdf",
  },
];

const DocumentsSection = () => {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-[#1B5E20] mb-10">
        Downloadable Documents
      </h2>
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {documents.map((doc, i) => (
          <motion.a
            key={i}
            href={doc.link}
            download
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 border border-green-100 rounded-xl shadow-sm hover:shadow-md transition p-6 flex flex-col items-center justify-center"
          >
            <FileText className="text-green-600 w-10 h-10 mb-3" />
            <h3 className="font-semibold text-green-800 mb-2">{doc.name}</h3>
            <Download className="text-gray-500 w-5 h-5" />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default DocumentsSection;

import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { motion } from "framer-motion";

const pressReleases = [
  {
    id: 1,
    title: "YFGAK Launches National Youth Climate Action Plan",
    date: "Sept 12, 2025",
    summary:
      "The Youths for Green Action Kenya unveiled its 5-year national youth climate action plan during an event in Nairobi...",
    file: "/John Ouma - 2024-09-20.pdf",
  },
  {
    id: 2,
    title: "Partnership with UNEP on Tree Restoration",
    date: "June 5, 2025",
    summary:
      "YFGAK and UNEP have signed a new partnership focusing on reforestation and youth-led sustainable development projects.",
    file: "/John Ouma - 2024-09-20.pdf",
  },
];

const PressReleaseDetails = () => {
  const { id } = useParams();
  const press = pressReleases.find((p) => p.id === Number(id));

  if (!press) {
    return (
      <div className="pt-28 text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Press Release Not Found</h2>
        <Link to="/media" className="text-green-700 hover:underline">
          ← Back to Media Center
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 mb-6">
        <Link
          to="/media"
          className="flex items-center text-green-700 hover:text-green-800 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-1" /> Back to Media Center
        </Link>
      </div>

      {/* Press Release Section */}
      <section className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <div className="flex items-center mb-4 text-gray-500 text-sm">
          <FileText size={16} className="mr-2 text-green-700" />
          {press.date}
        </div>
        <h1 className="text-3xl font-bold text-[#1B5E20] mb-4">
          {press.title}
        </h1>
        <p className="text-gray-700 mb-6 leading-relaxed">{press.summary}</p>

        {/* Embedded PDF Viewer */}
        <motion.iframe
          src={press.file}
          className="w-full h-[80vh] border rounded-lg shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          title={press.title}
        ></motion.iframe>

        <div className="mt-6 text-center">
          <a
            href={press.file}
            download
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Download PDF
          </a>
        </div>
      </section>
    </div>
  );
};

export default PressReleaseDetails;

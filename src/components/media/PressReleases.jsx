import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

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

const PressReleases = () => {
  return (
    <section className="grid sm:grid-cols-2 gap-8">
      {pressReleases.map((press) => (
        <motion.div
          key={press.id}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <div className="flex items-center mb-3 text-gray-500 text-sm">
            <FileText size={16} className="mr-2 text-green-700" />
            {press.date}
          </div>
          <h3 className="text-xl font-semibold text-green-800 mb-2">
            {press.title}
          </h3>
          <p className="text-gray-700 text-sm mb-4">{press.summary}</p>
          <Link
            to={`/media/press/${press.id}`}
            className="text-green-700 hover:text-green-800 font-semibold text-sm"
          >
            Read More →
          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default PressReleases;

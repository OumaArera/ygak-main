import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "100,000 Trees in Mau Forest",
    theme: "Reforestation",
    description:
      "A historic environmental restoration campaign engaging over 300 youth and community members to plant 100,000 trees in Mau Forest, Narok County.",
    image: "/project.JPG",
  },
  {
    id: 2,
    title: "Waste Management Program - Nakuru",
    theme: "Waste Management",
    description:
      "Promoting recycling, community clean-ups, and sustainable waste management practices across urban and rural communities.",
    image: "/project.JPG",
  },
  {
    id: 3,
    title: "Climate Ambassadors Program",
    theme: "Climate Action",
    description:
      "Empowering student leaders as climate champions through workshops, mentorship, and community-based environmental projects.",
    image: "/project.JPG",
  },
  {
    id: 4,
    title: "Greening Schools Initiative",
    theme: "Environmental Education",
    description:
      "Transforming schools into eco-learning centers through tree planting, environmental clubs, and green curriculum integration.",
    image: "/project.JPG",
  },
];

const ProjectsGrid = ({ selectedTheme }) => {
  const filtered =
    selectedTheme === "All"
      ? projects
      : projects.filter((p) => p.theme === selectedTheme);

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filtered.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;

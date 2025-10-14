import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Share2, Loader2 } from "lucide-react";
import { shareProject } from "../utils/shareUtils";
import { getData } from "../services/apiService"; 

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  const getProjectDetails = async () => {
    try {
      setLoading(true);
      const projectEndpoint = `upcoming-projects/${id}`;
      const projectResponse = await getData(projectEndpoint);
      const fetchedProject = projectResponse?.data || null;
      setProject(fetchedProject);
      const allProjectsEndpoint = 'upcoming-projects';
      const allProjectsResponse = await getData(allProjectsEndpoint, { page: 1, limit: 5 });
      const allProjects = allProjectsResponse?.data?.data || [];
      
      const related = allProjects
        .filter((p) => p.id !== fetchedProject?.id)
        .slice(0, 3);
      setRelatedProjects(related);

    } catch (error) {
      console.error("Error fetching project:", error);
      setProject(null);
      setRelatedProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, [id]);

  const handleShare = () => {
    if (project) {
      shareProject(project);
    }
  };

  if (loading) {
    return (
      <div className="pt-28 text-center min-h-screen flex flex-col justify-center items-center">
        <Loader2 size={36} className="animate-spin text-green-700 mb-4" />
        <h2 className="text-xl text-gray-700 font-medium">Loading Project Details...</h2>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-28 text-center text-gray-700 min-h-screen">
        <h2 className="text-2xl font-semibold mb-4">Project Not Found 😔</h2>
        <Link to="/projects" className="text-green-700 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <Link
          to="/projects"
          className="flex items-center text-green-700 hover:text-green-800 transition font-medium"
        >
          <ArrowLeft size={18} className="mr-1" /> Back to Projects
        </Link>
      </div>

      <section className="max-w-3xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
          />
        )}

        <div className="p-8">
          <h1 className="text-3xl font-bold text-[#1B5E20] mb-2">
            {project.title}
          </h1>
          <p className="text-sm text-gray-600 mb-4">{project.theme}</p>
          <p className="text-gray-700 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex items-center justify-between mb-6 border-t border-gray-100 pt-4">
              <div className="flex items-center space-x-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400" />
              ))}
              </div>
              <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleShare}
              className="flex items-center text-gray-600 hover:text-green-700 transition"
              >
              <Share2 size={18} className="mr-1" />
              Share
              </motion.button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-[#1B5E20] mb-4">
              Comments
            </h3>
            <p className="text-gray-600 text-sm italic">
              Commenting system coming soon...
            </p>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <h3 className="text-2xl font-bold text-[#1B5E20] mb-6">
            Related Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((related) => (
              <motion.div
                key={related.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden"
              >
                {related.image && (
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="p-4">
                  <h4 className="font-semibold text-green-800">
                    {related.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {related.theme}
                  </p>
                  <Link
                    to={`/projects/${related.id}`}
                    className="text-sm text-green-700 hover:underline font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;
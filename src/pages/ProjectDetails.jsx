import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft, Share2, MapPin, Calendar, Users, TreePine,
  Target, CheckCircle2, Clock, ChevronRight, Leaf,
  BarChart3, Globe, Handshake, AlertTriangle, MessageSquare
} from "lucide-react";
import { projects } from "../data/projects.data";

/* ── tiny helpers ── */
const Tag = ({ children, color = "green" }) => {
  const map = {
    green: "bg-green-50 text-green-700 border-green-100",
    blue: "bg-blue-50 text-blue-700 border-blue-100",
    amber: "bg-amber-50 text-amber-700 border-amber-100",
  };
  return (
    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${map[color]}`}>
      {children}
    </span>
  );
};

const SectionHeading = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2.5 mb-5">
    <div className="w-8 h-8 rounded-lg bg-[#1B5E20]/10 flex items-center justify-center shrink-0">
      <Icon size={16} className="text-[#1B5E20]" />
    </div>
    <h3 className="text-base font-bold text-gray-900 tracking-tight">{label}</h3>
    <div className="flex-1 h-px bg-gray-100" />
  </div>
);

const StatPill = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 text-center">
    <span className="text-2xl font-black text-[#1B5E20] tabular-nums">{value}</span>
    <span className="text-[11px] text-gray-500 mt-0.5 leading-tight">{label}</span>
  </div>
);

/* ── main component ── */
const ProjectDetails = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const project = projects.find((p) => p.id === id) || null;
  const relatedProjects = project
    ? projects.filter((p) => p.id !== project.id && p.theme === project.theme).slice(0, 3)
    : [];

  const handleShare = () => {
    const url = `${window.location.origin}/activities/projects/${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!project) {
    return (
      <div className="pt-28 text-center text-gray-700 min-h-screen flex flex-col items-center justify-center gap-4">
        <Leaf size={48} className="text-green-200" />
        <h2 className="text-2xl font-semibold">Project Not Found</h2>
        <Link to="/projects" className="text-green-700 hover:underline text-sm">← Back to Projects</Link>
      </div>
    );
  }

  const {
    title, image, theme, description, location, duration, status,
    projectPurpose, objectives = [], implementationApproach,
    treePlantingStatistics, partners = [], challengesExperienced = [],
    impact, alignment,
  } = project;

  const isCompleted = status === "completed";
  const totalTrees = treePlantingStatistics?.totalSeedlingsPlanted;
  const totalVolunteers = implementationApproach?.volunteerInvolvement?.totalVolunteers;
  const sitesCount = location?.specificSites?.length;
  const cumulativeTrees = impact?.cumulativeTreesPlantedByOrganization;
  const progressPercent = totalTrees && cumulativeTrees
    ? Math.min(Math.round((totalTrees / cumulativeTrees) * 100 * 10), 100)
    : null;

  return (
    <div className="bg-[#f7f9f7] min-h-screen pb-24">

      {/* ── Hero ── */}
      <div className="relative h-[55vh] min-h-[340px] overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-emerald-600" />
        )}
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

        {/* back button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium bg-black/20 hover:bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full transition"
          >
            <ArrowLeft size={15} /> Back to Projects
          </Link>
        </div>

        {/* share button */}
        <div className="absolute top-6 right-6 z-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShare}
            className="flex items-center gap-2 text-white/90 text-sm font-medium bg-black/20 hover:bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full transition"
          >
            <Share2 size={15} />
            {copied ? "Copied!" : "Share"}
          </motion.button>
        </div>

        {/* hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                isCompleted ? "bg-green-500 text-white" : "bg-amber-400 text-amber-900"
              }`}>
                {isCompleted ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                {isCompleted ? "Completed" : "Upcoming"}
              </span>
              <span className="text-xs font-semibold bg-white/15 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-white/20">
                {theme}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white leading-snug mb-3 drop-shadow">
              {title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-white/80">
              {location && (
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  {[location.county, location.country].filter(Boolean).join(", ")}
                </span>
              )}
              {duration?.startDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {new Date(duration.startDate).toLocaleDateString("en-KE", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">

        {/* Key Stats floating card */}
        {(totalTrees || totalVolunteers || sitesCount || cumulativeTrees) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
          >
            {totalTrees && (
              <StatPill
                value={totalTrees >= 1000 ? `${(totalTrees / 1000).toFixed(0)}K` : totalTrees}
                label="Trees Planted"
              />
            )}
            {totalVolunteers && <StatPill value={totalVolunteers} label="Volunteers" />}
            {sitesCount && <StatPill value={sitesCount} label="Schools Reached" />}
            {cumulativeTrees && (
              <StatPill
                value={`${(cumulativeTrees / 1000).toFixed(0)}K`}
                label="Org. Cumulative"
              />
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* ── LEFT: main content ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-[15px]">{description}</p>
            </div>

            {/* Purpose */}
            {projectPurpose && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <SectionHeading icon={Target} label="Project Purpose" />
                <p className="text-gray-700 text-sm leading-relaxed">{projectPurpose}</p>
              </div>
            )}

            {/* Objectives */}
            {objectives.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <SectionHeading icon={CheckCircle2} label="Objectives" />
                <ul className="space-y-2.5">
                  {objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px] font-bold">
                        {i + 1}
                      </span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tree Planting Stats */}
            {treePlantingStatistics && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <SectionHeading icon={TreePine} label="Tree Planting Statistics" />

                {/* mini stat chips */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="rounded-xl bg-green-50 p-3 text-center">
                    <p className="text-xl font-black text-[#1B5E20]">
                      {treePlantingStatistics.totalSeedlingsPlanted?.toLocaleString()}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-0.5">Total</p>
                  </div>
                  {treePlantingStatistics.indigenousTrees > 0 && (
                    <div className="rounded-xl bg-emerald-50 p-3 text-center">
                      <p className="text-xl font-black text-emerald-700">
                        {treePlantingStatistics.indigenousTrees?.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Indigenous</p>
                    </div>
                  )}
                  {treePlantingStatistics.exoticTrees > 0 && (
                    <div className="rounded-xl bg-teal-50 p-3 text-center">
                      <p className="text-xl font-black text-teal-700">
                        {treePlantingStatistics.exoticTrees?.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-gray-500 mt-0.5">Exotic</p>
                    </div>
                  )}
                </div>

                {/* Progress bar */}
                {progressPercent !== null && (
                  <div className="mb-5 p-3 bg-gray-50 rounded-xl">
                    <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                      <span>Project share of org. total ({cumulativeTrees?.toLocaleString()} trees)</span>
                      <span className="font-bold text-green-700">{progressPercent}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${progressPercent}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                )}

                {/* Site breakdown table */}
                {treePlantingStatistics.siteBreakdown?.length > 0 && (
                  <div className="overflow-x-auto rounded-xl border border-gray-100">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-green-50 text-left">
                          <th className="px-4 py-2.5 text-xs font-bold text-gray-600">Site</th>
                          <th className="px-4 py-2.5 text-xs font-bold text-gray-600 text-right">Trees</th>
                          <th className="px-4 py-2.5 text-xs font-bold text-gray-600">Species</th>
                        </tr>
                      </thead>
                      <tbody>
                        {treePlantingStatistics.siteBreakdown.map((row, i) => (
                          <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition">
                            <td className="px-4 py-2.5 text-gray-700 text-xs">{row.site}</td>
                            <td className="px-4 py-2.5 text-right font-semibold text-[#1B5E20] text-xs">
                              {row.treesPlanted?.toLocaleString()}
                            </td>
                            <td className="px-4 py-2.5 text-xs">
                              <div className="flex flex-wrap gap-1">
                                {row.species?.map((s, j) => (
                                  <span key={j} className="bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-[10px] font-medium">
                                    {s}
                                  </span>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* Implementation Approach */}
            {implementationApproach && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <SectionHeading icon={BarChart3} label="Implementation Approach" />
                {implementationApproach.methodology && (
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {implementationApproach.methodology}
                  </p>
                )}
                {implementationApproach.volunteerInvolvement && (
                  <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-3 mb-4">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Users size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-800">
                        {implementationApproach.volunteerInvolvement.totalVolunteers} Volunteers
                      </p>
                      <p className="text-xs text-blue-600">
                        {implementationApproach.volunteerInvolvement.sources?.join(" · ")}
                      </p>
                    </div>
                  </div>
                )}
                {implementationApproach.activities?.length > 0 && (
                  <ul className="space-y-2">
                    {implementationApproach.activities.map((act, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <ChevronRight size={14} className="text-green-500 mt-0.5 shrink-0" />
                        {act}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Impact */}
            {impact && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <SectionHeading icon={Leaf} label="Impact" />
                <div className="space-y-3">
                  {impact.environmentalImpact && (
                    <div className="rounded-xl bg-green-50 border border-green-100 p-4">
                      <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-1.5">
                        Environmental
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">{impact.environmentalImpact}</p>
                    </div>
                  )}
                  {impact.communityImpact && (
                    <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                      <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1.5">
                        Community
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">{impact.communityImpact}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Challenges */}
            {challengesExperienced.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <SectionHeading icon={AlertTriangle} label="Challenges Experienced" />
                <ul className="space-y-2.5">
                  {challengesExperienced.map((ch, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 bg-amber-50 rounded-xl p-3">
                      <AlertTriangle size={13} className="text-amber-500 mt-0.5 shrink-0" />
                      {ch}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comments placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <SectionHeading icon={MessageSquare} label="Comments" />
              <div className="text-center py-6 text-gray-400">
                <MessageSquare size={32} className="mx-auto mb-2 opacity-30" />
                <p className="text-sm italic">Commenting system coming soon…</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: sidebar ── */}
          <div className="space-y-5">

            {/* Partners */}
            {partners.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <SectionHeading icon={Handshake} label="Partners" />
                <ul className="space-y-3">
                  {partners.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0 font-bold text-xs">
                        {p.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">{p.name}</p>
                        <p className="text-[10px] text-gray-500">{p.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* SDG Alignment */}
            {alignment?.sdg?.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <SectionHeading icon={Globe} label="SDG Alignment" />
                <div className="flex flex-wrap gap-2 mb-3">
                  {alignment.sdg.map((sdg, i) => (
                    <Tag key={i}>{sdg}</Tag>
                  ))}
                </div>
                {alignment.nationalGoal && (
                  <p className="text-xs text-gray-500 leading-relaxed">{alignment.nationalGoal}</p>
                )}
              </div>
            )}

            {/* Implementation Sites */}
            {location?.specificSites?.length > 0 && (
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <SectionHeading icon={MapPin} label="Implementation Sites" />
                <ul className="space-y-2">
                  {location.specificSites.map((site, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      {site}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Org cumulative */}
            {cumulativeTrees && (
              <div className="bg-gradient-to-br from-[#1B5E20] to-emerald-600 rounded-2xl p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-green-200 mb-2">
                  YGAK Cumulative Impact
                </p>
                <p className="text-4xl font-black tabular-nums">
                  {(cumulativeTrees / 1000).toFixed(0)}K
                </p>
                <p className="text-sm text-green-100 mt-1">Trees planted to date</p>
                <div className="mt-3 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Related Projects ── */}
        {relatedProjects.length > 0 && (
          <div className="mt-10">
            <h3 className="text-lg font-black text-gray-900 mb-4">Related Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedProjects.map((rel) => (
                <motion.div
                  key={rel.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
                >
                  {rel.image && (
                    <img src={rel.image} alt={rel.title} className="w-full h-32 object-cover" />
                  )}
                  <div className="p-4 flex flex-col flex-grow">
                    <p className="text-[10px] font-semibold text-green-600 uppercase tracking-wide mb-1">
                      {rel.theme}
                    </p>
                    <h4 className="text-sm font-bold text-gray-800 line-clamp-2 flex-grow">{rel.title}</h4>
                    <Link
                      to={`/activities/projects/${rel.id}`}
                      className="mt-3 flex items-center gap-1 text-xs font-semibold text-green-700 hover:text-green-800 transition"
                    >
                      View Details <ChevronRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
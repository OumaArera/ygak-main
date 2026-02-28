import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Share2, MapPin, Calendar, Users, TreePine,
  Target, CheckCircle2, Clock, ChevronRight, Leaf,
  Globe, Handshake, AlertTriangle, MessageSquare,
  BarChart3, ArrowUpRight, Sprout, Layers
} from "lucide-react";
import { initiatives } from "../../data/initiatives.data";

/* ─────────────────────────── helpers ─────────────────────────── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const SectionLabel = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-8 h-8 rounded-xl bg-[#1B5E20]/10 flex items-center justify-center shrink-0">
      <Icon size={15} className="text-[#1B5E20]" />
    </div>
    <h3 className="text-[13px] font-black uppercase tracking-widest text-gray-900">{label}</h3>
    <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent" />
  </div>
);

const StatCard = ({ value, label, icon: Icon, accent }) => (
  <motion.div
    {...fadeUp(0.15)}
    className="relative bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center overflow-hidden shadow-sm border border-gray-100"
    style={{ minHeight: 100 }}
  >
    <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${accent}`} />
    {Icon && <Icon size={16} className="text-gray-300 mb-1.5" />}
    <span className="text-2xl font-black text-[#1B5E20] tabular-nums leading-none">{value}</span>
    <span className="text-[10px] text-gray-400 mt-1 font-medium leading-tight">{label}</span>
  </motion.div>
);

/* ─────────────────────────── main ─────────────────────────── */

const InitiativeDetails = () => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const initiative = initiatives.find((p) => p.id === id) || null;

  const related = initiative
    ? initiatives
        .filter((p) => p.id !== initiative.id && p.theme === initiative.theme)
        .slice(0, 3)
    : [];

  const handleShare = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/activities/initiatives/${id}`
    ).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  if (!initiative) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-[#f7f9f7]">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
          <Leaf size={36} className="text-green-200" />
        </div>
        <h2 className="text-2xl font-black text-gray-700">Initiative Not Found</h2>
        <Link
          to="/activities/initiatives"
          className="flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-800 transition"
        >
          <ArrowLeft size={15} /> Back to Initiatives
        </Link>
      </div>
    );
  }

  const {
    title, image, theme, description, location, duration, status,
    projectPurpose, objectives = [], implementationApproach,
    treePlantingStatistics, partners = [], challengesExperienced = [],
    impact, alignment, projectTheme,
  } = initiative;

  const isCompleted = status === "completed";
  const totalTrees   = treePlantingStatistics?.totalSeedlingsPlanted;
  const volunteers   = implementationApproach?.volunteerInvolvement?.totalVolunteers;
  const sitesCount   = location?.specificSites?.length;
  const cumulative   = impact?.cumulativeTreesPlantedByOrganization;
  const progressPct  = totalTrees && cumulative
    ? Math.min(Math.round((totalTrees / cumulative) * 100 * 10), 100)
    : null;

  const TABS = ["overview", "impact", "stats", "partners"].filter((t) => {
    if (t === "stats" && !treePlantingStatistics) return false;
    if (t === "partners" && partners.length === 0) return false;
    return true;
  });

  return (
    <div className="bg-[#f0f4f1] min-h-screen pb-28 font-sans">

      {/* ══════════════ CINEMATIC HERO ══════════════ */}
      <div className="relative h-[65vh] min-h-[400px] overflow-hidden">
        {image
          ? <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          : <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-emerald-700" />
        }

        {/* layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        {/* subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)"
          }}
        />

        {/* nav row */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-6 z-20">
          <Link
            to="/activities/initiatives"
            className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 transition"
          >
            <ArrowLeft size={13} /> Initiatives
          </Link>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleShare}
            className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10 transition"
          >
            <Share2 size={13} />
            <AnimatePresence mode="wait">
              <motion.span
                key={copied ? "ok" : "sh"}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className={copied ? "text-green-300" : ""}
              >
                {copied ? "Link copied!" : "Share"}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* hero content */}
        <div className="absolute bottom-0 left-0 right-0 max-w-5xl mx-auto px-6 pb-10 z-10">
          <motion.div {...fadeUp(0)} className="flex flex-wrap gap-2 mb-4">
            <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${
              isCompleted
                ? "bg-green-500 text-white"
                : "bg-amber-400 text-amber-900"
            }`}>
              {isCompleted ? <CheckCircle2 size={11} /> : <Clock size={11} />}
              {isCompleted ? "Completed" : "Ongoing"}
            </span>
            {theme && (
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 bg-white/10 border border-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {theme}
              </span>
            )}
          </motion.div>

          <motion.h1 {...fadeUp(0.08)} className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 drop-shadow-lg max-w-3xl">
            {title}
          </motion.h1>

          {projectTheme && (
            <motion.p {...fadeUp(0.14)} className="text-green-300 text-sm font-semibold mb-4 flex items-center gap-2">
              <Sprout size={14} /> {projectTheme}
            </motion.p>
          )}

          <motion.div {...fadeUp(0.18)} className="flex flex-wrap gap-5 text-white/60 text-xs">
            {location && (
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-green-400" />
                {[location.subCounties?.[0], location.county, location.country].filter(Boolean).join(", ")}
              </span>
            )}
            {duration?.startDate && (
              <span className="flex items-center gap-1.5">
                <Calendar size={12} className="text-green-400" />
                {new Date(duration.startDate).toLocaleDateString("en-KE", {
                  year: "numeric", month: "long", day: "numeric",
                })}
              </span>
            )}
          </motion.div>
        </div>
      </div>

      {/* ══════════════ FLOATING STAT STRIP ══════════════ */}
      <div className="max-w-5xl mx-auto px-6 -mt-7 relative z-20 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {totalTrees && (
            <StatCard
              value={totalTrees >= 1000 ? `${(totalTrees / 1000).toFixed(0)}K` : totalTrees}
              label="Trees Planted"
              icon={TreePine}
              accent="from-green-500 to-emerald-400"
            />
          )}
          {volunteers && (
            <StatCard value={volunteers} label="Volunteers" icon={Users} accent="from-teal-500 to-cyan-400" />
          )}
          {sitesCount && (
            <StatCard value={sitesCount} label="Sites" icon={MapPin} accent="from-lime-500 to-green-400" />
          )}
          {cumulative && (
            <StatCard
              value={`${(cumulative / 1000).toFixed(0)}K`}
              label="Org. Total Trees"
              icon={Leaf}
              accent="from-emerald-600 to-green-500"
            />
          )}
        </div>
      </div>

      {/* ══════════════ TAB BAR ══════════════ */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="flex gap-1 bg-white rounded-2xl p-1.5 shadow-sm border border-gray-100 w-fit">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition ${
                activeTab === tab ? "text-white" : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="tabPill"
                  className="absolute inset-0 bg-[#1B5E20] rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.45 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════ BODY ══════════════ */}
      <div className="max-w-5xl mx-auto px-6">
        <AnimatePresence mode="wait">

          {/* ── OVERVIEW tab ── */}
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
              {/* left 2/3 */}
              <div className="lg:col-span-2 space-y-5">

                {/* description */}
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed text-[15px]">{description}</p>
                </div>

                {/* purpose */}
                {projectPurpose && (
                  <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                    <SectionLabel icon={Target} label="Purpose" />
                    <p className="text-gray-700 text-sm leading-relaxed">{projectPurpose}</p>
                  </div>
                )}

                {/* objectives */}
                {objectives.length > 0 && (
                  <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                    <SectionLabel icon={CheckCircle2} label="Objectives" />
                    <ol className="space-y-3">
                      {objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-[#1B5E20]/10 text-[#1B5E20] flex items-center justify-center text-[10px] font-black group-hover:bg-[#1B5E20] group-hover:text-white transition">
                            {i + 1}
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">{obj}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* implementation */}
                {implementationApproach && (
                  <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                    <SectionLabel icon={BarChart3} label="Implementation Approach" />
                    {implementationApproach.methodology && (
                      <p className="text-gray-700 text-sm mb-5 leading-relaxed">
                        {implementationApproach.methodology}
                      </p>
                    )}
                    {implementationApproach.volunteerInvolvement && (
                      <div className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 mb-5 border border-blue-100">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                          <Users size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-black text-blue-800">
                            {implementationApproach.volunteerInvolvement.totalVolunteers} Volunteers
                          </p>
                          <ul className="mt-1 space-y-0.5">
                            {implementationApproach.volunteerInvolvement.sources?.map((src, i) => (
                              <li key={i} className="text-[11px] text-blue-600 flex items-center gap-1.5">
                                <div className="w-1 h-1 rounded-full bg-blue-400" />
                                {src}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    {implementationApproach.activities?.length > 0 && (
                      <ul className="space-y-2.5">
                        {implementationApproach.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                            {act}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* challenges */}
                {challengesExperienced.length > 0 && (
                  <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                    <SectionLabel icon={AlertTriangle} label="Challenges" />
                    <div className="space-y-3">
                      {challengesExperienced.map((ch, i) => (
                        <div key={i} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl p-4">
                          <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                          <p className="text-sm text-gray-700">{ch}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* comments placeholder */}
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                  <SectionLabel icon={MessageSquare} label="Comments" />
                  <div className="flex flex-col items-center justify-center py-8 gap-3 text-gray-300">
                    <MessageSquare size={36} />
                    <p className="text-sm font-medium text-gray-400 italic">Commenting system coming soon…</p>
                  </div>
                </div>
              </div>

              {/* right sidebar */}
              <div className="space-y-5">

                {/* SDG */}
                {alignment?.sdg?.length > 0 && (
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                    <SectionLabel icon={Globe} label="SDG Alignment" />
                    <div className="flex flex-wrap gap-2 mb-3">
                      {alignment.sdg.map((sdg, i) => (
                        <span key={i} className="text-[11px] font-bold bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full">
                          {sdg}
                        </span>
                      ))}
                    </div>
                    {alignment.nationalGoal && (
                      <p className="text-[11px] text-gray-500 leading-relaxed border-t border-gray-100 pt-3 mt-3">
                        {alignment.nationalGoal}
                      </p>
                    )}
                  </div>
                )}

                {/* sites */}
                {location?.specificSites?.length > 0 && (
                  <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                    <SectionLabel icon={MapPin} label="Sites" />
                    <ul className="space-y-2">
                      {location.specificSites.map((site, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-gray-700 py-1.5 border-b border-gray-50 last:border-0">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                          {site}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* cumulative impact hero card */}
                {cumulative && (
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d2b10] via-[#1B5E20] to-emerald-600 p-6 text-white">
                    {/* decorative circles */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
                    <div className="absolute -bottom-8 -left-4 w-32 h-32 rounded-full bg-white/5" />

                    <Leaf size={20} className="text-green-300 mb-3" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-300 mb-1">
                      YGAK Cumulative Impact
                    </p>
                    <p className="text-5xl font-black tabular-nums leading-none">
                      {(cumulative / 1000).toFixed(0)}
                      <span className="text-2xl text-green-300 ml-1">K</span>
                    </p>
                    <p className="text-green-100/70 text-xs mt-1.5">trees planted to date</p>

                    <div className="mt-4 h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-300 to-emerald-200 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                    {progressPct !== null && (
                      <p className="text-[10px] text-green-300/60 mt-2">
                        This initiative: {progressPct}% of total
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ── IMPACT tab ── */}
          {activeTab === "impact" && (
            <motion.div
              key="impact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-5 max-w-3xl"
            >
              {impact?.environmentalImpact && (
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <Leaf size={18} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-green-600">Environmental Impact</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">{impact.environmentalImpact}</p>
                </div>
              )}
              {impact?.communityImpact && (
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Users size={18} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Community Impact</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">{impact.communityImpact}</p>
                </div>
              )}
              {progressPct !== null && (
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100">
                  <SectionLabel icon={BarChart3} label="Contribution to Org. Goal" />
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>This initiative's share</span>
                    <span className="font-black text-[#1B5E20]">{progressPct}%</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#1B5E20] to-emerald-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPct}%` }}
                      transition={{ duration: 1.4, ease: "easeOut" }}
                    />
                  </div>
                  <p className="text-[11px] text-gray-400 mt-2">
                    of {cumulative?.toLocaleString()} cumulative trees planted by YGAK
                  </p>
                </div>
              )}
            </motion.div>
          )}

          {/* ── STATS tab ── */}
          {activeTab === "stats" && treePlantingStatistics && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-5 max-w-3xl"
            >
              {/* top stat chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Total", val: treePlantingStatistics.totalSeedlingsPlanted, color: "text-[#1B5E20]" },
                  { label: "Indigenous", val: treePlantingStatistics.indigenousTrees, color: "text-emerald-600" },
                  { label: "Exotic", val: treePlantingStatistics.exoticTrees, color: "text-teal-600" },
                  { label: "Fruit", val: treePlantingStatistics.fruitTrees, color: "text-lime-600" },
                ].filter(s => s.val > 0).map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100">
                    <p className={`text-2xl font-black ${s.color}`}>{s.val?.toLocaleString()}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* site breakdown */}
              {treePlantingStatistics.siteBreakdown?.length > 0 && (
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="px-6 py-5 border-b border-gray-100">
                    <SectionLabel icon={Layers} label="Site Breakdown" />
                  </div>
                  <div className="divide-y divide-gray-50">
                    {treePlantingStatistics.siteBreakdown.map((row, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/60 transition"
                      >
                        {/* mini bar */}
                        <div className="w-8 shrink-0 text-center">
                          <span className="text-[10px] font-black text-gray-300">{String(i+1).padStart(2,"0")}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-800 truncate">{row.site}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {row.species?.map((sp, j) => (
                              <span key={j} className="text-[9px] font-bold bg-green-50 text-green-700 border border-green-100 px-2 py-0.5 rounded-full">
                                {sp}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-sm font-black text-[#1B5E20]">{row.treesPlanted?.toLocaleString()}</p>
                          <p className="text-[9px] text-gray-400">trees</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* ── PARTNERS tab ── */}
          {activeTab === "partners" && partners.length > 0 && (
            <motion.div
              key="partners"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                {partners.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1B5E20] to-emerald-500 flex items-center justify-center text-white font-black text-lg shrink-0">
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-black text-gray-900">{p.name}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{p.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        {/* ══════════════ RELATED ══════════════ */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black text-gray-900">Related Initiatives</h3>
              <Link
                to="/activities/initiatives"
                className="flex items-center gap-1 text-xs font-bold text-green-700 hover:text-green-800 transition"
              >
                View all <ArrowUpRight size={13} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel, i) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
                >
                  {rel.image && (
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-[10px] font-black uppercase tracking-widest text-green-600 mb-1.5">{rel.theme}</p>
                    <h4 className="text-sm font-black text-gray-800 line-clamp-2 flex-grow leading-snug">{rel.title}</h4>
                    <Link
                      to={`/activities/initiatives/${rel.id}`}
                      className="mt-4 flex items-center gap-1.5 text-xs font-bold text-green-700 hover:text-green-800 transition"
                    >
                      Explore <ChevronRight size={13} />
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

export default InitiativeDetails;
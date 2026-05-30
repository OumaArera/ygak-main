import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Newspaper, Loader2, X, Play, ExternalLink, Calendar, Monitor, BookOpen } from "lucide-react";
import { getData } from "../../services/apiService";

// ─── DATA ────────────────────────────────────────────────────────────────────

const samplePrint = [
  {
    id: "p1",
    title: "Youth Environmentalists Plant Trees to Restore Baraget Forest Ecosystem",
    excerpt: "Young conservationists from YGAK lead a major reforestation effort in the Baraget Forest, targeting thousands of indigenous tree species.",
    date: "2026-04-20",
    image: "/baraget/phase one/baraget 1 phase one.jpg",
    source: "Kenya News Agency",
    sourceUrl: "https://www.kenyanews.go.ke/youth-environmentalists-plant-trees-to-restore-baraget-forest-ecosystem/",
    content: `Young environmentalists from Youth for Green Action Kenya (YGAK) spearheaded an ambitious reforestation initiative in Baraget Forest, planting thousands of indigenous trees to restore the ecosystem. The campaign brought together university students, local community members, and county officials in a unified conservation effort.`,
  },
  {
    id: "p2",
    title: "Varsity Students Plant 200,000 Trees to Restore Baraget Forest",
    excerpt: "University students join forces with YGAK to plant a record 200,000 trees in Baraget Forest as part of the 2026 greening campaign.",
    date: "2026-05-01",
    image: "/baraget/phase two/baraget 1 phase 2.jpg",
    source: "The Star",
    sourceUrl: "https://www.the-star.co.ke/counties/western/2026-05-01-varsity-students-plant-200000-trees-to-restore-baraget-forest",
    content: `In a landmark environmental event, over 200,000 trees were planted in Baraget Forest by university students partnering with YGAK. The initiative marks one of the largest single-day tree-planting events in Kenya's history, setting a new benchmark for youth-led climate action.`,
  },
  {
    id: "p3",
    title: "Kaimosi University Seeks Partnership to Allow Students Drive Climate Action",
    excerpt: "Kaimosi University signs an MOU with YGAK to embed climate-action programs into student curricula and community outreach.",
    date: "2026-03-10",
    image: "/project.JPG",
    source: "Standard Media",
    sourceUrl: "https://www.standardmedia.co.ke/environment-climate/article/2001539599/kaimosi-university-seeks-partnership-to-allow-students-drive-climate-action",
    content: `Kaimosi University has formalized a partnership with YGAK to integrate environmental stewardship into student life, allowing undergraduates to lead real-world climate initiatives as part of their academic journey.`,
  },
  {
    id: "p4",
    title: "Residents Call for Shamba System to Enhance Forest Conservation",
    excerpt: "Communities surrounding Baraget Forest advocate for the shamba system as a sustainable model for forest management and livelihoods.",
    date: "2026-04-28",
    image: "/baraget/phase two/baraget 2 phase 2.jpg",
    source: "Kenya News Agency",
    sourceUrl: "https://www.kenyanews.go.ke/residents-call-for-shamba-system-to-enhance-forest-conservation/",
    content: `Local residents adjacent to Baraget Forest are calling for the reinstatement of the shamba system — a co-management model that allows communities to cultivate food crops within the forest while tending to tree seedlings. YGAK supports this community-centred approach as part of a broader conservation strategy.`,
  },
];

const sampleVideos = [
  {
    id: "v1",
    title: "Baraget Forest Tree Planting Campaign – Phase One Coverage",
    date: "2026-04-18",
    thumbnail: `https://img.youtube.com/vi/iyOvwAEhk9k/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/iyOvwAEhk9k",
    embedId: "iyOvwAEhk9k",
    source: "YouTube",
    description: "Full coverage of Phase One of the Baraget Forest Tree Planting Campaign 2026, featuring YGAK volunteers and community members.",
  },
  {
    id: "v2",
    title: "Baraget Forest Planting – Phase Two Highlights",
    date: "2026-06-18",
    thumbnail: `https://img.youtube.com/vi/tWjYNdYiCvU/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/tWjYNdYiCvU",
    embedId: "tWjYNdYiCvU",
    source: "YouTube",
    description: "Highlights from Phase Two of the Baraget Forest campaign — a record-breaking 200,000 tree planting milestone.",
  },
  {
    id: "v3",
    title: "KBC Channel 1 – YGAK Forest Restoration News Feature",
    date: "2026-05-10",
    thumbnail: `https://img.youtube.com/vi/_H9jYbqyPkU/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/_H9jYbqyPkU",
    embedId: "_H9jYbqyPkU",
    source: "KBC Channel 1",
    description: "Kenya Broadcasting Corporation features YGAK's forest restoration work in a prime-time news segment.",
  },
  {
    id: "v4",
    title: "Greening Schools Initiative – Documentary",
    date: "2025-04-12",
    thumbnail: `https://img.youtube.com/vi/px96FBQb7lE/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/px96FBQb7lE",
    embedId: "px96FBQb7lE",
    source: "YouTube",
    description: "A short documentary exploring YGAK's school greening program across multiple counties in Kenya.",
  },
  {
    id: "v5",
    title: "Community Voices – Baraget Forest Conservation",
    date: "2026-04-22",
    thumbnail: `https://img.youtube.com/vi/64o42I8wONw/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/64o42I8wONw",
    embedId: "64o42I8wONw",
    source: "YouTube",
    description: "Local residents and YGAK youth share their experiences and hopes for the Baraget Forest conservation effort.",
  },
  {
    id: "v6",
    title: "Youth Climate Action – YGAK 2025 Year in Review",
    date: "2025-12-30",
    thumbnail: `https://img.youtube.com/vi/aIjovLoW2Rg/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/aIjovLoW2Rg",
    embedId: "aIjovLoW2Rg",
    source: "YouTube",
    description: "A comprehensive look at YGAK's activities, milestones, and impact throughout 2025.",
  },
  {
    id: "v7",
    title: "Tree Planting Initiative – Mt. Elgon Coverage",
    date: "2024-04-12",
    thumbnail: `https://img.youtube.com/vi/oWNY3KhLrcs/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/oWNY3KhLrcs",
    embedId: "oWNY3KhLrcs",
    source: "YouTube",
    description: "Coverage of YGAK's tree planting drive on the slopes of Mt. Elgon National Park.",
  },
  {
    id: "v8",
    title: "Green Goals Tournament – Homa Bay",
    date: "2025-04-12",
    thumbnail: `https://img.youtube.com/vi/3iNMV_og26Q/hqdefault.jpg`,
    youtubeUrl: "https://youtu.be/3iNMV_og26Q",
    embedId: "3iNMV_og26Q",
    source: "YouTube",
    description: "The Green Goals Tournament in Homa Bay combining sport and environmental education for local youth.",
  },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

const SourceBadge = ({ source }) => (
  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#e8f5e9] text-[#2e7d32] border border-[#a5d6a7]">
    {source}
  </span>
);

const VideoCard = ({ video, onClick, isActive }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    whileHover={{ y: -4 }}
    onClick={() => onClick(video)}
    className={`group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
      isActive
        ? "border-[#1B5E20] shadow-xl shadow-[#1B5E20]/20"
        : "border-transparent shadow-md hover:shadow-xl hover:border-[#81c784]"
    } bg-white`}
  >
    <div className="relative overflow-hidden">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.src = "/project.JPG"; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white flex items-center justify-center"
        >
          <Play size={22} className="text-white fill-white ml-1" />
        </motion.div>
      </div>
      <div className="absolute bottom-3 left-3">
        <SourceBadge source={video.source} />
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-[#1B5E20] text-sm leading-snug mb-1 line-clamp-2">{video.title}</h3>
      <p className="text-gray-400 text-xs flex items-center gap-1">
        <Calendar size={11} /> {new Date(video.date).toDateString()}
      </p>
    </div>
  </motion.div>
);

const VideoModal = ({ video, onClose }) => {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="w-full max-w-4xl bg-[#0d160e] rounded-2xl overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.embedId}?autoplay=1`}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{video.description}</p>
              <div className="flex items-center gap-3">
                <SourceBadge source={video.source} />
                <span className="text-gray-500 text-xs flex items-center gap-1">
                  <Calendar size={11} /> {new Date(video.date).toDateString()}
                </span>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#1B5E20] text-white hover:bg-[#2e7d32] transition"
              >
                <ExternalLink size={13} /> Open
              </a>
              <button
                onClick={onClose}
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 hover:bg-white/20 transition"
              >
                <X size={13} /> Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PrintCard = ({ item, isSelected, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0 }}
    onClick={() => onClick(item)}
    className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all duration-300 flex gap-0 ${
      isSelected
        ? "border-[#1B5E20] shadow-lg shadow-[#1B5E20]/20"
        : "border-transparent shadow-sm hover:shadow-md hover:border-[#c8e6c9]"
    } bg-white`}
  >
    <img
      src={item.image || "/project.JPG"}
      alt={item.title}
      className="w-24 h-full object-cover shrink-0"
      onError={(e) => { e.target.src = "/project.JPG"; }}
    />
    <div className="p-3 min-w-0">
      <div className="mb-1.5">
        <SourceBadge source={item.source} />
      </div>
      <h3 className="font-semibold text-[#1B5E20] text-sm leading-tight mb-1 line-clamp-2">{item.title}</h3>
      <p className="text-gray-400 text-xs flex items-center gap-1">
        <Calendar size={10} /> {new Date(item.date).toDateString()}
      </p>
    </div>
  </motion.div>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Press = () => {
  const [activeTab, setActiveTab] = useState("print"); // "print" | "video"
  const [printArticles, setPrintArticles] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState({ total: 0, page: 1, limit: 5, totalPages: 1 });
  const detailRef = useRef(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [printRes, videoRes] = await Promise.allSettled([
        getData("press-releases", { page: currentPage, limit: 5 }),
        getData("media-videos", { page: 1, limit: 20 }),
      ]);

      const printData = printRes.status === "fulfilled" ? printRes.value?.data?.data : null;
      const videoData = videoRes.status === "fulfilled" ? videoRes.value?.data?.data : null;

      setPrintArticles(printData || samplePrint);
      setVideos(videoData || sampleVideos);
      setMeta(
        printRes.value?.data?.meta || {
          total: samplePrint.length,
          page: currentPage,
          limit: 5,
          totalPages: Math.ceil(samplePrint.length / 5),
        }
      );
      if (!selectedArticle && (printData || samplePrint).length > 0) {
        setSelectedArticle((printData || samplePrint)[0]);
      }
    } catch (err) {
      setPrintArticles(samplePrint);
      setVideos(sampleVideos);
      setSelectedArticle(samplePrint[0]);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSelectArticle = (item) => {
    setSelectedArticle(item);
    if (window.innerWidth < 1024 && detailRef.current) {
      detailRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const tabs = [
    { id: "print", label: "Print Media", icon: BookOpen, count: printArticles.length },
    { id: "video", label: "Video Media", icon: Monitor, count: videos.length },
  ];

  return (
    <div className="pb-20 bg-[#f4f8f4] min-h-screen">
      {/* Hero */}
      <section className="relative h-[52vh] flex flex-col items-center justify-center text-center overflow-hidden bg-[#0a1209] -mt-4 sm:-mt-6">
        <div className="absolute inset-0 bg-[url('/main.jpg')] bg-cover bg-center opacity-15" />
        {/* decorative grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(#4caf50 1px, transparent 1px), linear-gradient(90deg, #4caf50 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#81c784] text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#2e7d32] px-4 py-1.5 rounded-full"
          >
            <Newspaper size={12} /> Media Centre
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Press &amp; Media
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#a5d6a7] max-w-xl mx-auto text-sm leading-relaxed"
          >
            News features, broadcast coverage, and official communications from YGAK's conservation work across Kenya.
          </motion.p>
        </div>
      </section>

      {/* Tab Bar */}
      <div className="sticky top-0 z-30 bg-[#f4f8f4] border-b border-[#c8e6c9] shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#1B5E20] text-white shadow-md"
                      : "text-[#4a7a4d] hover:bg-[#e8f5e9] hover:text-[#1B5E20]"
                  }`}
                >
                  <Icon size={15} />
                  {tab.label}
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-[#c8e6c9] text-[#2e7d32]"}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8">
        <AnimatePresence mode="wait">
          {/* ── PRINT TAB ── */}
          {activeTab === "print" && (
            <motion.div
              key="print"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-6"
            >
              {/* Left: List */}
              <div className="lg:col-span-2 space-y-3">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-4">
                  {printArticles.length} Articles
                </p>
                {loading ? (
                  <div className="flex justify-center items-center h-64">
                    <Loader2 size={36} className="animate-spin text-[#1B5E20]" />
                  </div>
                ) : printArticles.length === 0 ? (
                  <p className="text-gray-500 text-center py-10">No press releases available.</p>
                ) : (
                  printArticles.map((item) => (
                    <PrintCard
                      key={item.id}
                      item={item}
                      isSelected={selectedArticle?.id === item.id}
                      onClick={handleSelectArticle}
                    />
                  ))
                )}

                {meta.totalPages > 1 && (
                  <div className="flex items-center gap-3 pt-4">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1 || loading}
                      className="p-2 rounded-lg bg-white border border-gray-200 hover:border-[#1B5E20] hover:text-[#1B5E20] disabled:opacity-40 transition"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <span className="text-sm text-gray-600 font-medium">
                      {currentPage} / {meta.totalPages}
                    </span>
                    <button
                      onClick={() => setCurrentPage(p => Math.min(meta.totalPages, p + 1))}
                      disabled={currentPage === meta.totalPages || loading}
                      className="p-2 rounded-lg bg-white border border-gray-200 hover:border-[#1B5E20] hover:text-[#1B5E20] disabled:opacity-40 transition"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </div>

              {/* Right: Detail */}
              <div ref={detailRef} className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  {selectedArticle ? (
                    <motion.div
                      key={selectedArticle.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={selectedArticle.image || "/project.JPG"}
                          alt={selectedArticle.title}
                          className="w-full h-full object-cover"
                          onError={(e) => { e.target.src = "/project.JPG"; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-5">
                          <SourceBadge source={selectedArticle.source} />
                        </div>
                      </div>
                      <div className="p-6">
                        <h2 className="text-xl font-black text-[#1B5E20] mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                          {selectedArticle.title}
                        </h2>
                        <p className="text-gray-400 text-sm flex items-center gap-1.5 mb-4">
                          <Calendar size={13} /> {new Date(selectedArticle.date).toDateString()}
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line mb-5">
                          {selectedArticle.content || selectedArticle.excerpt}
                        </p>
                        {selectedArticle.sourceUrl && (
                          <a
                            href={selectedArticle.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#1B5E20] hover:bg-[#2e7d32] px-5 py-2.5 rounded-xl transition"
                          >
                            <ExternalLink size={14} /> Read Full Article on {selectedArticle.source}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-80 bg-white rounded-2xl shadow text-gray-400">
                      <Newspaper size={40} className="mb-3 opacity-30" />
                      <p className="text-sm">Select an article to read it here.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* ── VIDEO TAB ── */}
          {activeTab === "video" && (
            <motion.div
              key="video"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-6">
                {videos.length} Videos
              </p>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <Loader2 size={36} className="animate-spin text-[#1B5E20]" />
                </div>
              ) : videos.length === 0 ? (
                <p className="text-gray-500 text-center py-10">No videos available.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {videos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onClick={setActiveVideo}
                      isActive={activeVideo?.id === video.id}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
};

export default Press;
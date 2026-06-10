import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function Portfolio() {
  const whatsappNumber = "971506309005";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // HERO SLIDER
  const heroSlides = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // LEAD COUNTER
  function Counter({ end }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const step = Math.ceil(end / (duration / 30));

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 30);

      return () => clearInterval(interval);
    }, [end]);

    return <span>{count.toLocaleString()}</span>;
  }

  const globalPlatforms = ["Meta Ads", "Facebook", "Instagram", "TikTok"];

  const globalResults =
    "Improved campaign performance through Meta and TikTok advertising strategies, increasing lead quality and engagement across UAE real estate developers including DAMAC, Danube, Binghatti and Imtiaz.";

  const globalAchievements = [
    "Delivered high-performing real estate ad campaigns in UAE market",
    "Generated consistent qualified property leads",
    "Built expertise in Meta and TikTok paid ads",
    "Improved CTR and conversions through creative optimization"
  ];

  const projects = [
    {
      id: 1,
      slug: "damac",
      title: "DAMAC Real Estate Campaigns",
      description: "Luxury property lead generation campaigns.",
      platforms: ["Meta Ads", "TikTok"],
      details:
        "High-performance paid campaigns targeting luxury investors and property buyers across UAE.",
      results: "Reduced cost per lead and increased high-intent inquiries.",
      achievements: "Strong conversion performance across Meta platforms.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
      ]
    },
    {
      id: 2,
      slug: "danube",
      title: "Danube Properties Campaigns",
      description: "Affordable luxury real estate marketing.",
      platforms: ["Meta Ads", "Instagram"],
      details: "Lifestyle-focused creatives for off-plan property launches.",
      results: "Improved engagement and lead volume.",
      achievements: "Increased brand awareness across UAE market.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
      ]
    },
    {
      id: 3,
      slug: "binghatti",
      title: "Binghatti Developers Campaigns",
      description: "Investor-focused property campaigns.",
      platforms: ["Meta Ads", "TikTok"],
      details: "Performance marketing campaigns for Dubai developments.",
      results: "Improved investor lead generation.",
      achievements: "Strong visibility for multiple projects.",
      images: [
        "https://images.unsplash.com/photo-1460317442991-0ec209397118",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      ]
    },
    {
      id: 4,
      slug: "imtiaz",
      title: "Imtiaz Developments Campaigns",
      description: "Luxury lifestyle property marketing.",
      platforms: ["Meta Ads", "Instagram"],
      details:
        "High-end property campaigns focused on lifestyle and investment value.",
      results: "Better lead quality and engagement.",
      achievements: "Positioned brand strongly in UAE property market.",
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const found = projects.find((p) => p.slug === hash);
      if (found) setSelectedProject(found);
    }
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
    window.location.hash = project.slug;
  };

  const goBack = () => {
    setSelectedProject(null);
    window.location.hash = "";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-[#f7f7f8] text-[#111] min-h-screen font-sans"
    >
      {/* HEADER */}
      <div className="fixed top-0 w-full px-8 py-5 bg-white/60 backdrop-blur-xl border-b z-50">
        <h1 className="text-lg font-semibold tracking-tight">
          Waseem Aftab
        </h1>
      </div>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="max-w-4xl mx-auto px-6 pt-28 pb-20"
          >
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-sm mb-8 opacity-70 hover:opacity-100"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <h1 className="text-4xl font-semibold mb-4">
              {selectedProject.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.platforms.map((p) => (
                <span
                  key={p}
                  className="text-xs px-3 py-1 bg-white border rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="text-gray-700 mb-6">{selectedProject.details}</p>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Results</h3>
              <p className="text-gray-600">{selectedProject.results}</p>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-medium mb-2">Impact</h3>
              <p className="text-gray-600">{selectedProject.achievements}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {selectedProject.images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  whileHover={{ scale: 1.03 }}
                  className="rounded-2xl h-44 w-full object-cover border"
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <div>
            {/* HERO SLIDER */}
            <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
              {heroSlides.map((img, i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: i === currentSlide ? 1 : 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}

              <div className="absolute inset-0 bg-black/40" />

              <div className="relative z-10 text-white px-6">
                <h1 className="text-5xl md:text-7xl font-semibold">
                  Waseem Aftab
                </h1>
                <p className="mt-5 text-lg opacity-90 max-w-xl mx-auto">
                  Real Estate Digital Marketing Specialist — Meta Ads, TikTok
                  Ads & UAE Lead Generation
                </p>
              </div>

              {/* LEAD COUNTER */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center">
                <p className="text-sm opacity-80">Leads Generated</p>
                <p className="text-3xl font-semibold">
                  <Counter end={10000} />+
                </p>
              </div>
            </section>

            {/* RESULTS */}
            <section className="py-24 px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
              <p className="text-gray-600">{globalResults}</p>
            </section>

            {/* ACHIEVEMENTS */}
            <section className="py-24 bg-white border-y">
              <h2 className="text-2xl font-semibold text-center mb-10">
                Achievements
              </h2>

              <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto px-6">
                {globalAchievements.map((a, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border bg-white/60 backdrop-blur hover:bg-white transition"
                  >
                    {a}
                  </div>
                ))}
              </div>
            </section>

            {/* CASE STUDIES */}
            <section className="py-24 px-6 max-w-5xl mx-auto">
              <h2 className="text-2xl font-semibold text-center mb-10">
                Case Studies
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (
                  <motion.div
                    key={p.id}
                    whileHover={{ scale: 1.03 }}
                    onClick={() => openProject(p)}
                    className="cursor-pointer p-6 bg-white/70 backdrop-blur border rounded-2xl hover:shadow-2xl transition"
                  >
                    <img
                      src={p.images[0]}
                      className="h-40 w-full object-cover rounded-xl mb-4 border"
                    />
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      {p.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* CONTACT */}
            <section className="py-32 flex flex-col items-center justify-center">
              <a
                href={whatsappLink}
                className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </section>

            {/* FLOATING WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
            >
              <MessageCircle size={22} />
            </a>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

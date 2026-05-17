import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function Portfolio() {
  const whatsappNumber = "971506309005";
  const email = "Waseem.aftab18@gmail.com";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const globalPlatforms = ["Meta Ads", "Facebook", "Instagram", "TikTok"];

  const globalResults =
    "Improved campaign performance through Meta and TikTok advertising strategies, increasing lead quality and engagement across UAE real estate and banking campaigns.";

  const globalAchievements = [
    "Delivered high performing real estate ad campaigns in UAE market",
    "Generated consistent qualified leads for DAMAC and banking clients",
    "Built cross platform expertise in Meta and TikTok paid ads",
    "Improved CTR and engagement through creative optimization"
  ];

  const projects = [
    {
      id: 1,
      slug: "damac-campaigns",
      title: "DAMAC Real Estate Campaigns",
      description:
        "Luxury property campaigns focused on lead generation, Meta and TikTok ads performance.",
      platforms: ["Meta Ads", "Facebook", "Instagram", "TikTok"],
      details:
        "Executed targeted Meta and TikTok ad campaigns for DAMAC luxury properties with optimized creatives and funnel strategy.",
      results:
        "Reduced cost per lead and improved lead quality through testing and audience refinement.",
      achievements:
        "Consistently generated high intent property inquiries in UAE luxury segment.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
      ]
    },
    {
      id: 2,
      slug: "danube-properties",
      title: "Danube Properties Ads",
      description: "Creative campaigns using Meta and TikTok platforms.",
      platforms: ["Meta Ads", "Instagram", "TikTok"],
      details:
        "Built storytelling based creatives focusing on affordability and lifestyle positioning.",
      results:
        "Increased engagement rate and improved click through performance.",
      achievements:
        "Strengthened brand awareness for off plan property launches in UAE.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
      ]
    },
    {
      id: 3,
      slug: "reportage-branding",
      title: "Reportage Branding Campaign",
      description: "Brand awareness campaigns using Meta and TikTok.",
      platforms: ["Meta Ads", "TikTok"],
      details:
        "Focused on storytelling creatives highlighting architecture and investment messaging.",
      results:
        "Improved brand recall and engagement across paid channels.",
      achievements:
        "Positioned brand as trusted real estate developer in UAE market.",
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
      ]
    },
    {
      id: 4,
      slug: "emirates-nbd",
      title: "Emirates NBD Credit Card Ads",
      description: "Performance marketing campaigns using Meta platforms.",
      platforms: ["Meta Ads", "Facebook", "Instagram"],
      details:
        "Designed conversion focused funnels for banking acquisition campaigns.",
      results:
        "Improved lead conversion rate through optimized funnel structure.",
      achievements:
        "Supported successful digital acquisition campaigns for UAE banking sector.",
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        "https://images.unsplash.com/photo-1556742393-d75f468bfcb0",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
      ]
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const found = projects.find(p => p.slug === hash);
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
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <div className="fixed top-0 w-full flex justify-between items-center px-6 py-4 backdrop-blur-md bg-black/40 z-50">
        <h1 className="text-lg font-semibold">Waseem Aftab</h1>
      </div>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="min-h-screen px-10 py-24 max-w-5xl mx-auto"
          >
            <button onClick={goBack} className="mb-8 flex items-center gap-2 opacity-80">
              <ArrowLeft size={18} /> Back
            </button>

            <h1 className="text-4xl font-bold mb-4">{selectedProject.title}</h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.platforms.map(p => (
                <span key={p} className="px-3 py-1 text-xs rounded-full bg-white/10">
                  {p}
                </span>
              ))}
            </div>

            <p className="opacity-80 mb-6">{selectedProject.details}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Results and Impact</h3>
              <p className="opacity-80">{selectedProject.results}</p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <p className="opacity-80">{selectedProject.achievements}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {selectedProject.images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-xl h-48 w-full object-cover"
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <div>
            <section className="h-screen flex flex-col justify-center items-center text-center px-6">
              <motion.h1 className="text-5xl md:text-7xl font-bold">Waseem Aftab</motion.h1>
              <p className="mt-4 text-lg opacity-70">
                Social Media Meta Ads TikTok Ads Real Estate Banking
              </p>

              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {globalPlatforms.map(p => (
                  <span key={p} className="px-3 py-1 text-xs rounded-full bg-white/10">
                    {p}
                  </span>
                ))}
              </div>
            </section>

            <section className="px-10 py-20 text-center">
              <h2 className="text-3xl font-semibold mb-4">Results and Impact</h2>
              <p className="opacity-80 max-w-3xl mx-auto">{globalResults}</p>
            </section>

            <section className="px-10 py-20 bg-white text-black">
              <h2 className="text-3xl font-semibold mb-8 text-center">Achievements</h2>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {globalAchievements.map((a, i) => (
                  <div key={i} className="p-4 border rounded-xl">{a}</div>
                ))}
              </div>
            </section>

            <section className="min-h-screen px-10 py-24">
              <h2 className="text-3xl font-semibold mb-10">Case Studies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map(p => (
                  <motion.div
                    key={p.id}
                    whileHover={{ y: -5 }}
                    onClick={() => openProject(p)}
                    className="cursor-pointer p-6 bg-gray-900 rounded-2xl border border-gray-800"
                  >
                    <h3 className="text-xl font-semibold">{p.title}</h3>
                    <p className="text-sm opacity-70 mt-2">{p.description}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="min-h-screen flex flex-col items-center justify-center gap-10 px-6">
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-90">
                <img className="w-14 h-14" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/meta.svg" alt="Meta" />
                <img className="w-14 h-14" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/facebook.svg" alt="Facebook" />
                <img className="w-14 h-14" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/instagram.svg" alt="Instagram" />
                <img className="w-14 h-14" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/tiktok.svg" alt="TikTok" />
                <img className="w-14 h-14" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/canva.svg" alt="Canva" />
                <img className="w-14 h-14" src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/adobe.svg" alt="Adobe" />
              </div>

              <a href={whatsappLink} className="bg-green-500 px-6 py-3 rounded-full text-black font-semibold">
                <MessageCircle className="inline mr-2" /> WhatsApp
              </a>
            </section>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowLeft } from "lucide-react";

export default function Portfolio() {
  const whatsappNumber = "971506309005";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  const globalPlatforms = ["Meta Ads", "Facebook", "Instagram", "TikTok"];

  const globalResults =
    "Managed and optimized Meta and TikTok advertising campaigns for leading UAE real estate developers including DAMAC, Binghatti, Imtiaz and Danube. Focused on lead generation, audience targeting, creative testing and campaign optimization.";

  const globalAchievements = [
    "Generated qualified property leads through Meta and TikTok advertising",
    "Worked on campaigns for DAMAC, Binghatti, Imtiaz and Danube Properties",
    "Optimized campaign performance through audience and creative testing",
    "Built expertise in luxury, off-plan and investment-focused real estate marketing"
  ];

  const projects = [
    {
      id: 1,
      slug: "damac-campaigns",
      title: "DAMAC Luxury Property Campaigns",
      description:
        "Lead generation campaigns for luxury waterfront and off-plan developments.",
      platforms: ["Meta Ads", "Facebook", "Instagram", "TikTok"],
      details:
        "Managed Meta and TikTok advertising campaigns promoting luxury developments. Focused on audience targeting, lead generation and creative optimization.",
      results:
        "Reduced cost per lead while increasing lead quality through continuous testing and optimization.",
      achievements:
        "Generated high-intent property inquiries from local and international buyers.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
        "https://images.unsplash.com/photo-1600566753151-384129cf4e3e"
      ]
    },

    {
      id: 2,
      slug: "binghatti-campaigns",
      title: "Binghatti Developers Campaigns",
      description:
        "Digital advertising campaigns for premium residential developments.",
      platforms: ["Meta Ads", "Instagram", "TikTok"],
      details:
        "Executed performance marketing campaigns focused on investor acquisition and property lead generation.",
      results:
        "Improved engagement rates and generated qualified investor leads.",
      achievements:
        "Increased project visibility and strengthened online presence.",
      images: [
        "https://images.unsplash.com/photo-1460317442991-0ec209397118",
        "https://images.unsplash.com/photo-1494526585095-c41746248156",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
      ]
    },

    {
      id: 3,
      slug: "imtiaz-campaigns",
      title: "Imtiaz Developments Marketing",
      description:
        "Luxury real estate campaigns focused on lifestyle and investment opportunities.",
      platforms: ["Meta Ads", "Facebook", "Instagram"],
      details:
        "Developed targeted advertising campaigns highlighting modern living, amenities and investment value.",
      results:
        "Increased engagement and generated quality buyer inquiries.",
      achievements:
        "Enhanced brand awareness among investors and end-users.",
      images: [
        "https://images.unsplash.com/photo-1484154218962-a197022b5858",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb"
      ]
    },

    {
      id: 4,
      slug: "danube-properties",
      title: "Danube Properties Campaigns",
      description:
        "Performance marketing campaigns for off-plan residential projects.",
      platforms: ["Meta Ads", "Instagram", "TikTok"],
      details:
        "Created and optimized advertising campaigns targeting investors and first-time buyers.",
      results:
        "Increased lead volume while maintaining strong lead quality.",
      achievements:
        "Successfully promoted multiple off-plan launches across Dubai.",
      images: [
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716"
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
            <button
              onClick={goBack}
              className="mb-8 flex items-center gap-2 opacity-80"
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <h1 className="text-4xl font-bold mb-4">
              {selectedProject.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.platforms.map((p) => (
                <span
                  key={p}
                  className="px-3 py-1 text-xs rounded-full bg-white/10"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="opacity-80 mb-6">{selectedProject.details}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Results & Impact</h3>
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
              <motion.h1 className="text-5xl md:text-7xl font-bold">
                Waseem Aftab
              </motion.h1>

              <p className="mt-4 text-lg opacity-70">
                Real Estate Digital Marketing • Meta Ads • TikTok Ads • Lead
                Generation
              </p>

              <div className="flex flex-wrap gap-2 mt-6 justify-center">
                {globalPlatforms.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1 text-xs rounded-full bg-white/10"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </section>

            <section className="px-10 py-20 text-center">
              <h2 className="text-3xl font-semibold mb-4">
                Results and Impact
              </h2>
              <p className="opacity-80 max-w-3xl mx-auto">
                {globalResults}
              </p>
            </section>

            <section className="px-10 py-20 bg-white text-black">
              <h2 className="text-3xl font-semibold mb-8 text-center">
                Achievements
              </h2>

              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {globalAchievements.map((a, i) => (
                  <div key={i} className="p-4 border rounded-xl">
                    {a}
                  </div>
                ))}
              </div>
            </section>

            <section className="min-h-screen px-10 py-24">
              <h2 className="text-3xl font-semibold mb-10">
                Real Estate Case Studies
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((p) => (
                  <motion.div
                    key={p.id}
                    whileHover={{ y: -5 }}
                    onClick={() => openProject(p)}
                    className="cursor-pointer p-6 bg-gray-900 rounded-2xl border border-gray-800"
                  >
                    <h3 className="text-xl font-semibold">{p.title}</h3>

                    <p className="text-sm opacity-70 mt-2">
                      {p.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            <section className="min-h-screen flex items-center justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 px-6 py-3 rounded-full text-black font-semibold"
              >
                <MessageCircle className="inline mr-2" />
                WhatsApp
              </a>
            </section>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

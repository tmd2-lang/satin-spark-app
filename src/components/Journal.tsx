import SectionLabel from "./SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const articles = [
  {
    category: "Web Design",
    title: "Why Your MedSpa Website Is Losing You Patients",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    category: "Compliance",
    title: "HIPAA Compliance for Aesthetics Websites: What You Need to Know",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
];

const Journal = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="journal" ref={ref} className="bg-swann-dark py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <SectionLabel label="Journal" dark />
              <h2 className="font-headline text-[clamp(24px,3vw,36px)] font-bold text-white tracking-[-0.02em] max-w-[520px]">
                Insights at the intersection of aesthetics and technology.
              </h2>
            </div>
            <a
              href="#"
              className="font-body text-[14px] text-swann-gold hover:text-swann-gold-bright transition-colors mt-4 md:mt-0"
            >
              → View All
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <div key={article.title} className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold mb-2 block">
                  {article.category}
                </span>
                <h3 className="font-headline text-[20px] font-bold text-white group-hover:text-white/80 transition-colors">
                  {article.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journal;

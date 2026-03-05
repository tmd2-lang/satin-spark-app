import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import ServiceHero from "@/components/service/ServiceHero";
import ServiceShowcase from "@/components/service/ServiceShowcase";
import ServiceApproach from "@/components/service/ServiceApproach";
import ServicePhilosophy from "@/components/service/ServicePhilosophy";
import ServiceBold from "@/components/service/ServiceBold";
import ServiceDeepDive from "@/components/service/ServiceDeepDive";
import ServiceDifferentiator from "@/components/service/ServiceDifferentiator";
import ServiceJournal from "@/components/service/ServiceJournal";
import ServiceCaseStudies from "@/components/service/ServiceCaseStudies";
import ServiceRelated from "@/components/service/ServiceRelated";
import ContactCTA from "@/components/bespoke/ContactCTA";

const SEOPage = () => (
  <>
    <Navbar />

    <ServiceHero
      pills={["Search & SEO", "Answer Engine Optimization"]}
      headline={<>Show Up Everywhere Your Patients<br />Are Searching. And Everywhere<br />AI Is Answering.</>}
      body="Google still drives 88% of search traffic. But the landscape is shifting — AI answer engines, local map packs, voice search, and AI Overviews are changing how patients find their next provider. Swann builds SEO strategies that capture all of it: traditional search, local visibility, and the new frontier of AI-powered discovery."
      dividerLabel="SEO & AEO Services for Aesthetics"
    />

    <ServiceShowcase
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      label="Swann Project"
      headline={<>When Patients Search for Your Services,<br />You Should Be the Answer —<br />On Google and in AI.</>}
      badge="Search + AI Optimized"
    />

    <ServicePhilosophy
      label="Our Philosophy"
      cards={[
        {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
          title: "Search Is Only Half the Story",
          text: "Your patients don't just Google anymore. They ask ChatGPT. They check Perplexity. They read Google's AI Overviews. If your practice isn't optimized for AI answer engines, you're invisible to an entire generation of patients.",
        },
        {
          image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80",
          title: "Local Visibility Is Everything",
          text: "More than 20% of patient leads come through Google Maps and the local 3-pack. We optimize your Google Business Profile, local citations, and review strategy so you dominate the map results in every market you serve.",
        },
        {
          image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
          title: "Content That Humans Actually Read",
          text: "Too many websites are graveyards of SEO blog posts that nobody opens. We create content your patients genuinely want to consume — procedure guides, FAQ pages, before/after explanations — written to inform, not to game algorithms.",
        },
        {
          image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
          title: "SEO Is a Long Game. We Play It Smart.",
          text: "Rankings don't happen overnight, and anyone promising page one in 30 days is lying. We build sustainable visibility through technical excellence, strategic content, and consistent authority-building that compounds over time.",
        },
      ]}
    />

    <ServiceBold
      label="Swann SEO & AEO"
      headline={<>The Future of Search Isn't Just About<br className="hidden md:block" />Ranking on Google. It's About Being<br className="hidden md:block" />the Answer — Everywhere Patients Ask.</>}
    />

    <ServiceApproach
      image="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80"
      label="The Swann Approach to SEO"
      headline={<>People-First SEO for Search<br />Engines and AI Answer Engines</>}
      body="The old playbook — stuffing keywords, churning out blog posts nobody reads, buying backlinks — doesn't work anymore. Google rewards websites that genuinely serve people. AI answer engines reward content that demonstrates expertise, authority, and trustworthiness. Our SEO strategy is built around one principle: create exceptional content and user experiences that both search algorithms and AI models want to recommend."
      pills={["Bespoke Websites", "Digital Advertising", "Content Strategy"]}
    />

    <ServiceDeepDive
      image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
      label="SEO for Aesthetics Practices"
      headline={<>Patients Are Skeptical.<br />SEO Builds Credibility.</>}
      body="Less than 10% of people click the first ad they see. The majority are more thoughtful — they check reviews, scan organic results, look for names they recognize, and increasingly ask AI for recommendations. Great SEO doesn't just put you at the top of search results. It establishes your practice as the credible, authoritative choice that patients trust before they ever pick up the phone."
      subPoints={[
        { bold: "Organic Results Convert Better", text: "Organic leads have the highest click-through rate of any search channel — converting at 14.6% on average versus 1.7% for paid. Patients trust earned visibility over paid placement." },
        { bold: "AI Engines Favor Expertise", text: "Answer engines like ChatGPT and Perplexity pull from authoritative, well-structured content. If your website clearly demonstrates clinical expertise and patient value, AI models will cite you. If it doesn't, they'll recommend your competitor." },
      ]}
    />

    <ServiceDifferentiator
      image="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80"
      label="Swann SEO Specialties"
      headline={<>We Don't Just Optimize for Google.<br />We Optimize for How People<br />Actually Search.</>}
      body="Traditional agencies treat SEO as a checklist: keywords, backlinks, blog posts, repeat. Swann treats it as an integrated strategy that spans Google organic, local map packs, AI answer engines, voice search, and your website's overall content experience. Because your patients aren't using one channel — they're using all of them. And you need to show up everywhere."
      subBold="Holistic Search Strategy"
      subText="SEO is one piece of a larger puzzle. Our strategies are designed to work alongside your website design, paid advertising, and content marketing — reinforcing each other across every channel rather than operating in silos."
    />

    <ServiceCaseStudies
      caseStudies={[
        {
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
          client: "Luminare Medical Spa",
          description: "A comprehensive SEO and AEO strategy that took Luminare from page 3 to the top 3 results for every major treatment keyword in their market.",
          metrics: [
            { value: "#1", label: "Local Map Pack" },
            { value: "+340%", label: "Organic Traffic" },
            { value: "47", label: "Page-One Keywords" },
          ],
        },
        {
          image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
          client: "Dr. Chen Aesthetics",
          description: "Local SEO domination for a Beverly Hills plastic surgery practice competing against the highest-spend advertisers in the country.",
          metrics: [
            { value: "+280%", label: "Organic Leads" },
            { value: "12", label: "AI Citations" },
            { value: "#1", label: "'Plastic Surgeon Beverly Hills'" },
          ],
        },
        {
          image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
          client: "FORMA Skin Studio",
          description: "Content strategy and technical SEO that established FORMA as the go-to aesthetician studio in a saturated urban market.",
          metrics: [
            { value: "+180%", label: "Organic Traffic" },
            { value: "32", label: "New Content Pages" },
            { value: "3x", label: "Google Reviews" },
          ],
        },
      ]}
    />

    <ServiceJournal
      label="Swann Journal: SEO & AEO"
      headline={<>Your Competitors Are Still Optimizing<br className="hidden md:block" />for 2020. Your Patients Are<br className="hidden md:block" />Searching in 2026.</>}
      articles={[
        { image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", category: "AI Search", title: "How AI Answer Engines Are Changing Patient Discovery" },
        { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", category: "Local SEO", title: "Google Business Profile: The Most Underrated Marketing Asset for Med Spas" },
        { image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80", category: "Content", title: "Why No One Reads Your Blog (And What to Do Instead)" },
        { image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80", category: "Strategy", title: "SEO vs. AEO: What Aesthetics Practices Need to Know" },
      ]}
    />

    <ServiceRelated
      services={[
        { image: "https://images.unsplash.com/photo-1618005198919-d3d4b4b92ead?w=800&q=80", pill: "Bespoke Websites", title: "Bespoke Websites", description: "AI-powered custom websites engineered for beauty, speed, compliance, and conversion." },
        { image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80", pill: "Digital Advertising", title: "Digital Advertising", description: "Targeted Google and Meta campaigns built specifically for patient acquisition in aesthetics." },
      ]}
    />

    <ContactCTA />
    <CTAFooter />
  </>
);

export default SEOPage;

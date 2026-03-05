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

const BrandIdentityPage = () => (
  <>
    <Navbar />

    <ServiceHero
      pills={["Brand Identity", "Aesthetics"]}
      headline={<>Your Brand Is More Than a Logo.<br />It's How Patients Decide Before<br />They Ever Walk In.</>}
      body="Every touchpoint — your website, your Instagram, your waiting room signage, your consultation emails — shapes how patients perceive your practice. Swann builds cohesive brand identities that make aesthetics businesses instantly recognizable, consistently premium, and impossible to confuse with anyone else."
      dividerLabel="Brand Identity for Aesthetics Businesses"
    />

    <ServiceShowcase
      image="https://images.unsplash.com/photo-1618005198919-d3d4b4b92ead?w=1920&q=80"
      label="Swann Project"
      headline={<>In a Market Where Everyone Claims<br />to Be the Best, Your Brand Is How<br />Patients Tell the Difference.</>}
      badge="Complete Brand System"
    />

    <ServicePhilosophy
      label="Our Philosophy"
      cards={[
        {
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
          title: "First Impressions Are Brand Impressions",
          text: "It takes 5 to 7 impressions before someone remembers a brand. Without consistent visual identity, those impressions never build into recognition. Every interaction with your practice — online or in person — needs to tell the same story.",
        },
        {
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
          title: "Differentiation Is the Strategy",
          text: "In the aesthetics industry, most practices say the same things: 'world-class care,' 'state-of-the-art technology,' 'personalized experience.' Your brand needs to communicate what's actually different about you — not what's different about everyone.",
        },
        {
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
          title: "Consistency Builds Trust",
          text: "When a patient sees your Instagram ad, visits your website, walks into your clinic, and opens a follow-up email — every touchpoint should feel like it came from the same practice. That consistency is what separates established brands from forgettable ones.",
        },
        {
          image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
          title: "Brand Guidelines Protect Your Investment",
          text: "A beautiful brand that gets applied inconsistently is a wasted investment. Every Swann brand project includes comprehensive guidelines that empower your team to maintain the standard across every platform and communication.",
        },
      ]}
    />

    <ServiceBold
      label="Swann Brand Identity"
      headline={<>Your Patients Judge Your Clinical<br className="hidden md:block" />Quality by Your Visual Quality.<br className="hidden md:block" />Make Sure They Match.</>}
    />

    <ServiceApproach
      image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
      label="The Swann Approach to Branding"
      headline={<>More Than Colors and Fonts.<br />A Complete Identity System.</>}
      body="Branding isn't about picking pretty colors and calling it done. It's strategic engineering — analyzing your market, understanding your ideal patient, identifying what makes you genuinely different, and then translating all of that into a visual and verbal system that works across every touchpoint. When Swann builds a brand, it's built to scale, built to be consistent, and built to be remembered."
      pills={["Bespoke Websites", "Social Media"]}
    />

    <ServiceDeepDive
      image="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80"
      label="Branding for Aesthetics Practices"
      headline={<>The Complete<br />Brand System</>}
      body="A Swann brand identity isn't a logo and a color palette handed over in a PDF. It's a strategic system built from discovery — understanding your practice, your patients, your market, and your goals — and delivered as a complete toolkit that works across every channel your practice operates in."
      subPoints={[
        { bold: "Strategic Foundation", text: "We start with brand strategy: mission, positioning, value proposition, competitive analysis, patient personas, and voice definition. The visuals come second. The thinking comes first." },
        { bold: "Visual Identity System", text: "Logo design, color palette, typography, imagery guidelines, iconography, and graphic elements — all documented in comprehensive brand guidelines with clear rules for application across digital and print." },
      ]}
    />

    <ServiceDifferentiator
      image="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80"
      label="Swann Branding Specialties"
      headline={<>We Build Brands for an Industry<br />That Demands Visual Excellence.</>}
      body="Aesthetics practices exist in a unique space — patients expect the same level of beauty and attention to detail in your marketing that they expect from your treatments. A brand that looks generic, outdated, or inconsistent doesn't just fail to attract patients — it actively undermines the quality of care you provide. Swann understands this because aesthetics is all we do. Every brand we build meets the visual standard your patients already hold you to."
      subBold="Aesthetics-Native Branding"
      subText="We don't build brands for law firms and then try to adapt the thinking for med spas. Our entire design sensibility, our reference points, our understanding of patient psychology — it's all rooted in the aesthetics industry from the ground up."
    />

    <ServiceCaseStudies
      caseStudies={[
        {
          image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
          client: "Luminare Medical Spa",
          description: "A complete brand transformation that repositioned Luminare from a local medspa into a luxury regional brand with a cohesive identity across 5 locations.",
          metrics: [
            { value: "Complete", label: "Brand System" },
            { value: "5", label: "Location Rollout" },
            { value: "+240%", label: "Patient Inquiries" },
          ],
        },
        {
          image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
          client: "FORMA Skin Studio",
          description: "Brand identity from scratch for a modern aesthetician studio launching in a competitive urban market.",
          metrics: [
            { value: "Logo +", label: "Visual Identity" },
            { value: "Full", label: "Brand Guidelines" },
            { value: "Social", label: "Media Templates" },
          ],
        },
        {
          image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
          client: "Dr. Chen Aesthetics",
          description: "Brand refresh that elevated a respected plastic surgery practice's digital presence to match the quality of their clinical reputation.",
          metrics: [
            { value: "Brand", label: "Repositioning" },
            { value: "Full", label: "Visual Overhaul" },
            { value: "2x", label: "Consultation Rate" },
          ],
        },
      ]}
    />

    <ServiceJournal
      label="Swann Journal: Brand Identity"
      headline={<>A Strong Brand Isn't an Expense.<br className="hidden md:block" />It's the Foundation Everything<br className="hidden md:block" />Else Is Built On.</>}
      articles={[
        { image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80", category: "Branding", title: "Why Most MedSpa Brands Look the Same (And How to Fix It)" },
        { image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", category: "Strategy", title: "Brand Positioning for Aesthetics: Finding What Makes You Different" },
        { image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80", category: "Design", title: "The Anatomy of a Premium Brand Identity System" },
        { image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80", category: "Consistency", title: "Brand Guidelines: Why Your Team Needs Them Yesterday" },
      ]}
    />

    <ServiceRelated
      services={[
        { image: "https://images.unsplash.com/photo-1629397685944-7073299d5113?w=800&q=80", pill: "Bespoke Websites", title: "Bespoke Websites", description: "AI-powered custom websites engineered for beauty, speed, compliance, and conversion." },
        { image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80", pill: "Social Media", title: "Social Media", description: "Strategic content and community management built specifically for aesthetics audiences." },
      ]}
    />

    <ContactCTA />
    <CTAFooter />
  </>
);

export default BrandIdentityPage;

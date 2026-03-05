import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import BespokeHero from "@/components/bespoke/BespokeHero";
import FeaturedShowcase from "@/components/bespoke/FeaturedShowcase";
import OurApproach from "@/components/bespoke/OurApproach";
import PhilosophyCarousel from "@/components/bespoke/PhilosophyCarousel";
import BoldStatement from "@/components/bespoke/BoldStatement";
import DeepDive from "@/components/bespoke/DeepDive";
import Differentiator from "@/components/bespoke/Differentiator";
import JournalFeed from "@/components/bespoke/JournalFeed";
import CaseStudiesCarousel from "@/components/bespoke/CaseStudiesCarousel";
import RelatedServices from "@/components/bespoke/RelatedServices";
import ContactCTA from "@/components/bespoke/ContactCTA";

const BespokeWebsites = () => (
  <>
    <Navbar />
    <BespokeHero />
    <FeaturedShowcase />
    <PhilosophyCarousel />
    <BoldStatement />
    <OurApproach />
    <DeepDive />
    <Differentiator />
    <CaseStudiesCarousel />
    <JournalFeed />
    <RelatedServices />
    <ContactCTA />
    <CTAFooter />
  </>
);

export default BespokeWebsites;

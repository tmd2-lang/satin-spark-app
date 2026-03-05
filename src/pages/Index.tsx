import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import CTAFooter from "@/components/CTAFooter";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Industries />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <Journal />
      <CTAFooter />
    </div>
  );
};

export default Index;

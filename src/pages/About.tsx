import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import AboutHero from "@/components/about/AboutHero";
import AboutImage from "@/components/about/AboutImage";
import TheWhy from "@/components/about/TheWhy";
import AboutBoldStatement from "@/components/about/AboutBoldStatement";
import WhatWeBelieve from "@/components/about/WhatWeBelieve";
import TheApproach from "@/components/about/TheApproach";
import AboutStats from "@/components/about/AboutStats";
import AboutTestimonial from "@/components/about/AboutTestimonial";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => (
  <>
    <Navbar />
    <AboutHero />
    <AboutImage />
    <TheWhy />
    <AboutBoldStatement />
    <WhatWeBelieve />
    <TheApproach />
    <AboutStats />
    <AboutTestimonial />
    <AboutCTA />
    <CTAFooter />
  </>
);

export default About;

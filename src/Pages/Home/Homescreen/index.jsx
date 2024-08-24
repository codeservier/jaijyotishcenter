import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import KnowYourSign from "../KnowYourSign";
import MySkills from "../OurServices";
import OurProducts from "../OurProducts";
import Testimonial from "../Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <KnowYourSign/>
      <OurProducts/>
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}

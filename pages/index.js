import Layout from "components/Layout";
import HeroSection from "components/HeroSection";
import HowItWorks from "components/HowItWorks";
import Testimonials from "components/Testimonials";
import Teams from "components/Teams";

const ContactUs = () => {
  return (
    <Layout>
      <div className="relative bg-white w-full text-center overflow-hidden text-black font-outfit mt-32">
        <HeroSection />
        <HowItWorks />
        <Testimonials />
        <Teams />
      </div>
    </Layout>
  );
};

export default ContactUs;

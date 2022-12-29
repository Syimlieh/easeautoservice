import Layout from "components/Layout";
import HeroSection from "components/HeroSection";
import HowItWorks from "components/HowItWorks";
// import Testimonial from "components/Testimonial";
import TeamsSection from "components/TeamsSection";
import Testimonials from "components/Testimonials";

const ContactUs = () => {
  return (
    <Layout>
      <div className="relative bg-white w-full text-center  text-black font-outfit mt-32">
        <HeroSection />
        <HowItWorks />
        <Testimonials />
        <TeamsSection />
      </div>
    </Layout>
  );
};

export default ContactUs;

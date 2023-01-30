import Navbar from "../components/common/Navbar";
import AboutComponent from "components/AboutUs";
import Layout from "components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="relative bg-white w-full text-center text-black font-outfit mt-32">
        <AboutComponent />
      </div>
    </Layout>
  );
};

export default AboutPage;

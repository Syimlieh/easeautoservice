import Layout from "components/Layout";
import CarDetailsComponent from "components/CarDetailsComponent";

const CarDetails = () => {
  return (
    <Layout>
      <div className="relative bg-white w-full text-left  text-black font-outfit mt-32">
        <CarDetailsComponent />
      </div>
    </Layout>
  );
};

export default CarDetails;

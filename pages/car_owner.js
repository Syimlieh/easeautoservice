import Layout from "components/Layout";
import CarOwnerComponent from "components/CarOwnerComponent";

const CarOwner = () => {
  return (
    <Layout>
      <div className="relative bg-white w-full text-center text-black font-outfit mt-32">
        <CarOwnerComponent />
      </div>
    </Layout>
  );
};

export default CarOwner;

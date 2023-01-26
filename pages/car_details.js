import Layout from "components/Layout";
import CarDetailsComponent from "components/CarDetailsComponent";
import axios from "axios";

const CarDetails = () => {
  return (
    <Layout>
      <div className="relative bg-white w-full text-left text-black font-outfit mt-32">
        <CarDetailsComponent />
      </div>
    </Layout>
  );
};

// export async function getServerSideProps() {
//   const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/brand`);
//   const data = result.data.data;
//   return {
//     props: { data }, // will be passed to the page component as props
//   };
// }
export default CarDetails;

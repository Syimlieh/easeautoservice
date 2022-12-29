import { useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";

const Accepted = () => {
  const router = useRouter();

  const onOfferAceptedButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Layout>
      <div className="relative bg-white w-full text-center text-black font-outfit mt-32">
        <div className="rounded-[10px] bg-white shadow-[10px_10px_10px_5px_rgba(0,_0,_0,_0.25)] p-[4rem_17rem] box-border items-center  text-2xl">
          <h2 className="relative text-brown font-semibold font-inherit inline-block ">
            Congratulation
          </h2>
          <div className="w-full h-auto text-xs mt-24">
            <p className="mb-8">
              Congratulations on accepting our offer for your used car! We are
              excited to move forward with the sale and make the process as
              smooth and stress-free as possible for you.
            </p>
            <p className="mb-8">
              We will be sending a further confirmation message shortly, as well
              as giving you a call to discuss the pickup location and any other
              details.
            </p>
            <p className="">
              We will be sending a further confirmation message shortly, as well
              as giving you a call to discuss the pickup location and any other
              details.
            </p>
          </div>

          <button
            className="m-auto cursor-pointer mt-24 [border:none] p-[1rem_4rem] text-base font-semibold font-poppins text-white text-center bg-indigo-300 rounded-[10px] flex items-start justify-start"
            onClick={onOfferAceptedButtonClick}
          >
            Back to Home
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Accepted;

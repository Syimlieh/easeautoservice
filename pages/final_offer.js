import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";

const FInalOffer = () => {
  const router = useRouter();

  const [offer, setOffer] = useState();

  const onFinalOfferAceptButtonClick = useCallback(() => {
    router.push("/accepted");
  }, [router]);

  useEffect(() => {
    setOffer(JSON.parse(localStorage.getItem("final_offer")));
  }, []);

  return (
    <Layout>
      <div className="relative bg-white w-full text-center text-black font-outfit mt-32">
        <div className="rounded-[10px] bg-white shadow-[10px_10px_10px_5px_rgba(0,_0,_0,_0.25)] p-[4rem_2rem] xs:p-[4rem_5rem] lg:p-[4rem_17rem] box-border items-center  text-2xl">
          <h2 className="relative text-lg lg:text-[3.5rem] font-semibold font-inherit inline-block">
            <span>Final</span>
            <span className="text-brown"> Offer</span>
          </h2>
          <div className="w-full h-auto mt-24 mb-8 text-2xs lg:text-xs">
            <p className="mb-8">
              Thank you for submitting your car's information to our service.
              After reviewing all the details, we are pleased to offer you
              bettween &nbsp;
              <span className="text-brown font-poppins font-semibold">
                {offer?.price.min_price < 0 ? (
                  <span>
                    {offer?.price.min_price.toString().replace(/\-/g, "")}
                    &nbsp;&nbsp; - &nbsp;&nbsp;
                    {offer?.price.max_price.toString().replace(/\-/g, "")}
                  </span>
                ) : (
                  <span>
                    {offer?.price.min_price} &nbsp;&nbsp; - &nbsp;&nbsp;
                    {offer?.price.max_price}
                  </span>
                )}
                {/* {offer?.price.min_price} - {offer?.price.max_price} */}
              </span>
              &nbsp; for your{" "}
              <span className="text-brown font-poppins font-semibold">
                {offer?.model}
              </span>{" "}
              car.
            </p>
            <p className="mb-8 ">
              If you accept this offer, we will handle all the paperwork for you
              and arrange for pickup at a time and place that is convenient for
              you.
            </p>
            <p className="">
              Please let us know if you would like to proceed with this offer.
              We look forward to completing the sale with you and making the
              process as easy and hassle-free as possible.
            </p>
          </div>
          <button
            className="m-auto cursor-pointer mt-24 [border:none] p-[.7rem_3.4rem] text-xs font-semibold font-poppins text-white text-center bg-indigo-300 rounded-[10px] flex items-start justify-start"
            onClick={onFinalOfferAceptButtonClick}
          >
            Accept
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default FInalOffer;

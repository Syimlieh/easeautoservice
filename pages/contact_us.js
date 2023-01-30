import ConnectMethods from "components/ContactUs/ConnectMethods";
import ContactUsComponent from "components/ContactUs";
import Layout from "components/Layout";
import React from "react";

const contact_us = () => {
  return (
    <Layout>
      <div className="relative mt-32 bg-white w-full text-black font-outfit">
        <ContactUsComponent />
        <ConnectMethods />
      </div>
    </Layout>
  );
};

export default contact_us;

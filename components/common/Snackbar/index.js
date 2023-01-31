import React, { useEffect, useState } from "react";

const Snackbar = ({ error, success }) => {
  const [message, setMessage] = useState(error || success);

  useEffect(() => {
    setMessage(error || success);
    const timer = setTimeout(() => setMessage(), [10000]);
    return () => clearTimeout(timer);
  }, [error, success]);

  if (message) {
    return (
      <div
        className={`snackbar fixed bottom-20 right-0 bg-brown p-[1rem_2rem]  rounded-l-full`}
      >
        <p className="text-white text-3xs font-poppins font-semibold tracking-wider">
          {message}
        </p>
      </div>
    );
  }
};

export default Snackbar;

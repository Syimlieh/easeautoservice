const { useState, useEffect } = require("react");

export const useWindowSize = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
};

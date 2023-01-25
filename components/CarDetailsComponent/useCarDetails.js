export const useFetchBrand = async () => {
  await axios
    .get(`${process.env.NEXT_PUBLIC_BASE_URL}/brand`)
    .then((response) => {
      console.log("Car Brand" + JSON.stringify(response.data));
      return response.data.data;
    })
    .catch((error) => {
      console.log(" error:");
      console.log(error);
    });
};

export default useCarDetails;

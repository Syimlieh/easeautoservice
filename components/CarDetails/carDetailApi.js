import axios from "axios";

export async function carDetailApi({
  registerYear,
  carBrand,
  car_models,
  fuel_type,
  kilometerDriven,
  router,
}) {
  await axios
    .post(process.env.NEXT_PUBLIC_ML_MODEL, {
      company: carBrand,
      car_models: car_models,
      year: registerYear,
      fuel_type: fuel_type,
      kilo_driven: kilometerDriven,
    })
    .then((response) => {
      console.log(response.data);
      localStorage.setItem(
        "final_offer",
        JSON.stringify({
          price: response.data,
          model: car_models,
        })
      );
      router.push("/final_offer");
    })
    .catch((error) => {
      console.log(" error: Fetching car price " + error?.message);
    });
}

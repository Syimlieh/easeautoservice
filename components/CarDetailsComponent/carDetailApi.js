import axios from "axios";

export async function carDetailApi(
  registerYear,
  carBrand,
  carModel,
  carVariant,
  kilometerDriven
) {
  await axios
    .post(process.env.NEXT_PUBLIC_ML_MODEL, {
      company: carBrand,
      car_models: carModel,
      year: registerYear,
      fuel_type: carVariant,
      kilo_driven: kilometerDriven,
    })
    .then((response) => {
      console.log("machine learning " + response.data);
      console.log("machine learning " + response.data.result);
      return response.data;
    })
    .catch((error) => {
      // setResError(error.response.data.message);
      console.log(" error: ");
      console.log(error);
    });
}

import axios from "axios";

export function carDetailApi(
  registerYear,
  carBrand,
  carModel,
  carVariant,
  kilometerDriven
) {
  axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
      registerYear,
      carBrand,
      carModel,
      carVariant,
      kilometerDriven,
    })
    .then((response) => {
      router.push("/auth/signin");
    })
    .catch((error) => {
      setResError(error.response.data.message);
      console.log("register error: " + error.response.data.message);
      console.log(error);
    });
}

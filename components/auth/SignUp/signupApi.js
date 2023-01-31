import axios from "axios";

export async function registerApi(
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  router
) {
  await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    })
    .then((response) => {
      router.push("/auth/signin");
      return response;
    })
    .catch((error) => {
      console.log("register error: " + error.response.data.message);
      return error;
    });
}

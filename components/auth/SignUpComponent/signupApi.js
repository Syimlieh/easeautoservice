import axios from "axios";
export const signupApi = async ({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
}) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      }
    );
    console.log(response);
    return response; // Converting to JSON
  } catch (error) {
    console.log(error);
  }
};

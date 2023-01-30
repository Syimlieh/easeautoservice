import axios from "axios";

export async function contactUsApi({
  name,
  email,
  subject,
  phoneNumber,
  message,
}) {
  await axios
    .post(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
      name,
      email,
      subject,
      phoneNumber,
      message,
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

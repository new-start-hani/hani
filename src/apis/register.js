import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const postSignUp = async ({
  email,
  password,
  hobby,
  nickname,
  gender,
  age,
}) => {
  const res = await axios.post(
    `${BASE_URL}/signup`,
    {
      email,
      password,
      hobby,
      nickname,
      gender,
      age,
    },
    {
      headers: {
        "Content-Type": "Application/json",
      },
      withCredentials: false,
    }
  );

  return res.data;
};

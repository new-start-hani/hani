import axios from "axios";

const BASE_URL = "http://172.16.0.83:8090";

export const getFeedList = async () => {
  const res = await axios.get(`${BASE_URL}/api/collections/post/records`);

  return res.data;
};

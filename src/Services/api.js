import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:5000/api";
export const setHeaders = () => {
  axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
  axios.defaults.headers.common["Accept"] = "application/json";
};

export const postReq = async (enpoint, payload) => {
  console.log("PAYLOAD", payload);
  console.log("ENDPOINT", enpoint);
  setHeaders();
  return await axios
    .post(`${enpoint}`, payload)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
};

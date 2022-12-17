import { postReq } from "../api";

// Create new job
export const getImage = async (payload) => {
  try {
    const response = await postReq("/generate_image", payload);
    console.log("RESPONSE", response);
    return response;
  } catch (error) {
    console.log("ERROR", error);
  }
};

import fetch from "isomorphic-fetch";
import { BASE_URL } from "../utils/constants";

const single = async (id) => {
  const data = await fetch(`${BASE_URL}/categories/${id}`);
  return await data.json();
};

module.exports = { single };

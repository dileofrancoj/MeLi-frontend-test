import fetch from "isomorphic-fetch";
import { BASE_URL } from "../utils/constants";

const list = async (q, limit = 4) => {
  const data = await fetch(
    `${BASE_URL}/sites/MLA/search?q=${q}&limit=${limit}`
  );
  return await data.json();
};

const single = async (id) => {
  const data = await fetch(`${BASE_URL}/items/${id}`);
  return await data.json();
};

const singleDescription = async (id) => {
  const data = await fetch(`${BASE_URL}/items/${id}/description`);
  return await data.json();
};

module.exports = { list, single, singleDescription };

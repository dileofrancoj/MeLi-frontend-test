import fetch from "isomorphic-fetch";
import { BASE_URL } from "../utils/constants";

class Categories {
  async single(id) {
    const data = await fetch(`${BASE_URL}/categories/${id}`);
    return await data.json();
  }
}

module.exports = { Categories };
